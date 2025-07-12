---
title: "The Hidden Performance Trap in CRDTs: Why Your Real-Time Collaboration is Slower Than It Should Be"
description: "The promise of CRDTs (Conflict-free Replicated Data Types) is compelling: conflict-free real-time collaboration that \"just works.\" But there's often a massive gap between what looks good in academic papers and what actually performs in production."
date: 2025-07-12
tags: ["crdt", "distributed-systems", "real-time", "performance", "collaboration"]
author: "Aaron Rumery"
draft: false
---

The promise of CRDTs (Conflict-free Replicated Data Types) is compelling: conflict-free real-time collaboration that "just works." But there's often a massive gap between what looks good in academic papers and what actually performs in production.

Here's a number that might surprise you: Yjs, which powers some of the fastest collaborative editors in production, regularly outperforms academic CRDT implementations like Automerge by 10x or more.

Why does this happen? It comes down to a fundamental tension between mathematical elegance and engineering pragmatism. Academic researchers optimize for theoretical correctness. Industry teams optimize for users who will abandon your app if it feels slow.

## The Tale of Two Approaches

When I first encountered CRDTs, the academic approach made perfect sense to me. Documents have structure, right? Paragraphs contain sentences, lists contain items, tables contain rows and cells. So naturally, you'd represent this as a tree where each piece of content knows its place in the hierarchy.

This is exactly what academic implementations like Automerge do. They create these elegant tree structures that are mathematically beautiful and theoretically sound. On paper, it's gorgeous. In practice? Well, that's where things get interesting.

The problem is that tree traversal is expensive, especially when you're dealing with thousands of edits happening in real time. Every time someone types a character, deletes a word, or moves a paragraph, the system has to navigate from the root of the tree down to the right location.

```typescript
// Academic approach (simplified Automerge-style)
class TreeBasedCRDT {
  private root: Node;
  
  insert(position: Position, content: string): void {
    // Navigate from root to insertion point
    let current = this.root;
    for (let step of position.path) {
      current = current.children[step];
    }
    
    // Insert new node - requires tree rebalancing
    this.insertNode(current, content);
    this.rebalanceTree(current);
  }
  
  // O(log n) for balanced trees, O(n) worst case
  private insertNode(parent: Node, content: string): void {
    // Complex tree manipulation logic
  }
}
```

Every insertion, deletion, or modification triggers tree traversal and potentially expensive rebalancing operations. In collaborative scenarios with frequent edits, this overhead compounds quickly.

Kevin Jahns with Yjs had a radically different idea. What if, instead of maintaining this complex tree structure, you just kept everything in a flat list? It sounds almost too simple to work, but this one change eliminated most of the performance problems that plagued tree-based approaches:

```typescript
// Industrial approach (Yjs-inspired)
class PlainlistCRDT {
  private items: Item[] = [];
  private deletedItems: Set<ItemID> = new Set();
  
  insert(position: number, content: string): void {
    // Direct array access - O(1) for position lookup
    const item = new Item({
      id: this.generateID(),
      content,
      left: this.items[position - 1]?.id,
      right: this.items[position]?.id
    });
    
    // Simple array insertion - O(n) but with good constants
    this.items.splice(position, 0, item);
  }
  
  // Conflict resolution via lamport timestamps
  private generateID(): ItemID {
    return {
      client: this.clientId,
      clock: this.incrementClock()
    };
  }
}
```

The genius of this approach is that you get all the benefits of conflict-free collaboration without the overhead of tree traversal. Items still know about their logical neighbors, but physically, everything lives in a simple array.

## When Theory Meets Reality

Distributed systems are messy in ways that academic papers rarely capture. Network connections drop at the worst possible moments. Users do unexpected things. And CRDTs, despite their mathematical beauty, aren't immune to these realities.

Imagine two users editing the same document when the network connection between them suddenly dies. They keep editing, blissfully unaware that their changes aren't syncing. Then the connection comes back.

```typescript
// User A and B both edit position 5 simultaneously
// Network partition prevents synchronization

// User A's perspective:
document.insert(5, "Hello ");
// Document: "The Hello world"

// User B's perspective (on different replica):
document.insert(5, "amazing ");
// Document: "The amazing world"

// When partition heals, which edit wins?
// Academic: Both are preserved via sophisticated conflict resolution
// Reality: Users are confused by unexpected text ordering
```

Academic CRDTs will dutifully preserve both edits, which is mathematically correct but might leave users scratching their heads at the weird text ordering. Industrial systems often use common-sense heuristics based on connection quality, timing, or user priority. Not as elegant, but much more predictable for actual humans.

The complexity only gets worse when you have multiple people editing simultaneously. I've seen collaborative editing systems that work perfectly with two users but completely break down the moment a third person joins the document.

When three or more people edit concurrently, the mathematics become exponentially more complex. You need to consider every possible ordering of operations and how they interact with each other. The computational overhead becomes prohibitive, and the implementation complexity grows beyond what most development teams can handle reliably.

There's another issue that academic papers love to gloss over. Memory usage can spiral out of control in real-world scenarios. CRDTs need to keep track of deleted items (called "tombstones") and edit history for conflict resolution, and this metadata can grow without bounds.

```typescript
// Memory grows with edit history
class AcademicCRDT {
  private history: EditHistory[] = []; // Never cleaned up
  private tombstones: DeletedItem[] = []; // Accumulate indefinitely
  
  // Memory usage grows monotonically
  delete(position: number): void {
    const item = this.items[position];
    this.tombstones.push(item); // Keep for conflict resolution
    this.history.push(new DeleteOperation(item));
  }
}
```

Documents that started at a few kilobytes grow to hundreds of megabytes just from the accumulated metadata. Industrial implementations deal with this by being ruthless about garbage collection and finding clever ways to compact or discard old tombstones without breaking the conflict resolution guarantees.

## So What Should You Actually Use?

When should you use which type of CRDT implementation?

If you're building something where absolute correctness matters more than performance, like a legal document editor or scientific collaboration tool, academic CRDTs like Automerge might be worth the performance trade-off. They're mathematically rigorous and handle edge cases that might matter in high-stakes scenarios.

But if you're building a product where user experience is paramount, where people expect Google Docs-level responsiveness, industrial implementations like Yjs are probably your best bet.

Here are some practical tips I've learned for getting better performance out of CRDTs, regardless of which implementation you choose.

```typescript
// Poor: resolve conflicts on every operation
class SlowCRDT {
  insert(position: number, content: string): void {
    this.resolveAllConflicts(); // Expensive
    this.doInsert(position, content);
  }
}

// Better: batch conflict resolution
class FastCRDT {
  private pendingOps: Operation[] = [];
  
  insert(position: number, content: string): void {
    this.pendingOps.push(new InsertOp(position, content));
    
    // Resolve conflicts periodically, not on every op
    if (this.pendingOps.length > BATCH_SIZE) {
      this.flushPendingOps();
    }
  }
}
```

Don't try to resolve conflicts on every single operation. Batch them up and process them periodically instead.

```typescript
class OptimizedCRDT {
  private items: Item[] = [];
  private tombstones: Map<ItemID, Item> = new Map();
  
  // Periodically clean up old tombstones
  garbageCollect(): void {
    const cutoff = Date.now() - TOMBSTONE_TTL;
    
    for (let [id, item] of this.tombstones) {
      if (item.deletedAt < cutoff) {
        this.tombstones.delete(id);
      }
    }
  }
}
```

And remember to clean up your tombstones regularly. Otherwise, your memory usage will grow without bounds.

```typescript
// Poor: send individual operations
operations.forEach(op => network.send(op));

// Better: compress and batch operations
const compressedBatch = compress(operations);
network.sendBatch(compressedBatch);
```

For network synchronization, batch your operations instead of sending them one at a time.

## Looking Forward

The gap between academic CRDTs and industrial implementations highlights something I see constantly in distributed systems. There's often a huge chasm between what works in theory and what works when real users are hammering your servers.

I think we're starting to see more collaboration between the research community and the folks building production systems. Some newer approaches are trying to get the best of both worlds - the mathematical rigor of academic work with the performance characteristics that users actually need.

We're seeing hybrid systems that use fast paths for common operations and fall back to more sophisticated algorithms only when necessary. There's also interesting work happening with WebAssembly that might let us share high-performance CRDT implementations across different platforms without sacrificing speed.

Users deserve collaborative applications that are both mathematically sound and fast enough to feel magical. Getting there requires researchers who think about real-world constraints and engineers who contribute their findings back to the academic community.

As more applications add real-time collaboration features, understanding these trade-offs becomes crucial. The architectural decisions you make early on will fundamentally shape your users' experience. They'll either enjoy seamless, responsive collaboration or find themselves frustrated by delays that interrupt their work.

---

*Interested in diving deeper into CRDT implementation details? The [Yjs documentation](https://docs.yjs.dev/) provides excellent insights into industrial CRDT design, while [Automerge](https://automerge.org/) offers a more academically rigorous approach. For performance benchmarks, check out the [CRDT benchmarking suite](https://github.com/dmonad/crdt-benchmarks) that compares different implementations under realistic workloads.*
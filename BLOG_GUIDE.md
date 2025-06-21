# Blog Guide

This guide explains how to add new blog posts to your personal website and manage the blog section.

## Blog Architecture

The blog is built using Astro.js content collections, which provides:
- Type-safe frontmatter validation
- Automatic routing for new posts
- Built-in markdown processing
- SEO optimization

### File Structure

```
src/
├── content/
│   ├── blog/                    # Blog posts directory
│   │   └── *.md                 # Individual blog posts
│   └── config.mjs               # Content collections schema
├── layouts/
│   └── BlogLayout.astro         # Blog post layout
└── pages/
    └── blog/
        ├── index.astro          # Blog listing page
        └── [...slug].astro      # Dynamic blog post pages
```

## Adding a New Blog Post

### 1. Create the Markdown File

Create a new `.md` file in `src/content/blog/` with a descriptive filename:

```bash
src/content/blog/my-new-post.md
```

### 2. Add Frontmatter

Every blog post must include frontmatter at the top:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post for SEO and previews"
date: 2025-01-20
tags: ["tag1", "tag2", "tag3"]
author: "Aaron Rumery"
draft: false
---
```

#### Frontmatter Fields

- **title** (required): The post title
- **description** (required): SEO description and preview text
- **date** (required): Publication date in YYYY-MM-DD format
- **tags** (optional): Array of tags for categorization
- **author** (optional): Defaults to "Aaron Rumery"
- **draft** (optional): Set to `true` to hide from production
- **image** (optional): Featured image URL
- **imageAlt** (optional): Alt text for featured image

### 3. Write Your Content

Write your blog post content in Markdown below the frontmatter:

```markdown
---
title: "My New Post"
description: "This is my new blog post"
date: 2025-01-20
tags: ["web-development", "javascript"]
---

# My New Post

Your content goes here...

## Code Examples

```javascript
function example() {
  console.log("Hello, world!");
}
```

## Lists

- Item 1
- Item 2
- Item 3

## Links

Check out [this resource](https://example.com) for more information.
```

### 4. Preview Your Post

1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:4321/blog`
3. Click on your new post to preview it

## Styling and Features

### Code Syntax Highlighting

Code blocks are automatically styled with syntax highlighting:

```javascript
// This will be highlighted
const greeting = "Hello, world!";
console.log(greeting);
```

### Supported Elements

The blog layout supports all standard Markdown elements:

- **Headings** (H1-H6) with automatic styling
- **Code blocks** with syntax highlighting
- **Inline code** with background styling
- **Blockquotes** with left border and background
- **Lists** (ordered and unordered)
- **Links** with hover effects
- **Tables** with responsive styling
- **Images** with automatic optimization
- **Horizontal rules** for section breaks

### Custom Styling

Blog-specific styles are defined in `src/styles/global.css` under the "Blog-specific styles" section. The styling maintains the existing "code" aesthetic with:

- Dark theme colors matching the main site
- Syntax highlighting for code blocks
- Hover effects and transitions
- Responsive design
- Typography optimized for reading

## Blog Navigation

The blog is integrated into the main site navigation:

- **Header**: Blog link appears in the main navigation
- **Blog Index**: Lists all published posts with previews
- **Individual Posts**: Include back navigation and metadata
- **SEO**: Automatic meta tags and structured data

## Publishing Workflow

### Development
1. Create your post with `draft: true`
2. Preview locally with `npm run dev`
3. Refine content and styling

### Publishing
1. Set `draft: false` in frontmatter
2. Commit changes to your repository
3. Deploy using your preferred method

### Post-Publication
- Posts automatically appear in the blog index
- Navigation and SEO are handled automatically
- Social sharing metadata is generated

## Best Practices

### Content
- Write clear, descriptive titles
- Include relevant tags for discoverability
- Use proper heading hierarchy (H1 → H2 → H3)
- Add code examples where appropriate
- Include external links for references

### SEO
- Write compelling descriptions (150-160 characters)
- Use descriptive filenames (becomes the URL slug)
- Include relevant keywords naturally
- Add alt text for images

### Performance
- Optimize images before adding them
- Keep posts focused and scannable
- Use code blocks for better readability
- Test on mobile devices

## Troubleshooting

### Common Issues

**Post not appearing in blog index:**
- Check that `draft: false` in frontmatter
- Verify the date format is correct (YYYY-MM-DD)
- Ensure the file is in `src/content/blog/`

**Styling issues:**
- Check that frontmatter is properly formatted
- Verify markdown syntax is correct
- Clear browser cache and restart dev server

**Build errors:**
- Validate frontmatter against the schema in `src/content.config.mjs`
- Check for syntax errors in markdown
- Ensure all required fields are present

### Getting Help

If you encounter issues:
1. Check the Astro.js documentation for content collections
2. Verify your markdown syntax
3. Review the browser console for errors
4. Test with a minimal example post

## Future Enhancements

Potential improvements to consider:
- RSS feed generation
- Search functionality
- Comment system integration
- Social sharing buttons
- Related posts suggestions
- Reading time estimation
- Table of contents generation

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#282C34',
        secondary: '#50AFEF',
        tertiary: '#D3C07B',
        fourth: '#C678DD',
        fifth: '#E06C75',
        sixth: '#98C379',
        'primary-dark': '#21252B',
        'primary-light': '#4D515A',
        brackets: '#73DACA',
        text: '#9ECE6A',
      },
      boxShadow: {
        'card': '0px 10px 30px -10px rgba(0,0,0,0.7)',
        'xxxl': '0px 3px 16px 5px rgba(0,0,0,0.3)',
        'stylish': '0px 5px 20px 1px rgba(0,0,0,0.4)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Base prose styles
            maxWidth: 'none',
            color: theme('colors.gray.300'),
            lineHeight: '1.6',
            
            // Headings
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.gray.100'),
              fontWeight: '700',
              letterSpacing: '-0.02em',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
            },
            
            // H1 specific
            h1: {
              fontSize: '1.75rem',
              lineHeight: '1.25',
              marginTop: '0',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #f9fafb, #d1d5db)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            },
            
            // H2 specific
            h2: {
              fontSize: '1.5rem',
              lineHeight: '1.25',
              marginTop: '2rem',
              marginBottom: '1rem',
              color: theme('colors.blue.400'),
              paddingBottom: '0.5rem',
            },
            
            // H3 specific
            h3: {
              fontSize: '1.25rem',
              lineHeight: '1.25',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
              color: theme('colors.yellow.400'),
              paddingBottom: '0.25rem',
            },
            
            // H4 specific
            h4: {
              fontSize: '1.125rem',
              lineHeight: '1.25',
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
              color: theme('colors.purple.400'),
              paddingBottom: '0.25rem',
            },
            
            // Paragraphs
            p: {
              marginTop: '0',
              marginBottom: '1.25rem',
              lineHeight: '1.6',
              textWrap: 'pretty',
              maxWidth: '100%',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
            },
            
            // Links
            a: {
              color: theme('colors.blue.400'),
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              fontWeight: '500',
              '&:hover': {
                borderBottomColor: theme('colors.blue.400'),
                transform: 'translateY(-1px)',
              },
            },
            
            // Code blocks
            pre: {
              backgroundColor: 'transparent',
              background: 'linear-gradient(135deg, #21252b, #1a1e24)',
              border: '1px solid #4d515a',
              borderRadius: '0.5rem',
              padding: '1rem',
              margin: '1.5rem 0',
              overflowX: 'auto',
              overflowY: 'visible',
              maxWidth: '100%',
              minWidth: '0',
              width: '100%',
              boxSizing: 'border-box',
              scrollbarWidth: 'thin',
              scrollbarColor: '#4d515a transparent',
              WebkitOverflowScrolling: 'touch',
            },
            
            // Inline code
            code: {
              color: '#d3c07b',
              padding: '0.125rem 0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
              fontWeight: '500',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '100%',
              display: 'inline',
            },
            
            // Code inside pre
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              color: '#e5e7eb',
              border: 'none',
              fontSize: '0.875rem',
              lineHeight: '1.5',
              boxShadow: 'none',
              display: 'block',
              wordBreak: 'normal',
              overflowWrap: 'normal',
              whiteSpace: 'pre',
              maxWidth: 'none',
              width: 'max-content',
              minWidth: '100%',
            },
            
            // Lists
            'ul, ol': {
              margin: '1.5rem 0',
              paddingLeft: '1.5rem',
              lineHeight: '1.6',
            },
            
            li: {
              margin: '0.5rem 0',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
            },
            
            // Blockquotes
            blockquote: {
              borderLeft: '3px solid #50afef',
              margin: '1.5rem 0',
              padding: '1rem 1rem 1rem 1.5rem',
              fontStyle: 'italic',
              color: '#d1d5db',
              background: 'linear-gradient(135deg, rgba(80, 175, 239, 0.08), rgba(80, 175, 239, 0.03))',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              lineHeight: '1.6',
            },
            
            // Tables
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              margin: '1.5rem 0',
              background: 'linear-gradient(135deg, #21252b, #1a1e24)',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              border: '1px solid #4d515a',
              fontSize: '0.875rem',
              maxWidth: '100%',
              tableLayout: 'auto',
            },
            
            'th, td': {
              padding: '0.75rem 0.875rem',
              textAlign: 'left',
              borderBottom: '1px solid #4d515a',
              verticalAlign: 'top',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
            },
            
            th: {
              backgroundColor: '#1a1e24',
              fontWeight: '600',
              color: '#f9fafb',
            },
            
            // Images
            img: {
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '0.5rem',
              margin: '1.5rem 0',
            },
          },
        },
        
        // Responsive variants
        sm: {
          css: {
            fontSize: '1.0625rem',
            lineHeight: '1.65',
            
            h1: { fontSize: '2.25rem', marginBottom: '1.75rem' },
            h2: { fontSize: '1.875rem', marginTop: '2.5rem', marginBottom: '1.25rem', paddingBottom: '0.625rem' },
            h3: { fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', paddingBottom: '0.5rem' },
            h4: { fontSize: '1.25rem', marginTop: '1.75rem', marginBottom: '0.75rem', paddingBottom: '0.375rem' },
            
            p: { marginBottom: '1.375rem', lineHeight: '1.65' },
            
            pre: {
              borderRadius: '0.625rem',
              padding: '1.375rem',
              margin: '2rem 0',
            },
            
            'pre code': {
              fontSize: '0.9375rem',
              lineHeight: '1.55',
            },
            
            code: {
              padding: '0.1875rem 0.4375rem',
              fontSize: '0.9em',
              borderRadius: '0.3125rem',
            },
            
            'ul, ol': { margin: '2rem 0', paddingLeft: '2rem', lineHeight: '1.7' },
            li: { margin: '0.75rem 0' },
            
            blockquote: {
              borderLeft: '4px solid #50afef',
              margin: '2rem 0',
              padding: '1.5rem 1.5rem 1.5rem 2rem',
              borderRadius: '0.625rem',
              fontSize: '1.0625rem',
              lineHeight: '1.7',
            },
            
            table: {
              margin: '2rem 0',
              borderRadius: '0.625rem',
              fontSize: '0.9375rem',
            },
            
            'th, td': { padding: '0.875rem 1.0625rem' },
            
            img: { borderRadius: '0.625rem', margin: '2rem 0' },
          },
        },
        
        lg: {
          css: {
            fontSize: '1.125rem',
            lineHeight: '1.75',
            
            h1: { fontSize: '3rem', marginBottom: '2rem' },
            h2: { fontSize: '2.25rem', marginTop: '3rem', marginBottom: '1.5rem', paddingBottom: '0.75rem' },
            h3: { fontSize: '1.875rem', marginTop: '2.5rem', marginBottom: '1rem', paddingBottom: '0.5rem' },
            h4: { fontSize: '1.5rem', marginTop: '2rem', marginBottom: '0.75rem', paddingBottom: '0.375rem' },
            
            p: { marginBottom: '1.5rem', lineHeight: '1.75' },
            
            pre: {
              borderRadius: '0.75rem',
              padding: '1.75rem',
              margin: '2.5rem 0',
            },
            
            'pre code': {
              fontSize: '0.95rem',
              lineHeight: '1.6',
            },
            
            code: {
              padding: '0.25rem 0.5rem',
              fontSize: '0.9em',
              borderRadius: '0.375rem',
            },
            
            'ul, ol': { margin: '2rem 0', paddingLeft: '2.5rem', lineHeight: '1.8' },
            li: { margin: '1rem 0' },
            
            blockquote: {
              margin: '2.5rem 0',
              padding: '2rem',
              borderRadius: '0.75rem',
              fontSize: '1.125rem',
              lineHeight: '1.8',
            },
            
            table: {
              margin: '2.5rem 0',
              borderRadius: '0.75rem',
              fontSize: '0.95rem',
            },
            
            'th, td': { padding: '1rem 1.25rem' },
            
            img: { borderRadius: '0.75rem', margin: '2.5rem 0' },
          },
        },
        
        invert: {
          css: {
            '--tw-prose-body': '#e5e7eb',
            '--tw-prose-headings': '#f9fafb',
            '--tw-prose-lead': '#d1d5db',
            '--tw-prose-links': '#50afef',
            '--tw-prose-bold': '#f9fafb',
            '--tw-prose-counters': '#9ca3af',
            '--tw-prose-bullets': '#6b7280',
            '--tw-prose-hr': '#374151',
            '--tw-prose-quotes': '#d1d5db',
            '--tw-prose-quote-borders': '#50afef',
            '--tw-prose-captions': '#9ca3af',
            '--tw-prose-code': '#d3c07b',
            '--tw-prose-pre-code': '#e5e7eb',
            '--tw-prose-pre-bg': '#21252b',
            '--tw-prose-th-borders': '#4d515a',
            '--tw-prose-td-borders': '#4d515a',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

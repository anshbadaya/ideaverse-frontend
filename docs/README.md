# IdeaVerse Documentation

## Overview

Welcome to the comprehensive documentation for the IdeaVerse project - a boutique development studio website built with Next.js, React, TypeScript, and shadcn/ui components. This documentation covers all public APIs, components, hooks, theming, and practical usage examples.

## 🚀 Quick Start

The IdeaVerse project is a modern, responsive website featuring:

- **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Component Library**: shadcn/ui with 40+ customizable components
- **Theming**: Complete dark/light mode support with CSS variables
- **Responsive Design**: Mobile-first approach with custom hooks
- **Type Safety**: Full TypeScript coverage with strict type checking
- **Performance**: Optimized build with code splitting and caching

## 📚 Documentation Structure

### [🔧 API Documentation](./API.md)
Comprehensive documentation for all public APIs, utility functions, and core functionality:
- **Utility Functions**: `cn()` class merging utility and helper functions
- **Theme System**: `ThemeProvider` setup and configuration
- **Layout System**: Root layout and metadata configuration
- **Configuration**: Tailwind, Next.js, and TypeScript setup
- **Error Handling**: Best practices and patterns
- **Performance**: Optimization strategies and browser support

### [🎨 Components Documentation](./COMPONENTS.md)
Complete guide to all UI components with props, variants, and usage examples:

#### Base Components
- **Button**: Versatile button with 6 variants and 4 sizes
- **Card**: Flexible container with header, content, and footer
- **Input**: Styled form input with validation support
- **Label**: Accessible form labels

#### Form Components
- **Checkbox**: Radix UI-based checkbox with custom styling
- **Switch**: Toggle switch for boolean values
- **Select**: Dropdown with grouping and search support
- **Textarea**: Multi-line text input with resize options

#### Layout Components
- **Separator**: Visual dividers (horizontal/vertical)
- **Skeleton**: Loading placeholders with animations
- **Tabs**: Tabbed interface with keyboard navigation
- **Breadcrumb**: Navigation breadcrumbs with home icon

#### Feedback Components
- **Alert**: Status messages with variants
- **Badge**: Status indicators and tags
- **Progress**: Progress bars with value tracking
- **Toast**: Notification system (see Hooks documentation)

#### Overlay Components
- **Dialog**: Modal dialogs with form support
- **Popover**: Floating content containers
- **Tooltip**: Contextual information on hover
- **Alert Dialog**: Confirmation dialogs

#### Data Display
- **Table**: Data tables with sorting and actions
- **Avatar**: User profile images with fallbacks

### [⚡ Hooks Documentation](./HOOKS.md)
Custom React hooks for enhanced functionality:

#### Device Detection
- **`useMobile()`**: Responsive breakpoint detection hook
  - Detects screen width < 768px (Tailwind's `md` breakpoint)
  - Real-time updates on window resize
  - SSR-safe implementation

#### Toast Management
- **`useToast()`**: Comprehensive toast notification system
  - Multiple toast variants (default, destructive)
  - Toast actions and custom content
  - Automatic lifecycle management
  - Progress tracking and updates
  - Memory-efficient cleanup

### [🎭 Theming Documentation](./THEMING.md)
Complete theming system with CSS variables and dark mode:

#### Design System
- **CSS Variables**: HSL-based color system for easy customization
- **Semantic Tokens**: Background, interactive, state, and form colors
- **Dark Mode**: Automatic system preference detection
- **Theme Provider**: next-themes integration

#### Customization
- **Color Palette**: Adding custom color tokens
- **Border Radius**: Configurable radius system
- **Animations**: Custom keyframes and transitions
- **Responsive Design**: Mobile-first utilities

#### Best Practices
- **Accessibility**: WCAG AA compliant color contrast
- **Performance**: Optimized CSS variable usage
- **Browser Support**: Modern browser compatibility

### [💡 Examples and Patterns](./EXAMPLES.md)
Real-world usage examples and common patterns:

#### Form Patterns
- **Contact Forms**: Basic forms with validation and submission
- **Registration Forms**: Complex forms with react-hook-form
- **Form Validation**: Error handling and user feedback

#### Data Display
- **Data Tables**: Interactive tables with actions and sorting
- **Card Grids**: Responsive card layouts for content
- **Loading States**: Skeleton loading and error boundaries

#### Navigation
- **Responsive Sidebar**: Mobile-first navigation patterns
- **Breadcrumbs**: Hierarchical navigation with home links
- **Search and Filters**: Advanced search with filter management

#### Modal Patterns
- **Confirmation Dialogs**: Destructive action confirmations
- **Form Modals**: In-modal form submission
- **Loading States**: Progress indicators and error handling

## 🛠️ Development Guide

### Getting Started

1. **Installation**:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Development**:
   ```bash
   npm run dev
   ```

3. **Build**:
   ```bash
   npm run build
   ```

### Project Structure

```
├── app/                 # Next.js app router
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles and CSS variables
├── components/
│   ├── ui/             # shadcn/ui components (40+ components)
│   └── theme-provider.tsx
├── hooks/
│   ├── use-mobile.ts   # Responsive hook
│   └── use-toast.ts    # Toast management
├── lib/
│   └── utils.ts        # Utility functions
└── docs/               # This documentation
```

### Key Dependencies

- **Framework**: Next.js 15 with App Router
- **UI Components**: Radix UI primitives with shadcn/ui
- **Styling**: Tailwind CSS with CSS variables
- **Icons**: Lucide React icons
- **Theming**: next-themes for dark/light mode
- **Animations**: Framer Motion for micro-interactions
- **Forms**: React Hook Form for validation
- **TypeScript**: Strict type checking enabled

## 🎯 Use Cases

### Perfect For
- **Company Websites**: Professional business presence
- **Portfolio Sites**: Showcasing work and expertise
- **Landing Pages**: Product and service promotion
- **Documentation Sites**: Technical documentation
- **Dashboard Applications**: Admin and analytics interfaces

### Component Library Benefits
- **40+ Production-Ready Components**: Buttons, forms, modals, tables, and more
- **Accessibility First**: WCAG compliant with keyboard navigation
- **Type Safe**: Full TypeScript support with IntelliSense
- **Customizable**: Easy theming with CSS variables
- **Responsive**: Mobile-first design patterns
- **Performance Optimized**: Tree-shaking and code splitting

## 🔍 Advanced Features

### Theming System
- **CSS Variables**: Dynamic theme switching without JavaScript
- **Semantic Colors**: Consistent color usage across components
- **Dark Mode**: Automatic system preference detection
- **Custom Themes**: Easy to add brand-specific themes

### Performance
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js image optimization
- **CSS Optimization**: Purged and minified styles
- **Bundle Analysis**: Built-in bundle analyzer

### Accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus handling in modals
- **Color Contrast**: WCAG AA compliant colors

## 🤝 Contributing

### Documentation Updates
When adding new components, hooks, or features:

1. **Update Component Docs**: Add to `COMPONENTS.md` with props and examples
2. **Update API Docs**: Document new utilities in `API.md`
3. **Add Examples**: Include usage patterns in `EXAMPLES.md`
4. **Update Theming**: Document new CSS variables in `THEMING.md`

### Code Style
- **TypeScript**: Use strict typing for all props and functions
- **Components**: Follow the established shadcn/ui patterns
- **Hooks**: Include JSDoc comments for parameters and return values
- **Styling**: Use semantic color tokens from the theme system

## 📧 Support

For questions, issues, or contributions:
- **Documentation Issues**: Check existing docs or create detailed issue
- **Component Bugs**: Provide minimal reproduction example
- **Feature Requests**: Describe use case and expected behavior
- **Theming Help**: Reference THEMING.md for customization guide

## 📄 License

This project and its documentation are part of the IdeaVerse boutique development studio website. Please refer to the project license for usage terms.

---

*This documentation is comprehensive and maintained alongside the codebase. All examples are tested and follow current best practices for React, TypeScript, and accessibility.*
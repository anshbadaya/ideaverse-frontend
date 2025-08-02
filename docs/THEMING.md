# Theming and Styling Documentation

## Overview

This document provides comprehensive documentation for the theming and styling system in the IdeaVerse project. The system is built on top of Tailwind CSS with a custom design token system that supports both light and dark modes.

## Design System Architecture

### CSS Variables-Based Theming

The project uses CSS custom properties (variables) for a flexible theming system that supports dynamic theme switching.

**Location:** `app/globals.css`

#### Light Theme Variables (Default)
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}
```

#### Dark Theme Variables
```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  --popover: 222.2 84% 4.9%;
  --popover-foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 212.7 26.8% 83.9%;
}
```

## Color Palette

### Semantic Color Tokens

#### Background Colors
- `background` - Main application background
- `foreground` - Primary text color
- `card` - Card/container background
- `card-foreground` - Text on card backgrounds
- `popover` - Popover/dropdown background
- `popover-foreground` - Text on popover backgrounds

#### Interactive Colors
- `primary` - Primary brand color for main actions
- `primary-foreground` - Text on primary backgrounds
- `secondary` - Secondary actions and elements
- `secondary-foreground` - Text on secondary backgrounds
- `accent` - Accent color for highlights
- `accent-foreground` - Text on accent backgrounds

#### State Colors
- `destructive` - Error/danger states
- `destructive-foreground` - Text on destructive backgrounds
- `muted` - Muted/disabled elements
- `muted-foreground` - Muted text color

#### Form Colors
- `border` - Default border color
- `input` - Input field borders
- `ring` - Focus ring color

### Color Usage Examples

```tsx
// Using semantic colors in components
<div className="bg-background text-foreground">
  <div className="bg-card text-card-foreground border border-border rounded-lg p-4">
    <h2 className="text-foreground">Card Title</h2>
    <p className="text-muted-foreground">Muted description</p>
    <button className="bg-primary text-primary-foreground">
      Primary Button
    </button>
    <button className="bg-secondary text-secondary-foreground">
      Secondary Button
    </button>
  </div>
</div>
```

## Tailwind Configuration

### Extended Theme

**Location:** `tailwind.config.ts`

#### Custom Color Mappings
```typescript
colors: {
  border: "hsl(var(--border))",
  input: "hsl(var(--input))",
  ring: "hsl(var(--ring))",
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  secondary: {
    DEFAULT: "hsl(var(--secondary))",
    foreground: "hsl(var(--secondary-foreground))",
  },
  destructive: {
    DEFAULT: "hsl(var(--destructive))",
    foreground: "hsl(var(--destructive-foreground))",
  },
  muted: {
    DEFAULT: "hsl(var(--muted))",
    foreground: "hsl(var(--muted-foreground))",
  },
  accent: {
    DEFAULT: "hsl(var(--accent))",
    foreground: "hsl(var(--accent-foreground))",
  },
  popover: {
    DEFAULT: "hsl(var(--popover))",
    foreground: "hsl(var(--popover-foreground))",
  },
  card: {
    DEFAULT: "hsl(var(--card))",
    foreground: "hsl(var(--card-foreground))",
  },
}
```

#### Border Radius System
```typescript
borderRadius: {
  lg: "var(--radius)",           // 0.5rem
  md: "calc(var(--radius) - 2px)", // 0.375rem
  sm: "calc(var(--radius) - 4px)", // 0.25rem
}
```

#### Custom Animations
```typescript
keyframes: {
  "accordion-down": {
    from: { height: "0" },
    to: { height: "var(--radix-accordion-content-height)" },
  },
  "accordion-up": {
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: "0" },
  },
},
animation: {
  "accordion-down": "accordion-down 0.2s ease-out",
  "accordion-up": "accordion-up 0.2s ease-out",
}
```

## Dark Mode Implementation

### Theme Provider Setup

The project uses `next-themes` for theme management:

```tsx
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem
      disableTransitionOnChange
    >
      <YourApp />
    </ThemeProvider>
  )
}
```

### Theme Configuration
- **attribute**: `"class"` - Uses CSS classes for theme switching
- **defaultTheme**: `"system"` - Follows system preference by default
- **enableSystem**: `true` - Detects system theme preference
- **disableTransitionOnChange**: `true` - Prevents flash during theme changes

### Manual Theme Control

```tsx
import { useTheme } from "next-themes"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  )
}
```

## Component Theming

### Theme-Aware Components

All UI components automatically adapt to the current theme:

```tsx
// Button component with theme-aware styling
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
  }
)
```

### Custom Component Theming

Create theme-aware custom components:

```tsx
import { cn } from "@/lib/utils"

interface CustomCardProps {
  children: React.ReactNode
  variant?: "default" | "elevated" | "outlined"
  className?: string
}

export function CustomCard({ 
  children, 
  variant = "default", 
  className 
}: CustomCardProps) {
  return (
    <div className={cn(
      // Base styles
      "rounded-lg p-6 transition-colors",
      // Variant styles
      {
        "bg-card text-card-foreground shadow-sm": variant === "default",
        "bg-card text-card-foreground shadow-lg border border-border": variant === "elevated",
        "bg-transparent border-2 border-border text-foreground": variant === "outlined",
      },
      className
    )}>
      {children}
    </div>
  )
}
```

## Custom Styling

### Swiper Component Customization

**Example: Testimonials Swiper Styling**

```css
/* Custom Swiper Styles */
.testimonials-swiper {
  padding-bottom: 60px !important;
}

.testimonials-swiper .swiper-pagination {
  bottom: 0 !important;
}

.testimonials-swiper .swiper-pagination-bullet {
  background: rgba(255, 255, 255, 0.5) !important;
  opacity: 1 !important;
  width: 12px !important;
  height: 12px !important;
}

.testimonials-swiper .swiper-pagination-bullet-active {
  background: #ffffff !important;
  transform: scale(1.2) !important;
}

.testimonials-swiper .swiper-button-next,
.testimonials-swiper .swiper-button-prev {
  color: #ffffff !important;
  background: rgba(255, 255, 255, 0.1) !important;
  width: 50px !important;
  height: 50px !important;
  border-radius: 50% !important;
  backdrop-filter: blur(10px) !important;
  transition: all 0.3s ease !important;
}
```

### Responsive Custom Styles

```css
@media (max-width: 768px) {
  .testimonials-swiper .swiper-button-next,
  .testimonials-swiper .swiper-button-prev {
    display: none !important;
  }
}
```

## Customization Guide

### Creating Custom Themes

1. **Define CSS Variables**
```css
.custom-theme {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 346.8 77.2% 49.8%;
  --primary-foreground: 355.7 100% 97.3%;
  /* ... other variables */
}
```

2. **Update Theme Provider**
```tsx
<ThemeProvider themes={['light', 'dark', 'custom']}>
  <App />
</ThemeProvider>
```

### Color Palette Customization

1. **Update CSS Variables** in `app/globals.css`
2. **Maintain HSL Format**: Use HSL values without `hsl()` wrapper
3. **Test Both Themes**: Ensure colors work in light and dark modes
4. **Maintain Contrast**: Follow WCAG accessibility guidelines

### Adding New Color Tokens

1. **Add CSS Variable**
```css
:root {
  --success: 142.1 76.2% 36.3%;
  --success-foreground: 355.7 100% 97.3%;
}

.dark {
  --success: 142.1 70.6% 45.3%;
  --success-foreground: 144.9 80.4% 10%;
}
```

2. **Update Tailwind Config**
```typescript
colors: {
  success: {
    DEFAULT: "hsl(var(--success))",
    foreground: "hsl(var(--success-foreground))",
  },
}
```

3. **Use in Components**
```tsx
<div className="bg-success text-success-foreground">
  Success message
</div>
```

## Best Practices

### Color Usage Guidelines

1. **Use Semantic Colors**: Prefer semantic tokens over hardcoded colors
2. **Maintain Contrast**: Ensure adequate contrast ratios for accessibility
3. **Test Both Themes**: Always test in both light and dark modes
4. **Use CSS Variables**: Leverage the CSS variable system for consistency

### Component Styling

1. **Theme-Aware Defaults**: Use theme tokens as default values
2. **Override Support**: Allow className overrides for customization
3. **Consistent Patterns**: Follow established component patterns
4. **Responsive Design**: Consider all screen sizes in custom styles

### Performance Considerations

1. **CSS Variable Efficiency**: CSS variables are performant for theme switching
2. **Minimize Custom CSS**: Prefer Tailwind utilities over custom CSS
3. **Optimize Animations**: Use transform and opacity for smooth animations
4. **Bundle Size**: Consider the impact of custom styles on bundle size

## Accessibility

### Color Contrast

- All color combinations meet WCAG AA standards
- Test with color contrast analyzers
- Provide alternative indicators beyond color

### Theme Preference

- Respect user's system theme preference
- Provide manual theme controls
- Ensure smooth transitions between themes

### Focus States

```css
/* Focus ring uses theme-aware colors */
.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring
```

## Troubleshooting

### Common Issues

1. **Hydration Mismatches**: Use `suppressHydrationWarning` for theme-dependent content
2. **Flash of Incorrect Theme**: Set `disableTransitionOnChange={true}`
3. **CSS Variable Not Working**: Ensure proper HSL format without `hsl()` wrapper
4. **Component Not Themed**: Check if component uses semantic color tokens

### Debug Theme Variables

```tsx
function ThemeDebugger() {
  return (
    <div className="p-4 space-y-2 font-mono text-sm">
      <div className="bg-primary text-primary-foreground p-2">Primary</div>
      <div className="bg-secondary text-secondary-foreground p-2">Secondary</div>
      <div className="bg-accent text-accent-foreground p-2">Accent</div>
      <div className="bg-muted text-muted-foreground p-2">Muted</div>
      <div className="bg-destructive text-destructive-foreground p-2">Destructive</div>
    </div>
  )
}
```

### Testing Themes

```tsx
import { useTheme } from "next-themes"

function ThemeTester() {
  const { setTheme, theme } = useTheme()

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('system')}>System</button>
    </div>
  )
}
```
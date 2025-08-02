# Custom Hooks Documentation

## Overview

This document provides comprehensive documentation for all custom React hooks in the IdeaVerse project. These hooks provide reusable functionality and state management across the application.

## Device Detection Hooks

### `useMobile()`

**Location:** `hooks/use-mobile.ts`

A hook for detecting if the current device is mobile based on screen width.

**Parameters:**
- None

**Returns:**
- `boolean` - `true` if the screen width is less than 768px (Tailwind's `md` breakpoint), `false` otherwise

**Usage:**
```tsx
import { useMobile } from "@/hooks/use-mobile"

function ResponsiveComponent() {
  const isMobile = useMobile()

  return (
    <div>
      {isMobile ? (
        <MobileLayout />
      ) : (
        <DesktopLayout />
      )}
    </div>
  )
}

// Conditional rendering based on device type
function Navigation() {
  const isMobile = useMobile()

  return (
    <nav>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </nav>
  )
}

// Responsive styling
function Card() {
  const isMobile = useMobile()

  return (
    <div className={cn(
      "card",
      isMobile ? "w-full" : "w-1/2"
    )}>
      Content
    </div>
  )
}
```

**Implementation Details:**
- Uses `window.innerWidth < 768` as the mobile breakpoint
- Listens to `resize` events for real-time updates
- Properly cleans up event listeners on unmount
- Returns `false` during SSR to prevent hydration mismatches
- Uses Tailwind's `md` breakpoint (768px) for consistency

**Use Cases:**
- Conditional rendering of mobile vs desktop components
- Responsive layouts that can't be achieved with CSS alone
- Dynamic behavior based on screen size
- Mobile-specific functionality

## Toast Management Hooks

### `useToast()`

**Location:** `hooks/use-toast.ts`

A comprehensive hook for managing toast notifications throughout the application.

**Returns:**
```typescript
{
  toast: (props: ToastProps) => { id: string; dismiss: () => void; update: (props: ToastProps) => void }
  dismiss: (toastId?: string) => void
  toasts: ToastProps[]
}
```

**Toast Props Interface:**
```typescript
interface ToastProps {
  id?: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
  variant?: "default" | "destructive"
  open?: boolean
  onOpenChange?: (open: boolean) => void
}
```

**Usage:**

#### Basic Toast
```tsx
import { useToast } from "@/hooks/use-toast"

function MyComponent() {
  const { toast } = useToast()

  const showToast = () => {
    toast({
      title: "Success!",
      description: "Your action was completed successfully.",
    })
  }

  return <Button onClick={showToast}>Show Toast</Button>
}
```

#### Error Toast
```tsx
function ErrorExample() {
  const { toast } = useToast()

  const showError = () => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    })
  }

  return <Button onClick={showError}>Trigger Error</Button>
}
```

#### Toast with Action
```tsx
import { ToastAction } from "@/components/ui/toast"

function ToastWithAction() {
  const { toast } = useToast()

  const showActionToast = () => {
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: (
        <ToastAction altText="Goto schedule to undo">
          Undo
        </ToastAction>
      ),
    })
  }

  return <Button onClick={showActionToast}>Schedule</Button>
}
```

#### Managing Multiple Toasts
```tsx
function MultipleToasts() {
  const { toast, dismiss, toasts } = useToast()

  const showMultiple = () => {
    // Show multiple toasts
    const toast1 = toast({ title: "First toast" })
    const toast2 = toast({ title: "Second toast" })
    
    // Dismiss specific toast after 3 seconds
    setTimeout(() => {
      toast1.dismiss()
    }, 3000)
  }

  const dismissAll = () => {
    dismiss() // Dismiss all toasts
  }

  return (
    <div>
      <Button onClick={showMultiple}>Show Multiple</Button>
      <Button onClick={dismissAll}>Dismiss All</Button>
      <p>Active toasts: {toasts.length}</p>
    </div>
  )
}
```

#### Updating Toast Content
```tsx
function UpdatingToast() {
  const { toast } = useToast()

  const showProgressToast = () => {
    const progressToast = toast({
      title: "Uploading...",
      description: "0% complete",
    })

    // Simulate progress updates
    let progress = 0
    const interval = setInterval(() => {
      progress += 20
      
      if (progress <= 100) {
        progressToast.update({
          title: "Uploading...",
          description: `${progress}% complete`,
        })
      }
      
      if (progress >= 100) {
        clearInterval(interval)
        progressToast.update({
          title: "Upload complete!",
          description: "Your file has been uploaded successfully.",
        })
      }
    }, 500)
  }

  return <Button onClick={showProgressToast}>Upload File</Button>
}
```

#### Form Submission Example
```tsx
function ContactForm() {
  const { toast } = useToast()

  const handleSubmit = async (formData: FormData) => {
    const loadingToast = toast({
      title: "Sending message...",
      description: "Please wait while we process your request.",
    })

    try {
      await submitForm(formData)
      
      loadingToast.update({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      })
    } catch (error) {
      loadingToast.update({
        variant: "destructive",
        title: "Failed to send message",
        description: "Please try again later.",
        action: (
          <ToastAction altText="Try again" onClick={() => handleSubmit(formData)}>
            Retry
          </ToastAction>
        ),
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <Button type="submit">Send Message</Button>
    </form>
  )
}
```

**Configuration:**
- `TOAST_LIMIT`: Maximum number of toasts (default: 1)
- `TOAST_REMOVE_DELAY`: Time before toast is removed (default: 1000000ms)

**Features:**
- Automatic toast management with lifecycle handling
- Support for custom actions and variants
- Toast updating and dismissal
- Memory management with automatic cleanup
- Type-safe API with full TypeScript support
- Customizable appearance and behavior

**Best Practices:**
1. Use descriptive titles and descriptions
2. Provide appropriate actions for error toasts
3. Use the `destructive` variant for errors
4. Keep toast messages concise and actionable
5. Clean up long-running toasts manually when needed
6. Test toast behavior across different screen sizes

## Hook Integration Patterns

### Combining Hooks
```tsx
function ResponsiveToastExample() {
  const { toast } = useToast()
  const isMobile = useMobile()

  const showResponsiveToast = () => {
    toast({
      title: "Device Info",
      description: isMobile 
        ? "You're on a mobile device" 
        : "You're on a desktop device",
    })
  }

  return <Button onClick={showResponsiveToast}>Check Device</Button>
}
```

### Custom Hook Composition
```tsx
// Create a custom hook that combines multiple hooks
function useResponsiveToast() {
  const { toast, dismiss, toasts } = useToast()
  const isMobile = useMobile()

  const showResponsiveToast = (props: ToastProps) => {
    return toast({
      ...props,
      // Adjust toast behavior for mobile
      ...(isMobile && {
        // Mobile-specific adjustments could go here
      })
    })
  }

  return {
    toast: showResponsiveToast,
    dismiss,
    toasts,
    isMobile,
  }
}
```

## Performance Considerations

### Optimization Tips
1. **useMobile**: Debounce resize events for better performance in high-frequency resize scenarios
2. **useToast**: Limit the number of active toasts to prevent memory issues
3. **Event Cleanup**: All hooks properly clean up event listeners and timers
4. **Re-render Optimization**: Hooks are optimized to minimize unnecessary re-renders

### Memory Management
- Event listeners are properly removed on unmount
- Toast timeouts are cleared when toasts are dismissed
- State updates are batched where possible
- No memory leaks in typical usage patterns

## Testing Hooks

### useMobile Testing
```tsx
import { renderHook } from '@testing-library/react'
import { useMobile } from '@/hooks/use-mobile'

test('should return true for mobile viewport', () => {
  // Mock window.innerWidth
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 500,
  })

  const { result } = renderHook(() => useMobile())
  expect(result.current).toBe(true)
})
```

### useToast Testing
```tsx
import { renderHook, act } from '@testing-library/react'
import { useToast } from '@/hooks/use-toast'

test('should add and dismiss toasts', () => {
  const { result } = renderHook(() => useToast())

  act(() => {
    result.current.toast({ title: 'Test toast' })
  })

  expect(result.current.toasts).toHaveLength(1)

  act(() => {
    result.current.dismiss()
  })

  expect(result.current.toasts).toHaveLength(0)
})
```

## Browser Compatibility

All hooks are compatible with:
- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Server-side rendering (Next.js)
- React 18+ features including concurrent rendering
- TypeScript with strict mode enabled
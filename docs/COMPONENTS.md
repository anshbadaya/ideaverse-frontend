# UI Components Documentation

## Overview

This document provides comprehensive documentation for all UI components in the IdeaVerse project. All components are built using Radix UI primitives and styled with Tailwind CSS, following the shadcn/ui design system.

## Base Components

### Button

**Location:** `components/ui/button.tsx`

A versatile button component with multiple variants and sizes.

**Props:**
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}
```

**Variants:**
- `default` - Primary button with filled background
- `destructive` - Red button for dangerous actions
- `outline` - Button with border and transparent background
- `secondary` - Muted secondary button
- `ghost` - Minimal button with hover effects
- `link` - Text button with underline on hover

**Sizes:**
- `default` - Standard button (h-10 px-4 py-2)
- `sm` - Small button (h-9 px-3)
- `lg` - Large button (h-11 px-8)
- `icon` - Square button for icons (h-10 w-10)

**Examples:**
```tsx
import { Button } from "@/components/ui/button"

// Basic usage
<Button>Click me</Button>

// Different variants
<Button variant="destructive">Delete</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Subtle action</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>

// As child (polymorphic)
<Button asChild>
  <Link href="/about">About</Link>
</Button>

// With custom styling
<Button className="w-full">Full width</Button>
```

### Card

**Location:** `components/ui/card.tsx`

A flexible container component for grouping related content.

**Components:**
- `Card` - Main container
- `CardHeader` - Header section with padding
- `CardTitle` - Title heading (h3)
- `CardDescription` - Subtitle/description text
- `CardContent` - Main content area
- `CardFooter` - Footer with flex layout

**Props:**
All components extend their respective HTML element props (`HTMLDivElement` or `HTMLParagraphElement`).

**Examples:**
```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card"

// Basic card
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content...</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Simple card
<Card className="p-6">
  <h3>Simple Card</h3>
  <p>Content without header/footer structure</p>
</Card>
```

### Input

**Location:** `components/ui/input.tsx`

A styled input component for forms.

**Props:**
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
```

**Examples:**
```tsx
import { Input } from "@/components/ui/input"

// Basic input
<Input placeholder="Enter your name" />

// With type
<Input type="email" placeholder="Email address" />

// Disabled state
<Input disabled placeholder="Disabled input" />

// With form handling
<Input 
  value={value}
  onChange={(e) => setValue(e.target.value)}
  className="max-w-sm"
/>
```

### Label

**Location:** `components/ui/label.tsx`

A label component for form inputs with proper accessibility.

**Props:**
```typescript
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}
```

**Examples:**
```tsx
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

// Basic usage
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
</div>

// Required field
<Label htmlFor="name" className="text-sm font-medium">
  Name <span className="text-red-500">*</span>
</Label>
```

## Form Components

### Checkbox

**Location:** `components/ui/checkbox.tsx`

A checkbox component built on Radix UI.

**Props:**
```typescript
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}
```

**Examples:**
```tsx
import { Checkbox } from "@/components/ui/checkbox"

// Basic checkbox
<Checkbox id="terms" />

// With label
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>

// Controlled
<Checkbox 
  checked={isChecked}
  onCheckedChange={setIsChecked}
/>
```

### Switch

**Location:** `components/ui/switch.tsx`

A toggle switch component.

**Props:**
```typescript
interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {}
```

**Examples:**
```tsx
import { Switch } from "@/components/ui/switch"

// Basic switch
<Switch />

// With label
<div className="flex items-center space-x-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>

// Controlled
<Switch 
  checked={isEnabled}
  onCheckedChange={setIsEnabled}
/>
```

### Select

**Location:** `components/ui/select.tsx`

A select dropdown component.

**Components:**
- `Select` - Root container
- `SelectValue` - Selected value display
- `SelectTrigger` - Clickable trigger
- `SelectContent` - Dropdown content
- `SelectItem` - Individual option
- `SelectGroup` - Option grouping
- `SelectLabel` - Group label
- `SelectSeparator` - Visual separator

**Examples:**
```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Basic select
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>

// With grouping
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Citrus</SelectLabel>
      <SelectItem value="orange">Orange</SelectItem>
      <SelectItem value="lemon">Lemon</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Stone Fruits</SelectLabel>
      <SelectItem value="peach">Peach</SelectItem>
      <SelectItem value="plum">Plum</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

### Textarea

**Location:** `components/ui/textarea.tsx`

A multi-line text input component.

**Props:**
```typescript
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
```

**Examples:**
```tsx
import { Textarea } from "@/components/ui/textarea"

// Basic textarea
<Textarea placeholder="Enter your message..." />

// With rows
<Textarea 
  placeholder="Description"
  rows={4}
  className="resize-none"
/>

// Controlled
<Textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>
```

## Layout Components

### Separator

**Location:** `components/ui/separator.tsx`

A visual separator line.

**Props:**
```typescript
interface SeparatorProps extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  orientation?: "horizontal" | "vertical"
}
```

**Examples:**
```tsx
import { Separator } from "@/components/ui/separator"

// Horizontal separator
<Separator />

// Vertical separator
<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Item 1</div>
  <Separator orientation="vertical" />
  <div>Item 2</div>
</div>

// With custom styling
<Separator className="my-4" />
```

### Skeleton

**Location:** `components/ui/skeleton.tsx`

A loading skeleton component.

**Props:**
```typescript
interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}
```

**Examples:**
```tsx
import { Skeleton } from "@/components/ui/skeleton"

// Basic skeleton
<Skeleton className="h-4 w-[250px]" />

// Card skeleton
<div className="space-y-2">
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-[200px]" />
  <Skeleton className="h-4 w-[150px]" />
</div>

// Avatar skeleton
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>
```

## Navigation Components

### Tabs

**Location:** `components/ui/tabs.tsx`

A tabbed interface component.

**Components:**
- `Tabs` - Root container
- `TabsList` - Tab navigation list
- `TabsTrigger` - Individual tab button
- `TabsContent` - Tab panel content

**Examples:**
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Basic tabs
<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Account settings content...
  </TabsContent>
  <TabsContent value="password">
    Password settings content...
  </TabsContent>
</Tabs>

// Controlled tabs
<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Breadcrumb

**Location:** `components/ui/breadcrumb.tsx`

A navigation breadcrumb component.

**Components:**
- `Breadcrumb` - Root container
- `BreadcrumbList` - List wrapper
- `BreadcrumbItem` - Individual breadcrumb
- `BreadcrumbLink` - Clickable link
- `BreadcrumbPage` - Current page (non-clickable)
- `BreadcrumbSeparator` - Visual separator
- `BreadcrumbEllipsis` - Collapse indicator

**Examples:**
```tsx
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Basic breadcrumb
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Components</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Feedback Components

### Alert

**Location:** `components/ui/alert.tsx`

An alert component for displaying important messages.

**Components:**
- `Alert` - Root container
- `AlertTitle` - Alert heading
- `AlertDescription` - Alert content

**Variants:**
- `default` - Standard alert
- `destructive` - Error/warning alert

**Examples:**
```tsx
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

// Basic alert
<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>

// Destructive alert
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>
```

### Badge

**Location:** `components/ui/badge.tsx`

A small status indicator component.

**Variants:**
- `default` - Standard badge
- `secondary` - Muted badge
- `destructive` - Error badge
- `outline` - Outlined badge

**Examples:**
```tsx
import { Badge } from "@/components/ui/badge"

// Basic badges
<Badge>New</Badge>
<Badge variant="secondary">Beta</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Draft</Badge>

// With content
<div className="flex items-center gap-2">
  <span>Status:</span>
  <Badge variant="secondary">Active</Badge>
</div>
```

### Progress

**Location:** `components/ui/progress.tsx`

A progress indicator component.

**Props:**
```typescript
interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number
}
```

**Examples:**
```tsx
import { Progress } from "@/components/ui/progress"

// Basic progress
<Progress value={33} className="w-[60%]" />

// Indeterminate progress
<Progress />

// With label
<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Progress</span>
    <span>33%</span>
  </div>
  <Progress value={33} />
</div>
```

## Overlay Components

### Dialog

**Location:** `components/ui/dialog.tsx`

A modal dialog component.

**Components:**
- `Dialog` - Root provider
- `DialogTrigger` - Button to open dialog
- `DialogContent` - Modal content
- `DialogHeader` - Header section
- `DialogTitle` - Dialog title
- `DialogDescription` - Dialog description
- `DialogFooter` - Footer section
- `DialogClose` - Close button

**Examples:**
```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Basic dialog
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

// With form
<Dialog>
  <DialogTrigger asChild>
    <Button>Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
    </DialogHeader>
    <form>
      {/* Form content */}
    </form>
  </DialogContent>
</Dialog>
```

### Popover

**Location:** `components/ui/popover.tsx`

A floating content container.

**Components:**
- `Popover` - Root provider
- `PopoverTrigger` - Trigger element
- `PopoverContent` - Floating content

**Examples:**
```tsx
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// Basic popover
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <h4 className="font-medium">Popover Content</h4>
      <p className="text-sm text-muted-foreground">
        This is the popover content.
      </p>
    </div>
  </PopoverContent>
</Popover>
```

### Tooltip

**Location:** `components/ui/tooltip.tsx`

A tooltip component for additional information.

**Components:**
- `TooltipProvider` - Root provider (wrap app)
- `Tooltip` - Individual tooltip
- `TooltipTrigger` - Element that triggers tooltip
- `TooltipContent` - Tooltip content

**Examples:**
```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// App wrapper
<TooltipProvider>
  <App />
</TooltipProvider>

// Basic tooltip
<Tooltip>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent>
    <p>This is a tooltip</p>
  </TooltipContent>
</Tooltip>

// With button
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">?</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Help information</p>
  </TooltipContent>
</Tooltip>
```

## Data Display Components

### Table

**Location:** `components/ui/table.tsx`

A table component for displaying tabular data.

**Components:**
- `Table` - Main table element
- `TableHeader` - Table header
- `TableBody` - Table body
- `TableFooter` - Table footer
- `TableRow` - Table row
- `TableHead` - Header cell
- `TableCell` - Data cell
- `TableCaption` - Table caption

**Examples:**
```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Basic table
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Avatar

**Location:** `components/ui/avatar.tsx`

An avatar component for displaying user images.

**Components:**
- `Avatar` - Container
- `AvatarImage` - Image element
- `AvatarFallback` - Fallback content

**Examples:**
```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// With image
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

// Fallback only
<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

// Different sizes
<Avatar className="h-8 w-8">
  <AvatarImage src="/avatar.jpg" />
  <AvatarFallback>SM</AvatarFallback>
</Avatar>
```

## Styling Guidelines

### Customization

All components can be customized using:
- `className` prop for additional Tailwind classes
- CSS variables for theme customization
- Component variants where available

### Accessibility

All components follow accessibility best practices:
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management

### Responsive Design

Components are responsive by default:
- Mobile-first approach
- Responsive utilities available
- Flexible layouts

### Dark Mode

All components support dark mode:
- Automatic theme switching
- CSS variables for colors
- Consistent appearance across themes
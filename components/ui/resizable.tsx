"use client"

import * as React from "react"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroupComponent = React.forwardRef<
  React.ElementRef<typeof ResizablePanelGroup>,
  React.ComponentPropsWithoutRef<typeof ResizablePanelGroup>
>(({ className, ...props }, ref) => (
  <ResizablePanelGroup
    ref={ref}
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
))
ResizablePanelGroupComponent.displayName = "ResizablePanelGroup"

const ResizablePanelComponent = React.forwardRef<
  React.ElementRef<typeof ResizablePanel>,
  React.ComponentPropsWithoutRef<typeof ResizablePanel>
>(({ className, ...props }, ref) => <ResizablePanel ref={ref} className={cn(className)} {...props} />)
ResizablePanelComponent.displayName = "ResizablePanel"

const ResizableHandleComponent = React.forwardRef<
  React.ElementRef<typeof ResizableHandle>,
  React.ComponentPropsWithoutRef<typeof ResizableHandle>
>(({ className, withHandle, ...props }, ref) => (
  <ResizableHandle
    ref={ref}
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0",
      withHandle &&
        "after:bg-border after:data-[panel-group-direction=vertical]:bg-border after:data-[panel-group-direction=horizontal]:bg-border data-[panel-group-direction=vertical]:before:h-full data-[panel-group-direction=horizontal]:before:w-full before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:bg-background before:data-[panel-group-direction=vertical]:h-1 before:data-[panel-group-direction=vertical]:w-12 data-[panel-group-direction=vertical]:before:-translate-y-1/2 data-[panel-group-direction=vertical]:before:translate-x-0 before:data-[panel-group-direction=horizontal]:h-12 before:data-[panel-group-direction=horizontal]:w-1",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-4 items-center justify-center rounded-full border bg-background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-2.5 w-2.5"
        >
          <path d="M9 6v12" />
          <path d="M15 6v12" />
        </svg>
      </div>
    )}
  </ResizableHandle>
))
ResizableHandleComponent.displayName = "ResizableHandle"

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({ ...props }) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "group border-2 border-foreground last:border px-4 rounded-xl my-8",
        "transition-all duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)]",
        "data-[state=open]:bg-primary data-[state=open]:text-foreground",
        className
      )}
      style={{
        boxShadow: `0 0.5em 0 var(--foreground)`
      }}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-start justify-between gap-4 py-4 text-left text-sm font-medium",
          "transition-colors hover:cursor-pointer",
          "outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "group-data-[state=open]:text-foreground",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(
            "text-muted-foreground size-4 shrink-0 translate-y-0.5",
            "transition-transform duration-300 group-data-[state=open]:rotate-180",
            "group-data-[state=open]:text-foreground"
          )}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm",
        "data-[state=closed]:animate-accordion-up",
        "data-[state=open]:animate-accordion-down"
      )}
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
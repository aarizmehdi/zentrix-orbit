import React, { useState, useMemo } from 'react';
import {
  Button,
  Card,
  Input,
  Modal,
  Badge,
  Label,
  Switch,
  Checkbox,
  Slider,
  Avatar,
  Accordion,
  Tabs,
  Select,
  Progress,
  Skeleton,
  Alert,
  Textarea,
  DropdownMenu,
  RadioGroup,
  Popover,
  Tooltip,
  Separator,
  Table,
  Toast,
  Breadcrumb,
  Sheet,
  Command,
  Menubar,
  Toggle,
  ToggleGroup,
  HoverCard,
  ScrollArea,
  NavigationMenu,
  Collapsible,
  ContextMenu,
  AspectRatio,
  Callout,
  Rating,
  Drawer,
  Carousel,
  Calendar,
  AlertDialog,
  InputOTP
} from './components/zentrix-ui';
import {
  Terminal,
  Box,
  Code2,
  Check,
  Copy,
  ArrowRight,
  Search,
  Menu,
  Github,
  Layout,
  User,
  CreditCard,
  Settings,
  AlertCircle,
  MoreVertical,
  Circle,
  MoreHorizontal,
  Gem,
  Command as CommandIcon,
  Calendar as CalendarIcon,
  Mail,
  Info,
  ChevronsUpDown,
  Bold,
  Italic,
  Underline,
  Plus,
  Bell,
  Loader2,
  ChevronRight,
  Monitor,
  Moon,
  Sun,
  Laptop
} from 'lucide-react';

const BUTTON_CODE = `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost" | "neon" | "destructive" | "secondary" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, loading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-white text-black hover:bg-white/90": variant === "default",
            "bg-zinc-800 text-white hover:bg-zinc-800/80": variant === "secondary",
            "bg-red-900 text-white hover:bg-red-900/90": variant === "destructive",
            "border border-white/10 bg-transparent hover:bg-white/10 text-white": variant === "outline",
            "hover:bg-white/10 text-white": variant === "ghost",
            "text-primary underline-offset-4 hover:underline": variant === "link",
            "bg-[#7c3aed] text-white hover:bg-[#6d28d9] shadow-[0_0_15px_rgba(124,58,237,0.5)]": variant === "neon",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button }`;

const CODE_SNIPPETS: Record<string, string> = {
  button: BUTTON_CODE,
  "button-variants": BUTTON_CODE,
  "button-loading": BUTTON_CODE,
  "button-icon": BUTTON_CODE,
  badge: `import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "neon";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
            "border-transparent bg-white text-black hover:bg-white/80": variant === "default",
            "border-transparent bg-zinc-800 text-zinc-50 hover:bg-zinc-800/80": variant === "secondary",
            "border-transparent bg-red-900 text-zinc-50 hover:bg-red-900/80": variant === "destructive",
            "text-zinc-50 border-white/20": variant === "outline",
            "border-transparent bg-[#7c3aed]/20 text-[#7c3aed] border border-[#7c3aed]/50": variant === "neon",
        },
        className
      )}
      {...props}
    />
  );
}`,
  card: `import * as React from "react"
import { cn } from "@/lib/utils"

const CardRoot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border border-white/10 bg-zinc-950 text-white shadow-sm", className)} {...props} />
));
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
));
const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight text-white", className)} {...props} />
));
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-zinc-400", className)} {...props} />
));
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
));

export const Card = { Root: CardRoot, Header: CardHeader, Title: CardTitle, Description: CardDescription, Content: CardContent, Footer: CardFooter };`,
  input: `import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, label, error, ...props }, ref) => {
  return (
    <div className="grid gap-2">
      {label && <LabelPrimitive.Root className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white">{label}</LabelPrimitive.Root>}
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-red-500",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
})
Input.displayName = "Input"

export { Input }`,
  "input-otp": `import * as React from "react"
import { cn } from "@/lib/utils"

export const InputOTP = React.forwardRef<HTMLDivElement, { maxLength?: number, value?: string, onChange?: (value: string) => void }>(({ maxLength = 6, value = "", onChange }, ref) => {
    return (
        <div ref={ref} className="flex gap-2">
            {Array.from({ length: maxLength }).map((_, i) => (
                <div key={i} className="relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md border-white/10 bg-zinc-950 shadow-sm text-white">
                    {value[i] || ""}
                    {i === value.length && <div className="absolute inset-0 flex items-center justify-center"><div className="h-4 w-px animate-caret-blink bg-white duration-1000" /></div>}
                </div>
            ))}
        </div>
    )
})`,
  slider: `import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

export const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root ref={ref} className={cn("relative flex w-full touch-none select-none items-center", className)} {...props}>
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-zinc-800"><SliderPrimitive.Range className="absolute h-full bg-[#7c3aed]" /></SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-[#7c3aed] bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName`,
  rating: `import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export const Rating = React.forwardRef<HTMLDivElement, { max?: number, value?: number, onValueChange?: (value: number) => void, readOnly?: boolean }>(({ max = 5, value = 0, onValueChange, readOnly = false }, ref) => {
  return (
    <div ref={ref} className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Star key={i} className={cn("h-5 w-5 transition-all", i < value ? "fill-yellow-400 text-yellow-400" : "text-zinc-600", !readOnly && "cursor-pointer hover:scale-110")} onClick={() => !readOnly && onValueChange?.(i + 1)} />
      ))}
    </div>
  )
})`,
  calendar: `import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./button" 
import { cn } from "@/lib/utils"

export const Calendar = React.forwardRef<HTMLDivElement, { className?: string }>(({ className, ...props }, ref) => {
    const [date, setDate] = React.useState(new Date());
    
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const weeks = [];
    let week = Array(firstDay).fill(null);
    days.forEach(day => {
        if (week.length === 7) {
            weeks.push(week);
            week = [];
        }
        week.push(day);
    });
    if (week.length > 0) weeks.push(week);

    const prevMonth = () => setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    const nextMonth = () => setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));

    return (
        <div ref={ref} className={cn("p-3 w-fit border border-white/10 rounded-md bg-zinc-950", className)} {...props}>
            <div className="flex justify-between items-center mb-4">
                <Button onClick={prevMonth} variant="ghost" size="icon" className="h-7 w-7"><ChevronLeft className="h-4 w-4" /></Button>
                <div className="font-semibold text-sm w-32 text-center">{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
                <Button onClick={nextMonth} variant="ghost" size="icon" className="h-7 w-7"><ChevronRight className="h-4 w-4" /></Button>
            </div>
            <table className="w-full border-collapse space-y-1">
                <thead>
                    <tr className="flex">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                            <th key={day} className="w-9 h-9 text-[0.8rem] font-normal text-muted-foreground flex items-center justify-center rounded-md">{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="flex flex-col gap-1">
                    {weeks.map((week, i) => (
                        <tr key={i} className="flex">
                            {week.map((day, j) => (
                                <td key={j} className="p-0 relative">
                                    {day ? (
                                        <Button variant="ghost" className={cn("h-9 w-9 p-0 font-normal aria-selected:opacity-100", day === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear() && "bg-[#7c3aed] text-white hover:bg-[#7c3aed] hover:text-white focus:bg-[#7c3aed] focus:text-white")}>
                                            {day}
                                        </Button>
                                    ) : <div className="w-9 h-9" />}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
})`,
  command: `import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
import { Dialog, DialogContent } from "./dialog" 
import { cn } from "@/lib/utils"

const CommandRoot = React.forwardRef<React.ElementRef<typeof CommandPrimitive>, React.ComponentPropsWithoutRef<typeof CommandPrimitive>>(({ className, ...props }, ref) => (
  <CommandPrimitive ref={ref} className={cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-zinc-950 text-popover-foreground", className)} {...props} />
))
CommandRoot.displayName = CommandPrimitive.displayName

const CommandDialog = ({ children, ...props }: React.ComponentProps<typeof Dialog.Root>) => {
  return (
    <Dialog.Root {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg"><CommandRoot className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">{children}</CommandRoot></DialogContent>
    </Dialog.Root>
  )
}

const CommandInput = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Input>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b border-white/10 px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input ref={ref} className={cn("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className)} {...props} />
  </div>
))
CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<React.ElementRef<typeof CommandPrimitive.List>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>>(({ className, ...props }, ref) => (
  <CommandPrimitive.List ref={ref} className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)} {...props} />
))
CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Empty>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>>((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />
))
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Group>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group ref={ref} className={cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className)} {...props} />
))
CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-border", className)} {...props} />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Item>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item ref={ref} className={cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)} {...props} />
))
CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />
)
CommandShortcut.displayName = "CommandShortcut"

export const Command = { Root: CommandRoot, Dialog: CommandDialog, Input: CommandInput, List: CommandList, Empty: CommandEmpty, Group: CommandGroup, Item: CommandItem, Shortcut: CommandShortcut, Separator: CommandSeparator }`,
  toggle: `import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cn } from "@/lib/utils"

const ToggleRoot = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & { variant?: "default" | "outline", size?: "default" | "sm" | "lg" }>(({ className, variant = "default", size = "default", ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground", { "bg-transparent": variant === "default", "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground": variant === "outline", "h-10 px-3": size === "default", "h-9 px-2.5": size === "sm", "h-11 px-5": size === "lg" }, className)} {...props} />
))
ToggleRoot.displayName = TogglePrimitive.Root.displayName
export const Toggle = ToggleRoot`,
  "toggle-group": `import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { cn } from "@/lib/utils"

const ToggleGroupRoot = React.forwardRef<React.ElementRef<typeof ToggleGroupPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & { variant?: "default" | "outline", size?: "default" | "sm" | "lg" }>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root ref={ref} className={cn("flex items-center justify-center gap-1", className)} {...props}>{children}</ToggleGroupPrimitive.Root>
))
ToggleGroupRoot.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<React.ElementRef<typeof ToggleGroupPrimitive.Item>, React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & { variant?: "default" | "outline", size?: "default" | "sm" | "lg" }>(({ className, children, variant = "default", size = "default", ...props }, ref) => {
    return (
        <ToggleGroupPrimitive.Item ref={ref} className={cn("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground", { "bg-transparent": variant === "default", "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground": variant === "outline", "h-10 px-3": size === "default", "h-9 px-2.5": size === "sm", "h-11 px-5": size === "lg" }, className)} {...props}>{children}</ToggleGroupPrimitive.Item>
    )
})
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export const ToggleGroup = { Root: ToggleGroupRoot, Item: ToggleGroupItem }`,
  "radio-group": `import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"
import { cn } from "@/lib/utils"

export const RadioGroup = {
    Root: React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>>(({ className, ...props }, ref) => (
        <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />
    )),
    Item: React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>>(({ className, ...props }, ref) => (
        <RadioGroupPrimitive.Item ref={ref} className={cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)} {...props}>
             <RadioGroupPrimitive.Indicator className="flex items-center justify-center"><Circle className="h-2.5 w-2.5 fill-current text-current" /></RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
    ))
}`,
  select: `import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const SelectRoot = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value
const SelectTrigger = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger ref={ref} className={cn("flex h-10 w-full items-center justify-between rounded-md border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)} {...props}>
    {children}<SelectPrimitive.Icon asChild><ChevronDown className="h-4 w-4 opacity-50" /></SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName
const SelectContent = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Content>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content ref={ref} className={cn("relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-white/10 bg-zinc-950 text-white shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className)} position={position} {...props}>
      <SelectPrimitive.Viewport className={cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")}>{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName
const SelectLabel = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Label>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName
const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item ref={ref} className={cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-zinc-800 focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)} {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"><SelectPrimitive.ItemIndicator><Check className="h-4 w-4" /></SelectPrimitive.ItemIndicator></span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName
export const Select = { Root: SelectRoot, Group: SelectGroup, Value: SelectValue, Trigger: SelectTrigger, Content: SelectContent, Label: SelectLabel, Item: SelectItem }`,
  textarea: `import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "@/lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { label?: string; }
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, label, ...props }, ref) => {
  return (
      <div className="grid gap-2">
         {label && <LabelPrimitive.Root className="text-sm font-medium leading-none text-white">{label}</LabelPrimitive.Root>}
         <textarea className={cn("flex min-h-[80px] w-full rounded-md border border-white/10 bg-zinc-950 px-3 py-2 text-sm ring-offset-background placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white", className)} ref={ref} {...props} />
      </div>
  )
})
Textarea.displayName = "Textarea"`,
  switch: `import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root className={cn("peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#7c3aed] data-[state=unchecked]:bg-zinc-700", className)} {...props} ref={ref}>
    <SwitchPrimitive.Thumb className={cn("pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")} />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName`,
  checkbox: `import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={cn("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className)} {...props}>
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}><Check className="h-4 w-4" /></CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName`,
  table: `import * as React from "react"
import { cn } from "@/lib/utils"

const TableRoot = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto"><table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} /></div>
))
TableRoot.displayName = "Table"
const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"
const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
))
TableBody.displayName = "TableBody"
const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
  <tfoot ref={ref} className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)} {...props} />
))
TableFooter.displayName = "TableFooter"
const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(({ className, ...props }, ref) => (
  <tr ref={ref} className={cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)} {...props} />
))
TableRow.displayName = "TableRow"
const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => (
  <th ref={ref} className={cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className)} {...props} />
))
TableHead.displayName = "TableHead"
const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => (
  <td ref={ref} className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
))
TableCell.displayName = "TableCell"

export const Table = { Root: TableRoot, Header: TableHeader, Body: TableBody, Footer: TableFooter, Head: TableHead, Row: TableRow, Cell: TableCell }`,
  carousel: `import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "./button" 
import { cn } from "@/lib/utils"

export const Carousel = {
    Root: React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
        <div ref={ref} className={cn("relative", className)} {...props} />
    )),
    Content: React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
        <div ref={ref} className={cn("flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar", className)} {...props} />
    )),
    Item: React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
        <div ref={ref} className={cn("min-w-0 flex-[0_0_100%] snap-center", className)} {...props} />
    )),
    Previous: React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "outline", size = "icon", ...props }, ref) => (
        <Button ref={ref} variant={variant} size={size} className={cn("absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full", className)} {...props}><ArrowLeft className="h-4 w-4" /><span className="sr-only">Previous slide</span></Button>
    )),
    Next: React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "outline", size = "icon", ...props }, ref) => (
        <Button ref={ref} variant={variant} size={size} className={cn("absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full", className)} {...props}><ArrowRight className="h-4 w-4" /><span className="sr-only">Next slide</span></Button>
    ))
}`,
  "scroll-area": `import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { cn } from "@/lib/utils"

const ScrollAreaRoot = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}><ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport><ScrollBar /></ScrollAreaPrimitive.Root>
))
ScrollAreaRoot.displayName = ScrollAreaPrimitive.Root.displayName
const ScrollBar = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>, React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar ref={ref} orientation={orientation} className={cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className)} {...props}><ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" /></ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName
export const ScrollArea = ScrollAreaRoot`,
  accordion: `import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionRoot = AccordionPrimitive.Root
const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b border-white/10", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"
const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex"><AccordionPrimitive.Trigger ref={ref} className={cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className)} {...props}>{children}<ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" /></AccordionPrimitive.Trigger></AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...props}><div className={cn("pb-4 pt-0 text-zinc-400", className)}>{children}</div></AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName
export const Accordion = { Root: AccordionRoot, Item: AccordionItem, Trigger: AccordionTrigger, Content: AccordionContent }`,
  collapsible: `import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const CollapsibleRoot = CollapsiblePrimitive.Root
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent
export const Collapsible = { Root: CollapsibleRoot, Trigger: CollapsibleTrigger, Content: CollapsibleContent }`,
  "aspect-ratio": `import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
export const AspectRatio = AspectRatioPrimitive.Root`,
  avatar: `import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"

const AvatarRoot = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root ref={ref} className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)} {...props} />
))
AvatarRoot.displayName = AvatarPrimitive.Root.displayName
const AvatarImage = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName
const AvatarFallback = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback ref={ref} className={cn("flex h-full w-full items-center justify-center rounded-full bg-zinc-800 text-zinc-400", className)} {...props} />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName
export const Avatar = { Root: AvatarRoot, Image: AvatarImage, Fallback: AvatarFallback }`,
  toast: `import * as React from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitive.Provider
const ToastViewport = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Viewport>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport ref={ref} className={cn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className)} {...props} />
))
ToastViewport.displayName = ToastPrimitive.Viewport.displayName
const ToastRoot = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>>(({ className, ...props }, ref) => (
  <ToastPrimitive.Root ref={ref} className={cn("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-white/10 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full bg-zinc-950 text-white", className)} {...props} />
))
ToastRoot.displayName = ToastPrimitive.Root.displayName
const ToastAction = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Action>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action ref={ref} className={cn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className)} {...props} />
))
ToastAction.displayName = ToastPrimitive.Action.displayName
const ToastClose = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Close>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close ref={ref} className={cn("absolute right-2 top-2 rounded-md p-1 text-white/50 opacity-0 transition-opacity hover:text-white focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100", className)} toast-close="" {...props}><X className="h-4 w-4" /></ToastPrimitive.Close>
))
ToastClose.displayName = ToastPrimitive.Close.displayName
const ToastTitle = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Title>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
))
ToastTitle.displayName = ToastPrimitive.Title.displayName
const ToastDescription = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Description>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
))
ToastDescription.displayName = ToastPrimitive.Description.displayName
export const Toast = { Provider: ToastProvider, Viewport: ToastViewport, Root: ToastRoot, Action: ToastAction, Close: ToastClose, Title: ToastTitle, Description: ToastDescription }`,
  alert: `import * as React from "react"
import { cn } from "@/lib/utils"

export const Alert = {
    Root: React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "destructive" }>(({ className, variant, ...props }, ref) => (
        <div ref={ref} role="alert" className={cn("relative w-full rounded-lg border border-white/10 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-white", variant === "destructive" && "border-red-500/50 text-red-500 [&>svg]:text-red-500", className)} {...props} />
    )),
    Title: React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
        <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight text-white", className)} {...props} />
    )),
    Description: React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
        <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed text-zinc-400", className)} {...props} />
    ))
}`,
  callout: `import * as React from "react"
import { cn } from "@/lib/utils"

export const Callout = {
  Root: React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "warning" | "error" | "info" }>(({ className, variant = "default", ...props }, ref) => (
      <div ref={ref} className={cn("rounded-md border p-4", { "border-white/10 bg-zinc-900/50": variant === "default", "border-yellow-900/50 bg-yellow-900/20 text-yellow-200": variant === "warning", "border-red-900/50 bg-red-900/20 text-red-200": variant === "error", "border-blue-900/50 bg-blue-900/20 text-blue-200": variant === "info" }, className)} {...props} />
  )),
  Icon: React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
      <div ref={ref} className={cn("mb-2 mr-3 inline-block h-5 w-5 align-top", className)} {...props} />
  )),
  Text: React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
      <div ref={ref} className={cn("inline-block text-sm", className)} {...props} />
  ))
}`,
  progress: `import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

export const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root ref={ref} className={cn("relative h-4 w-full overflow-hidden rounded-full bg-zinc-800", className)} {...props}><ProgressPrimitive.Indicator className="h-full w-full flex-1 bg-[#7c3aed] transition-all" style={{ transform: \`translateX(-\${100 - (value || 0)}%)\` }} /></ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName`,
  skeleton: `import * as React from "react"
import { cn } from "@/lib/utils"

export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("animate-pulse rounded-md bg-zinc-800", className)} {...props} />
)`,
  modal: `import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const DialogRoot = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)} {...props} />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content ref={ref} className={cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-zinc-950 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg text-white", className)} {...props}>
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"><X className="h-4 w-4" /><span className="sr-only">Close</span></DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName
const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
const DialogTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName
const DialogDescription = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-zinc-400", className)} {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export const Modal = { Root: DialogRoot, Trigger: DialogTrigger, Content: DialogContent, Header: DialogHeader, Footer: DialogFooter, Title: DialogTitle, Description: DialogDescription };
export const Dialog = Modal;`,
  "alert-dialog": `import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"

const AlertDialog = {
  Root: DialogPrimitive.Root,
  Trigger: DialogPrimitive.Trigger,
  Content: React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ className, children, ...props }, ref) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80" />
      <DialogPrimitive.Content ref={ref} className={cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-zinc-950 p-6 shadow-lg duration-200 sm:rounded-lg text-white", className)} {...props}>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )),
  Header: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />,
  Footer: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />,
  Title: React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
  )),
  Description: React.forwardRef<React.ElementRef<typeof DialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description ref={ref} className={cn("text-sm text-zinc-400", className)} {...props} />
  )),
  Action: React.forwardRef<React.ElementRef<typeof DialogPrimitive.Close>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>>(({ className, ...props }, ref) => (
    <DialogPrimitive.Close ref={ref} className={cn(className)} {...props} />
  )),
  Cancel: React.forwardRef<React.ElementRef<typeof DialogPrimitive.Close>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>>(({ className, ...props }, ref) => (
    <DialogPrimitive.Close ref={ref} className={cn("mt-2 sm:mt-0", className)} {...props} />
  ))
}
export { AlertDialog }`,
  sheet: `import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const SheetRoot = DialogPrimitive.Root
const SheetTrigger = DialogPrimitive.Trigger
const SheetClose = DialogPrimitive.Close
const SheetPortal = DialogPrimitive.Portal
const SheetOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay className={cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)} {...props} ref={ref} />
))
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName
const sheetVariants = {
  top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
  bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
  left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
  right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
}
interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> { side?: keyof typeof sheetVariants }
const SheetContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, SheetContentProps>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <DialogPrimitive.Content ref={ref} className={cn("fixed z-50 gap-4 bg-zinc-950 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out duration-300", sheetVariants[side], className)} {...props}>
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"><X className="h-4 w-4" /><span className="sr-only">Close</span></DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = DialogPrimitive.Content.displayName
const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
const SheetTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold text-foreground", className)} {...props} />
))
SheetTitle.displayName = DialogPrimitive.Title.displayName
const SheetDescription = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))
SheetDescription.displayName = DialogPrimitive.Description.displayName

export const Sheet = { Root: SheetRoot, Trigger: SheetTrigger, Close: SheetClose, Content: SheetContent, Header: SheetHeader, Footer: SheetFooter, Title: SheetTitle, Description: SheetDescription }`,
  drawer: `import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"

const Drawer = {
  Root: DialogPrimitive.Root,
  Trigger: DialogPrimitive.Trigger,
  Content: React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ className, children, ...props }, ref) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogPrimitive.Content ref={ref} className={cn("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-white/10 bg-zinc-950 p-6 text-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", className)} {...props}>
         <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
         {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )),
  Header: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />,
  Footer: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />,
  Title: React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
  )),
  Description: React.forwardRef<React.ElementRef<typeof DialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ))
}
export { Drawer }`,
  "hover-card": `import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { cn } from "@/lib/utils"

const HoverCardRoot = HoverCardPrimitive.Root
const HoverCardTrigger = HoverCardPrimitive.Trigger
const HoverCardContent = React.forwardRef<React.ElementRef<typeof HoverCardPrimitive.Content>, React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content ref={ref} align={align} sideOffset={sideOffset} className={cn("z-50 w-64 rounded-md border border-white/10 bg-zinc-950 p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className)} {...props} />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName
export const HoverCard = { Root: HoverCardRoot, Trigger: HoverCardTrigger, Content: HoverCardContent }`,
  popover: `import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cn } from "@/lib/utils"

const PopoverRoot = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverContent = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>, React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content ref={ref} align={align} sideOffset={sideOffset} className={cn("z-50 w-72 rounded-md border border-white/10 bg-zinc-950 p-4 text-white shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className)} {...props} />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName
export const Popover = { Root: PopoverRoot, Trigger: PopoverTrigger, Content: PopoverContent }`,
  tooltip: `import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider
const TooltipRoot = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger
const TooltipContent = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content ref={ref} sideOffset={sideOffset} className={cn("z-50 overflow-hidden rounded-md border border-white/10 bg-zinc-950 px-3 py-1.5 text-sm text-white shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", className)} {...props} />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName
export const Tooltip = { Provider: TooltipProvider, Root: TooltipRoot, Trigger: TooltipTrigger, Content: TooltipContent }`,
  "context-menu": `import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { cn } from "@/lib/utils"

const ContextMenuRoot = ContextMenuPrimitive.Root
const ContextMenuTrigger = ContextMenuPrimitive.Trigger
const ContextMenuContent = React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.Content>, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content ref={ref} className={cn("z-50 min-w-[8rem] overflow-hidden rounded-md border border-white/10 bg-zinc-950 p-1 text-white shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)} {...props} />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName
const ContextMenuItem = React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.Item>, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & { inset?: boolean }>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item ref={ref} className={cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className)} {...props} />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName
const ContextMenuSeparator = React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName
export const ContextMenu = { Root: ContextMenuRoot, Trigger: ContextMenuTrigger, Content: ContextMenuContent, Item: ContextMenuItem, Separator: ContextMenuSeparator }`,
  menubar: `import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { cn } from "@/lib/utils"

const MenubarRoot = React.forwardRef<React.ElementRef<typeof MenubarPrimitive.Root>, React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root ref={ref} className={cn("flex h-10 items-center space-x-1 rounded-md border border-white/10 bg-zinc-950 p-1", className)} {...props} />
))
MenubarRoot.displayName = MenubarPrimitive.Root.displayName
const MenubarMenu = MenubarPrimitive.Menu
const MenubarTrigger = React.forwardRef<React.ElementRef<typeof MenubarPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger ref={ref} className={cn("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", className)} {...props} />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName
const MenubarContent = React.forwardRef<React.ElementRef<typeof MenubarPrimitive.Content>, React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content ref={ref} align={align} alignOffset={alignOffset} sideOffset={sideOffset} className={cn("z-50 min-w-[12rem] overflow-hidden rounded-md border border-white/10 bg-zinc-950 p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)} {...props} />
  </MenubarPrimitive.Portal>
))
MenubarContent.displayName = MenubarPrimitive.Content.displayName
const MenubarItem = React.forwardRef<React.ElementRef<typeof MenubarPrimitive.Item>, React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & { inset?: boolean }>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item ref={ref} className={cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className)} {...props} />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName
const MenubarSeparator = React.forwardRef<React.ElementRef<typeof MenubarPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName
export const Menubar = { Root: MenubarRoot, Menu: MenubarMenu, Trigger: MenubarTrigger, Content: MenubarContent, Item: MenubarItem, Separator: MenubarSeparator }`,
  "navigation-menu": `import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const NavigationMenuRoot = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Root>, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root ref={ref} className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)} {...props}>{children}<NavigationMenuViewport /></NavigationMenuPrimitive.Root>
))
NavigationMenuRoot.displayName = NavigationMenuPrimitive.Root.displayName
const NavigationMenuList = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.List>, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List ref={ref} className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)} {...props} />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName
const NavigationMenuItem = NavigationMenuPrimitive.Item
const NavigationMenuTrigger = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger ref={ref} className={cn("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50", className)} {...props}>{children}<ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" /></NavigationMenuTrigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName
const NavigationMenuContent = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Content>, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content ref={ref} className={cn("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto bg-zinc-950 p-4 rounded-md border border-white/10 shadow-lg", className)} {...props} />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName
const NavigationMenuLink = NavigationMenuPrimitive.Link
const NavigationMenuViewport = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Viewport>, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}><NavigationMenuPrimitive.Viewport className={cn("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className)} ref={ref} {...props} /></div>
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName
export const NavigationMenu = { Root: NavigationMenuRoot, List: NavigationMenuList, Item: NavigationMenuItem, Trigger: NavigationMenuTrigger, Content: NavigationMenuContent, Link: NavigationMenuLink, Viewport: NavigationMenuViewport }`,
  tabs: `import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const TabsRoot = TabsPrimitive.Root
const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(({ className, ...props }, ref) => (
  <TabsPrimitive.List ref={ref} className={cn("inline-flex h-10 items-center justify-center rounded-md bg-zinc-800 p-1 text-zinc-400", className)} {...props} />
))
TabsList.displayName = TabsPrimitive.List.displayName
const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger ref={ref} className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-zinc-950 data-[state=active]:text-white data-[state=active]:shadow-sm", className)} {...props} />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName
const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)} {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName
export const Tabs = { Root: TabsRoot, List: TabsList, Trigger: TabsTrigger, Content: TabsContent }`,
  breadcrumb: `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

const BreadcrumbRoot = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<"nav"> & { separator?: React.ReactNode }>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
BreadcrumbRoot.displayName = "Breadcrumb"
const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(({ className, ...props }, ref) => (
  <ol ref={ref} className={cn("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", className)} {...props} />
))
BreadcrumbList.displayName = "BreadcrumbList"
const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
))
BreadcrumbItem.displayName = "BreadcrumbItem"
const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<"a"> & { asChild?: boolean }>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"
  return <Comp ref={ref} className={cn("transition-colors hover:text-foreground", className)} {...props} />
})
BreadcrumbLink.displayName = "BreadcrumbLink"
const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(({ className, ...props }, ref) => (
  <span ref={ref} role="link" aria-disabled="true" aria-current="page" className={cn("font-normal text-foreground", className)} {...props} />
))
BreadcrumbPage.displayName = "BreadcrumbPage"
const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li role="presentation" aria-hidden="true" className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)} {...props}>
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span role="presentation" aria-hidden="true" className={cn("flex h-9 w-9 items-center justify-center", className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

export const Breadcrumb = { Root: BreadcrumbRoot, List: BreadcrumbList, Item: BreadcrumbItem, Link: BreadcrumbLink, Page: BreadcrumbPage, Separator: BreadcrumbSeparator, Ellipsis: BreadcrumbEllipsis }`,
  separator: `import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn } from "@/lib/utils"

export const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>>(({ className, orientation = "horizontal", ...props }, ref) => (
  <SeparatorPrimitive.Root ref={ref} decorative orientation={orientation} className={cn("shrink-0 bg-white/10", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)} {...props} />
))
Separator.displayName = SeparatorPrimitive.Root.displayName`,
  "dropdown-menu": `import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

const DropdownMenuRoot = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuContent = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content ref={ref} sideOffset={sideOffset} className={cn("z-50 min-w-[8rem] overflow-hidden rounded-md border border-white/10 bg-zinc-950 p-1 text-white shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out", className)} {...props} />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName
const DropdownMenuItem = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Item>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item ref={ref} className={cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-zinc-800 focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className)} {...props} />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName
const DropdownMenuLabel = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Label>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label ref={ref} className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)} {...props} />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName
const DropdownMenuSeparator = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-white/10", className)} {...props} />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName
export const DropdownMenu = { Root: DropdownMenuRoot, Trigger: DropdownMenuTrigger, Content: DropdownMenuContent, Item: DropdownMenuItem, Label: DropdownMenuLabel, Separator: DropdownMenuSeparator }`,
  "bar-chart": `export function BarChart({ data }) {
  return (
    <div className="flex items-end justify-between gap-2 h-40">
        {data.map((h, i) => (
            <div key={i} className="group relative flex flex-col items-center justify-end w-full h-full">
                <div style={{ height: \`\${h}%\` }} className="w-full bg-[#7c3aed] opacity-80 hover:opacity-100 transition-all rounded-t-sm" />
            </div>
        ))}
    </div>
  )
}`,
  "pie-chart": `export function PieChart() {
  return (
    <div className="relative h-40 w-40 rounded-full border-[30px] border-[#7c3aed] border-r-zinc-800 border-b-zinc-700 transform rotate-45 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-white transform -rotate-45">
            75%
        </div>
    </div>
  )
}`,
  "login-form": `export function LoginForm() {
  return (
    <Card.Root>
        <Card.Header>
            <Card.Title>Login</Card.Title>
            <Card.Description>Enter your email below to login to your account.</Card.Description>
        </Card.Header>
        <Card.Content className="grid gap-4">
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
            </div>
        Card.Content>
        <Card.Footer>
            <Button className="w-full">Sign in</Button>
        </Card.Footer>
    </Card.Root>
  )
}`,
  "payment-method": `export function PaymentMethod() {
  return (
    <Card.Root>
        <Card.Header>
            <Card.Title>Payment Method</Card.Title>
            <Card.Description>Add a new payment method to your account.</Card.Description>
        </Card.Header>
        <Card.Content className="grid gap-6">
            <RadioGroup.Root defaultValue="card" className="grid grid-cols-3 gap-4">
                <Label htmlFor="card" className="flex flex-col items-center justify-between rounded-md border border-white/10 bg-zinc-950 p-4 hover:bg-zinc-900 hover:text-white [&:has([data-state=checked])]:border-[#7c3aed] [&:has([data-state=checked])]:text-[#7c3aed]">
                    <RadioGroup.Item value="card" id="card" className="sr-only" />
                    <CreditCard className="mb-3 h-6 w-6" />
                    Card
                </Label>
                {/* ... other items */}
            </RadioGroup.Root>
        </Card.Content>
        <Card.Footer>
            <Button className="w-full">Continue</Button>
        </Card.Footer>
    </Card.Root>
  )
}`,
  "notifications": `export function Notifications() {
  return (
    <Card.Root>
        <Card.Header>
            <Card.Title>Notifications</Card.Title>
            <Card.Description>Choose what you want to be notified about.</Card.Description>
        </Card.Header>
        <Card.Content className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border border-white/10 p-4">
                <Bell className="h-5 w-5" />
                <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Push Notifications</p>
                    <p className="text-sm text-zinc-500">Send notifications to device.</p>
                </div>
                <Switch />
            </div>
        </Card.Content>
    </Card.Root>
  )
}`,
  "cookie-settings": `export function CookieSettings() {
  return (
    <Card.Root>
        <Card.Header>
            <Card.Title>Cookie Settings</Card.Title>
            <Card.Description>Manage your cookie settings here.</Card.Description>
        </Card.Header>
        <Card.Content className="grid gap-6">
            <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="necessary" className="flex flex-col space-y-1">
                    <span>Strictly Necessary</span>
                    <span className="font-normal text-xs text-muted-foreground">These cookies are essential.</span>
                </Label>
                <Switch id="necessary" defaultChecked disabled />
            </div>
            {/* ... other settings */}
        </Card.Content>
        <Card.Footer>
            <Button className="w-full">Save Preferences</Button>
        </Card.Footer>
    </Card.Root>
  )
}`,
  default: `// Please select a specific component to view its source code.`
};

type Category = 'Foundation' | 'Form Primitives' | 'Data Display' | 'Feedback' | 'Overlay' | 'Navigation' | 'Charts' | 'Patterns';

interface ComponentEntry {
  id: string;
  name: string;
  category: Category;
  description: string;
  installCommand: string;
  usageCode: string;
  demo: React.ReactNode;
}

const componentRegistry: ComponentEntry[] = [
  {
    id: "button",
    name: "Button",
    category: "Foundation",
    description: "Displays a button or a component that looks like a button.",
    installCommand: "npm install @radix-ui/react-slot",
    usageCode: `import { Button } from "@/components/zentrix-ui"

export function ButtonDemo() {
  return <Button>Button</Button>
}`,
    demo: (
      <div className="flex items-center justify-center w-full">
        <Button>Primary Button</Button>
      </div>
    )
  },
  {
    id: "button-variants",
    name: "Button Variants",
    category: "Foundation",
    description: "Buttons come in different variants to support various use cases.",
    installCommand: "npm install @radix-ui/react-slot",
    usageCode: `import { Button } from "@/components/zentrix-ui"

export function ButtonVariants() {
  return (
    <>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="neon">Neon</Button>
    </>
  )
}`,
    demo: (
      <div className="flex flex-wrap gap-4 items-center justify-center w-full">
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="neon">Neon</Button>
      </div>
    )
  },
  {
    id: "button-loading",
    name: "Button Loading",
    category: "Foundation",
    description: "Button with a loading state.",
    installCommand: "npm install @radix-ui/react-slot lucide-react",
    usageCode: `import { Button } from "@/components/zentrix-ui"

export function ButtonLoading() {
  return <Button loading>Please wait</Button>
}`,
    demo: (
      <div className="flex items-center justify-center w-full">
        <Button loading>Please wait</Button>
      </div>
    )
  },
  {
    id: "button-icon",
    name: "Button Icon",
    category: "Foundation",
    description: "Icon buttons for compact actions.",
    installCommand: "npm install @radix-ui/react-slot lucide-react",
    usageCode: `import { Button } from "@/components/zentrix-ui"
import { Mail, ChevronRight } from "lucide-react"

export function ButtonIcon() {
  return (
    <>
      <Button size="icon" variant="outline"><Mail className="h-4 w-4" /></Button>
      <Button><Mail className="mr-2 h-4 w-4" /> Login with Email</Button>
      <Button variant="secondary">Next Step <ChevronRight className="ml-2 h-4 w-4" /></Button>
    </>
  )
}`,
    demo: (
      <div className="flex flex-wrap gap-4 items-center justify-center w-full">
        <Button size="icon" variant="outline"><Mail className="h-4 w-4" /></Button>
        <Button><Mail className="mr-2 h-4 w-4" /> Login with Email</Button>
        <Button variant="secondary">Next Step <ChevronRight className="ml-2 h-4 w-4" /></Button>
      </div>
    )
  },
  {
    id: "badge",
    name: "Badge",
    category: "Foundation",
    description: "Displays a badge or a component that looks like a badge.",
    installCommand: "npm install",
    usageCode: `<Badge>Badge</Badge>`,
    demo: (
      <div className="flex flex-wrap gap-2 justify-center w-full">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="neon">Neon</Badge>
      </div>
    )
  },
  {
    id: "separator",
    name: "Separator",
    category: "Foundation",
    description: "Visually or semantically separates content.",
    installCommand: "npm install @radix-ui/react-separator",
    usageCode: `<Separator />`,
    demo: (
      <div className="space-y-1 w-full max-w-[300px]">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-zinc-400">An open-source UI component library.</p>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    )
  },

  {
    id: "input",
    name: "Input",
    category: "Form Primitives",
    description: "Displays a form input field or a component that looks like an input field.",
    installCommand: "npm install",
    usageCode: `<Input type="email" placeholder="Email" />`,
    demo: (
      <div className="grid w-full max-w-sm items-center gap-4">
        <Input type="email" label="Email" placeholder="Email" />
        <Input label="With Error" placeholder="Error state" error="This field is required" />
      </div>
    )
  },
  {
    id: "input-otp",
    name: "Input OTP",
    category: "Form Primitives",
    description: "Accessible one-time password component.",
    installCommand: "npm install",
    usageCode: `<InputOTP maxLength={6} />`,
    demo: (
      <div className="space-y-2 flex flex-col items-center w-full">
        <Label className="mb-2">One-Time Password</Label>
        <InputOTP maxLength={6} />
        <p className="text-xs text-muted-foreground mt-2">Enter 123456</p>
      </div>
    )
  },
  {
    id: "slider",
    name: "Slider",
    category: "Form Primitives",
    description: "An input where the user selects a value from within a given range.",
    installCommand: "npm install @radix-ui/react-slider",
    usageCode: `<Slider defaultValue={[50]} max={100} step={1} />`,
    demo: (
      <div className="w-[300px]">
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
    )
  },
  {
    id: "rating",
    name: "Rating",
    category: "Form Primitives",
    description: "A star rating component.",
    installCommand: "npm install lucide-react",
    usageCode: `<Rating value={4} />`,
    demo: (
      <div className="space-y-4 flex flex-col items-center w-full">
        <div className="flex items-center gap-2"><span className="text-sm text-zinc-400">Interactive:</span> <Rating value={4} /></div>
        <div className="flex items-center gap-2"><span className="text-sm text-zinc-400">Read Only:</span> <Rating value={3} readOnly /></div>
      </div>
    )
  },
  {
    id: "calendar",
    name: "Calendar",
    category: "Form Primitives",
    description: "A date field component that allows users to enter and edit date.",
    installCommand: "npm install lucide-react",
    usageCode: `<Calendar />`,
    demo: (
      <div className="flex justify-center w-full">
        <Calendar />
      </div>
    )
  },
  {
    id: "command",
    name: "Command",
    category: "Form Primitives",
    description: "Fast, composable, unstyled command menu for React.",
    installCommand: "npm install cmdk",
    usageCode: `<Command.Dialog open={open} onOpenChange={setOpen}>
  <Command.Input placeholder="Type a command..." />
  <Command.List>...</Command.List>
</Command.Dialog>`,
    demo: (
      <div className="border border-white/10 rounded-lg w-full max-w-[450px] overflow-hidden bg-zinc-950/80 shadow-2xl">
        <Command.Root>
          <Command.Input placeholder="Type a command or search..." />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            <Command.Group heading="Suggestions">
              <Command.Item><CalendarIcon className="mr-2 h-4 w-4" /><span>Calendar</span></Command.Item>
              <Command.Item><Search className="mr-2 h-4 w-4" /><span>Search Emoji</span></Command.Item>
              <Command.Item><CommandIcon className="mr-2 h-4 w-4" /><span>Calculator</span></Command.Item>
            </Command.Group>
            <Command.Separator />
            <Command.Group heading="Settings">
              <Command.Item><User className="mr-2 h-4 w-4" /><span>Profile</span><Command.Shortcut>⌘P</Command.Shortcut></Command.Item>
              <Command.Item><CreditCard className="mr-2 h-4 w-4" /><span>Billing</span><Command.Shortcut>⌘B</Command.Shortcut></Command.Item>
              <Command.Item><Settings className="mr-2 h-4 w-4" /><span>Settings</span><Command.Shortcut>⌘S</Command.Shortcut></Command.Item>
            </Command.Group>
          </Command.List>
        </Command.Root>
      </div>
    )
  },
  {
    id: "toggle",
    name: "Toggle",
    category: "Form Primitives",
    description: "A two-state button that can be either on or off.",
    installCommand: "npm install @radix-ui/react-toggle",
    usageCode: `<Toggle>Toggle</Toggle>`,
    demo: (
      <div className="flex items-center gap-4">
        <Toggle aria-label="Toggle italic">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      </div>
    )
  },
  {
    id: "toggle-group",
    name: "Toggle Group",
    category: "Form Primitives",
    description: "A set of two-state buttons that can be toggled on or off.",
    installCommand: "npm install @radix-ui/react-toggle-group",
    usageCode: `<ToggleGroup.Root type="single">...</ToggleGroup.Root>`,
    demo: (
      <div>
        <ToggleGroup.Root type="multiple" className="bg-zinc-900 p-1 rounded-lg border border-white/5 inline-flex">
          <ToggleGroup.Item value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
    )
  },
  {
    id: "radio-group",
    name: "Radio Group",
    category: "Form Primitives",
    description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
    installCommand: "npm install @radix-ui/react-radio-group",
    usageCode: `<RadioGroup.Root defaultValue="default">...</RadioGroup.Root>`,
    demo: (
      <RadioGroup.Root defaultValue="default" className="grid gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroup.Item value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroup.Item value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroup.Item value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup.Root>
    )
  },
  {
    id: "select",
    name: "Select",
    category: "Form Primitives",
    description: "Displays a list of options for the user to pick from—triggered by a button.",
    installCommand: "npm install @radix-ui/react-select",
    usageCode: `<Select.Root>...</Select.Root>`,
    demo: (
      <div>
        <Select.Root>
          <Select.Trigger className="w-[200px]">
            <Select.Value placeholder="Select a timezone" />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              <Select.Label>North America</Select.Label>
              <Select.Item value="est">Eastern Standard Time (EST)</Select.Item>
              <Select.Item value="cst">Central Standard Time (CST)</Select.Item>
            </Select.Group>
            <Select.Group>
              <Select.Label>Europe</Select.Label>
              <Select.Item value="gmt">Greenwich Mean Time (GMT)</Select.Item>
              <Select.Item value="cet">Central European Time (CET)</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
    )
  },
  {
    id: "textarea",
    name: "Textarea",
    category: "Form Primitives",
    description: "Displays a form textarea or a component that looks like a textarea.",
    installCommand: "npm install",
    usageCode: `<Textarea placeholder="Type your message here." />`,
    demo: (
      <div className="w-full max-w-sm">
        <Textarea placeholder="Type your message here." label="Bio" />
      </div>
    )
  },
  {
    id: "switch",
    name: "Switch",
    category: "Form Primitives",
    description: "A control that allows the user to toggle between checked and not checked.",
    installCommand: "npm install @radix-ui/react-switch",
    usageCode: `<Switch id="airplane-mode" />`,
    demo: (
      <div className="flex items-center space-x-4 border border-white/10 p-4 rounded-lg bg-zinc-900/50">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    )
  },
  {
    id: "checkbox",
    name: "Checkbox",
    category: "Form Primitives",
    description: "A control that allows the user to toggle between checked and not checked.",
    installCommand: "npm install @radix-ui/react-checkbox",
    usageCode: `<Checkbox id="terms" />`,
    demo: (
      <div className="flex items-center space-x-3">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="cursor-pointer">Accept terms and conditions</Label>
      </div>
    )
  },

  {
    id: "table",
    name: "Table",
    category: "Data Display",
    description: "A responsive table component.",
    installCommand: "npm install",
    usageCode: `<Table.Root>...</Table.Root>`,
    demo: (
      <div className="w-full max-w-xl border border-white/10 rounded-md overflow-hidden bg-zinc-900/20 p-4">
        <Table.Root>
          <Table.Header>
            <Table.Row className="bg-zinc-900/50">
              <Table.Head className="w-[100px]">Invoice</Table.Head>
              <Table.Head>Status</Table.Head>
              <Table.Head>Method</Table.Head>
              <Table.Head className="text-right">Amount</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell className="font-medium">INV001</Table.Cell>
              <Table.Cell><Badge variant="secondary">Paid</Badge></Table.Cell>
              <Table.Cell>Credit Card</Table.Cell>
              <Table.Cell className="text-right">$250.00</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-medium">INV002</Table.Cell>
              <Table.Cell><Badge variant="outline" className="text-yellow-500 border-yellow-500/50">Pending</Badge></Table.Cell>
              <Table.Cell>PayPal</Table.Cell>
              <Table.Cell className="text-right">$150.00</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-medium">INV003</Table.Cell>
              <Table.Cell><Badge variant="secondary">Paid</Badge></Table.Cell>
              <Table.Cell>Bank Transfer</Table.Cell>
              <Table.Cell className="text-right">$350.00</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>
    )
  },
  {
    id: "card",
    name: "Card",
    category: "Data Display",
    description: "Displays a card with header, content, and footer.",
    installCommand: "npm install",
    usageCode: `<Card.Root>...</Card.Root>`,
    demo: (
      <div>
        <Card.Root className="w-[350px] shadow-2xl">
          <Card.Header>
            <Card.Title>Notification Settings</Card.Title>
            <Card.Description>Choose what you want to be notified about.</Card.Description>
          </Card.Header>
          <Card.Content className="grid gap-4">
            <div className="flex items-center space-x-4 rounded-md border border-white/10 p-4 hover:bg-zinc-900/50 transition-colors">
              <Box className="h-5 w-5 text-[#7c3aed]" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Push Notifications</p>
                <p className="text-sm text-zinc-500">Send notifications to device.</p>
              </div>
              <Switch />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" /> Save Changes
            </Button>
          </Card.Footer>
        </Card.Root>
      </div>
    )
  },
  {
    id: "carousel",
    name: "Carousel",
    category: "Data Display",
    description: "A carousel with motion and swipe built using Embla.",
    installCommand: "npm install lucide-react",
    usageCode: `<Carousel.Root>...</Carousel.Root>`,
    demo: (
      <div>
        <Carousel.Root className="w-full max-w-xs">
          <Carousel.Content>
            {Array.from({ length: 5 }).map((_, index) => (
              <Carousel.Item key={index}>
                <div className="p-1">
                  <Card.Root>
                    <Card.Content className="flex aspect-square items-center justify-center p-6 bg-gradient-to-br from-zinc-900 to-black">
                      <span className="text-4xl font-semibold text-zinc-700">{index + 1}</span>
                    </Card.Content>
                  </Card.Root>
                </div>
              </Carousel.Item>
            ))}
          </Carousel.Content>
          <Carousel.Previous />
          <Carousel.Next />
        </Carousel.Root>
      </div>
    )
  },
  {
    id: "scroll-area",
    name: "Scroll Area",
    category: "Data Display",
    description: "Augments native scroll functionality for custom, cross-browser styling.",
    installCommand: "npm install @radix-ui/react-scroll-area",
    usageCode: `<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">...</ScrollArea>`,
    demo: (
      <div>
        <ScrollArea className="h-72 w-48 rounded-md border border-white/10 bg-zinc-900/30">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {Array.from({ length: 50 }).map((_, i, a) => (
              <React.Fragment key={i}>
                <div className="text-sm py-1">v1.2.0-beta.{a.length - i}</div>
                <Separator className="my-1" />
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </div>
    )
  },
  {
    id: "accordion",
    name: "Accordion",
    category: "Data Display",
    description: "A vertically stacked set of interactive headings that each reveal a section of content.",
    installCommand: "npm install @radix-ui/react-accordion",
    usageCode: `<Accordion.Root type="single" collapsible>...</Accordion.Root>`,
    demo: (
      <div className="w-full max-w-sm">
        <Accordion.Root type="single" collapsible className="w-full">
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It adheres to the WAI-ARIA design pattern.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Trigger>Is it styled?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It comes with default styles that matches the other components' aesthetic.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-3">
            <Accordion.Trigger>Is it animated?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It's animated by default, but you can disable it if you prefer.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    )
  },
  {
    id: "collapsible",
    name: "Collapsible",
    category: "Data Display",
    description: "An interactive component which expands/collapses a panel.",
    installCommand: "npm install @radix-ui/react-collapsible",
    usageCode: `<Collapsible.Root>...</Collapsible.Root>`,
    demo: (
      <div className="w-[300px] border border-white/10 rounded-md p-2">
        <Collapsible.Root>
          <div className="flex items-center justify-between space-x-4 px-2">
            <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
            <Collapsible.Trigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </Collapsible.Trigger>
          </div>
          <div className="rounded-md border border-white/10 px-4 py-3 font-mono text-sm mt-2">@radix-ui/primitives</div>
          <Collapsible.Content className="space-y-2 mt-2">
            <div className="rounded-md border border-white/10 px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
            <div className="rounded-md border border-white/10 px-4 py-3 font-mono text-sm">@stitches/react</div>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>
    )
  },
  {
    id: "aspect-ratio",
    name: "Aspect Ratio",
    category: "Data Display",
    description: "Displays content within a desired ratio.",
    installCommand: "npm install @radix-ui/react-aspect-ratio",
    usageCode: `<AspectRatio ratio={16/9}>...</AspectRatio>`,
    demo: (
      <div className="w-[350px]">
        <AspectRatio ratio={16 / 9} className="bg-zinc-800 rounded-md overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
          />
        </AspectRatio>
      </div>
    )
  },
  {
    id: "avatar",
    name: "Avatar",
    category: "Data Display",
    description: "An image element with a fallback for representing the user.",
    installCommand: "npm install @radix-ui/react-avatar",
    usageCode: `<Avatar>...</Avatar>`,
    demo: (
      <div className="flex gap-4 items-center">
        <Avatar.Root>
          <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
          <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root>
          <Avatar.Image src="https://github.com/leerob.png" alt="@leerob" />
          <Avatar.Fallback>LR</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root>
          <Avatar.Fallback>AM</Avatar.Fallback>
        </Avatar.Root>
      </div>
    )
  },

  {
    id: "toast",
    name: "Toast",
    category: "Feedback",
    description: "A succinct message that is displayed temporarily.",
    installCommand: "npm install @radix-ui/react-toast",
    usageCode: `<Toast.Provider>...</Toast.Provider>`,
    demo: (
      <div className="relative h-[100px] w-full flex items-center justify-center">
        <Toast.Provider swipeDirection="right">
          <Button onClick={() => alert("Check the code for usage. State management required.")} variant="outline">
            Add to Calendar
          </Button>
          <Toast.Root className="bg-zinc-900 border border-white/10" open={true}>
            <div className="grid gap-1">
              <Toast.Title>Scheduled: Catch up</Toast.Title>
              <Toast.Description>Friday, February 10, 2023 at 5:57 PM</Toast.Description>
            </div>
            <Toast.Action altText="Undo">Undo</Toast.Action>
            <Toast.Close />
          </Toast.Root>
          <Toast.Viewport className="absolute top-0 right-0 p-4" />
        </Toast.Provider>
      </div>
    )
  },
  {
    id: "alert",
    name: "Alert",
    category: "Feedback",
    description: "Displays a callout for user attention.",
    installCommand: "npm install",
    usageCode: `<Alert.Root>...</Alert.Root>`,
    demo: (
      <div className="w-full max-w-md space-y-4">
        <Alert.Root>
          <Terminal className="h-4 w-4" />
          <Alert.Title>Heads up!</Alert.Title>
          <Alert.Description>You can add components using the CLI.</Alert.Description>
        </Alert.Root>
        <Alert.Root variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <Alert.Title>Error</Alert.Title>
          <Alert.Description>Your session has expired. Please log in again.</Alert.Description>
        </Alert.Root>
      </div>
    )
  },
  {
    id: "callout",
    name: "Callout",
    category: "Feedback",
    description: "Draws attention to important information.",
    installCommand: "npm install",
    usageCode: `<Callout.Root>...</Callout.Root>`,
    demo: (
      <div className="w-full max-w-md space-y-4">
        <Callout.Root variant="default">
          <Callout.Icon><Info /></Callout.Icon>
          <Callout.Text>Note: You can use any icon here.</Callout.Text>
        </Callout.Root>
        <Callout.Root variant="warning">
          <Callout.Icon><AlertCircle /></Callout.Icon>
          <Callout.Text>Warning: This action is irreversible.</Callout.Text>
        </Callout.Root>
      </div>
    )
  },
  {
    id: "progress",
    name: "Progress",
    category: "Feedback",
    description: "Displays an indicator showing the completion progress of a task.",
    installCommand: "npm install @radix-ui/react-progress",
    usageCode: `<Progress value={33} />`,
    demo: (
      <div className="w-full max-w-sm space-y-4">
        <Progress value={66} />
        <p className="text-xs text-zinc-500 text-center">Loading components... 66%</p>
      </div>
    )
  },
  {
    id: "skeleton",
    name: "Skeleton",
    category: "Feedback",
    description: "Use to show a placeholder while content is loading.",
    installCommand: "npm install",
    usageCode: `<Skeleton className="w-[100px] h-[20px] rounded-full" />`,
    demo: (
      <div className="flex items-center space-x-4 border border-white/5 p-4 rounded-lg">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    )
  },

  {
    id: "modal",
    name: "Modal",
    category: "Overlay",
    description: "A window overlaid on either the primary window or another dialog window.",
    installCommand: "npm install @radix-ui/react-dialog",
    usageCode: `<Modal.Root>...</Modal.Root>`,
    demo: (
      <div>
        <Modal.Root>
          <Modal.Trigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </Modal.Trigger>
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>Edit profile</Modal.Title>
              <Modal.Description>
                Make changes to your profile here. Click save when you're done.
              </Modal.Description>
            </Modal.Header>
            <div className="grid gap-4 py-4">
              <Input id="name" label="Name" defaultValue="Pedro Duarte" />
              <Input id="username" label="Username" defaultValue="@peduarte" />
            </div>
            <Modal.Footer>
              <Button type="submit">Save changes</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Root>
      </div>
    )
  },
  {
    id: "alert-dialog",
    name: "Alert Dialog",
    category: "Overlay",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    installCommand: "npm install @radix-ui/react-dialog",
    usageCode: `<AlertDialog.Root>...</AlertDialog.Root>`,
    demo: (
      <div>
        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <Button variant="outline">Delete Account</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Header>
              <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
              <AlertDialog.Description>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </AlertDialog.Description>
            </AlertDialog.Header>
            <AlertDialog.Footer>
              <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button variant="destructive">Continue</Button>
              </AlertDialog.Action>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    )
  },
  {
    id: "sheet",
    name: "Sheet",
    category: "Overlay",
    description: "Extends the Dialog component to display content that complements the main screen content.",
    installCommand: "npm install @radix-ui/react-dialog",
    usageCode: `<Sheet.Root>...</Sheet.Root>`,
    demo: (
      <div>
        <Sheet.Root>
          <Sheet.Trigger asChild>
            <Button variant="outline">Open Sheet</Button>
          </Sheet.Trigger>
          <Sheet.Content>
            <Sheet.Header>
              <Sheet.Title>Edit profile</Sheet.Title>
              <Sheet.Description>
                Make changes to your profile here. Click save when you're done.
              </Sheet.Description>
            </Sheet.Header>
            <div className="grid gap-4 py-4">
              <Input id="name" label="Name" defaultValue="Pedro Duarte" />
              <Input id="username" label="Username" defaultValue="@peduarte" />
            </div>
            <Sheet.Footer>
              <Button type="submit">Save changes</Button>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet.Root>
      </div>
    )
  },
  {
    id: "drawer",
    name: "Drawer",
    category: "Overlay",
    description: "A drawer component for React.",
    installCommand: "npm install @radix-ui/react-dialog",
    usageCode: `<Drawer.Root>...</Drawer.Root>`,
    demo: (
      <div>
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </Drawer.Trigger>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Move Goal</Drawer.Title>
              <Drawer.Description>Set your daily activity goal.</Drawer.Description>
            </Drawer.Header>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button variant="outline" size="icon" className="h-8 w-8 shrink-0 rounded-full">
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-5xl font-bold tracking-tighter text-white">400</div>
                  <div className="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
                </div>
                <Button variant="outline" size="icon" className="h-8 w-8 shrink-0 rounded-full">
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
            </div>
            <Drawer.Footer>
              <Button>Submit</Button>
              <Button variant="outline">Cancel</Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Root>
      </div>
    )
  },
  {
    id: "hover-card",
    name: "Hover Card",
    category: "Overlay",
    description: "For sighted users to preview content available behind a link.",
    installCommand: "npm install @radix-ui/react-hover-card",
    usageCode: `<HoverCard.Root>...</HoverCard.Root>`,
    demo: (
      <div>
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <Button variant="link" className="text-lg">@nextjs</Button>
          </HoverCard.Trigger>
          <HoverCard.Content className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar.Root>
                <Avatar.Image src="https://github.com/vercel.png" />
                <Avatar.Fallback>VC</Avatar.Fallback>
              </Avatar.Root>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCard.Content>
        </HoverCard.Root>
      </div>
    )
  },
  {
    id: "popover",
    name: "Popover",
    category: "Overlay",
    description: "Displays rich content in a portal, triggered by a button.",
    installCommand: "npm install @radix-ui/react-popover",
    usageCode: `<Popover.Root>...</Popover.Root>`,
    demo: (
      <div>
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button variant="outline">Open Popover</Button>
          </Popover.Trigger>
          <Popover.Content className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-zinc-400">Set the dimensions for the layer.</p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth">Max. width</Label>
                  <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                </div>
              </div>
            </div>
          </Popover.Content>
        </Popover.Root>
      </div>
    )
  },
  {
    id: "tooltip",
    name: "Tooltip",
    category: "Overlay",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    installCommand: "npm install @radix-ui/react-tooltip",
    usageCode: `<Tooltip.Provider>...</Tooltip.Provider>`,
    demo: (
      <div>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Button variant="outline" size="icon">
                <span className="sr-only">Add</span>
                <Plus className="h-4 w-4" />
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>Add to library</p>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    )
  },
  {
    id: "context-menu",
    name: "Context Menu",
    category: "Overlay",
    description: "Displays a menu to the user — triggered by a right click.",
    installCommand: "npm install @radix-ui/react-context-menu",
    usageCode: `<ContextMenu.Root>...</ContextMenu.Root>`,
    demo: (
      <div>
        <ContextMenu.Root>
          <ContextMenu.Trigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-white/20 text-sm hover:bg-zinc-900/50 transition-colors">
            Right click here
          </ContextMenu.Trigger>
          <ContextMenu.Content className="w-64">
            <ContextMenu.Item inset>
              Back <span className="ml-auto text-xs opacity-50">⌘[</span>
            </ContextMenu.Item>
            <ContextMenu.Item inset disabled>
              Forward <span className="ml-auto text-xs opacity-50">⌘]</span>
            </ContextMenu.Item>
            <ContextMenu.Item inset>
              Reload <span className="ml-auto text-xs opacity-50">⌘R</span>
            </ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item inset>
              Save As... <span className="ml-auto text-xs opacity-50">⇧⌘S</span>
            </ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Root>
      </div>
    )
  },

  {
    id: "menubar",
    name: "Menubar",
    category: "Navigation",
    description: "A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.",
    installCommand: "npm install @radix-ui/react-menubar",
    usageCode: `<Menubar.Root>...</Menubar.Root>`,
    demo: (
      <div>
        <Menubar.Root>
          <Menubar.Menu>
            <Menubar.Trigger>File</Menubar.Trigger>
            <Menubar.Content>
              <Menubar.Item>New Tab <span className="ml-auto text-xs opacity-50">⌘T</span></Menubar.Item>
              <Menubar.Item>New Window <span className="ml-auto text-xs opacity-50">⌘N</span></Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item>Share</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item>Print</Menubar.Item>
            </Menubar.Content>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger>Edit</Menubar.Trigger>
            <Menubar.Content>
              <Menubar.Item>Undo <span className="ml-auto text-xs opacity-50">⌘Z</span></Menubar.Item>
              <Menubar.Item>Redo <span className="ml-auto text-xs opacity-50">⇧⌘Z</span></Menubar.Item>
            </Menubar.Content>
          </Menubar.Menu>
        </Menubar.Root>
      </div>
    )
  },
  {
    id: "navigation-menu",
    name: "Navigation Menu",
    category: "Navigation",
    description: "A collection of links for navigating websites.",
    installCommand: "npm install @radix-ui/react-navigation-menu",
    usageCode: `<NavigationMenu.Root>...</NavigationMenu.Root>`,
    demo: (
      <div>
        <NavigationMenu.Root>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger>Getting started</NavigationMenu.Trigger>
              <NavigationMenu.Content>
                <div className="grid gap-3 p-4 w-[400px]">
                  <div className="row-span-3">
                    <NavigationMenu.Link asChild>
                      <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-zinc-800 to-zinc-900 p-6 no-underline outline-none focus:shadow-md" href="/">
                        <Gem className="h-6 w-6 text-[#7c3aed]" />
                        <div className="mb-2 mt-4 text-lg font-medium text-white">Zentrix</div>
                        <p className="text-sm leading-tight text-zinc-400">Beautifully designed components built with Radix UI and Tailwind CSS.</p>
                      </a>
                    </NavigationMenu.Link>
                  </div>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
              <NavigationMenu.Content>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <NavigationMenu.Link asChild>
                    <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                      <div className="text-sm font-medium leading-none">Alert Dialog</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">A modal dialog that interrupts the user.</p>
                    </a>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link asChild>
                    <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                      <div className="text-sm font-medium leading-none">Hover Card</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">For sighted users to preview content available behind a link.</p>
                    </a>
                  </NavigationMenu.Link>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    )
  },
  {
    id: "dropdown-menu",
    name: "Dropdown Menu",
    category: "Navigation",
    description: "Displays a menu to the user—such as a set of actions or functions—triggered by a button.",
    installCommand: "npm install @radix-ui/react-dropdown-menu",
    usageCode: `<DropdownMenu.Root>...</DropdownMenu.Root>`,
    demo: (
      <div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Button variant="outline">
              Open Menu <MoreVertical className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>My Account</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Profile</DropdownMenu.Item>
            <DropdownMenu.Item>Billing</DropdownMenu.Item>
            <DropdownMenu.Item>Team</DropdownMenu.Item>
            <DropdownMenu.Item>Subscription</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    )
  },
  {
    id: "tabs",
    name: "Tabs",
    category: "Navigation",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    installCommand: "npm install @radix-ui/react-tabs",
    usageCode: `<Tabs.Root defaultValue="account">...</Tabs.Root>`,
    demo: (
      <div>
        <Tabs.Root defaultValue="account" className="w-[400px]">
          <Tabs.List className="grid w-full grid-cols-2">
            <Tabs.Trigger value="account">Account</Tabs.Trigger>
            <Tabs.Trigger value="password">Password</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="account">
            <Card.Root>
              <Card.Header>
                <Card.Title>Account</Card.Title>
                <Card.Description>Make changes to your account here.</Card.Description>
              </Card.Header>
              <Card.Content className="space-y-2">
                <Input id="name" label="Name" defaultValue="Pedro Duarte" />
              </Card.Content>
              <Card.Footer>
                <Button>Save changes</Button>
              </Card.Footer>
            </Card.Root>
          </Tabs.Content>
          <Tabs.Content value="password">
            <Card.Root>
              <Card.Header>
                <Card.Title>Password</Card.Title>
                <Card.Description>Change your password here.</Card.Description>
              </Card.Header>
              <Card.Content className="space-y-2">
                <Input id="current" label="Current password" type="password" />
              </Card.Content>
              <Card.Footer>
                <Button>Save password</Button>
              </Card.Footer>
            </Card.Root>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    )
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    category: "Navigation",
    description: "Displays the path to the current resource using a hierarchy of links.",
    installCommand: "npm install",
    usageCode: `<Breadcrumb.Root>...</Breadcrumb.Root>`,
    demo: (
      <div>
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <span className="font-normal text-white">Breadcrumb</span>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </div>
    )
  },

  {
    id: "bar-chart",
    name: "Bar Chart",
    category: "Charts",
    description: "A simple CSS-only bar chart component.",
    installCommand: "npm install",
    usageCode: `<BarChart data={[...]} />`,
    demo: (
      <div className="w-full max-w-sm">
        <Card.Root>
          <Card.Header>
            <Card.Title>Revenue</Card.Title>
            <Card.Description>Monthly revenue for 2024</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="flex items-end justify-between gap-2 h-40 pt-4">
              {[40, 70, 35, 60, 90, 50, 80].map((h, i) => (
                <div key={i} className="group relative flex flex-col items-center justify-end w-full h-full">
                  <div style={{ height: `${h}%` }} className="w-full bg-[#7c3aed] opacity-80 hover:opacity-100 transition-all rounded-t-sm" />
                </div>
              ))}
            </div>
          </Card.Content>
        </Card.Root>
      </div>
    )
  },
  {
    id: "pie-chart",
    name: "Pie Chart",
    category: "Charts",
    description: "A simple pie chart visual.",
    installCommand: "npm install",
    usageCode: `<PieChart data={[...]} />`,
    demo: (
      <div className="w-full max-w-sm">
        <Card.Root>
          <Card.Header>
            <Card.Title>Traffic Source</Card.Title>
          </Card.Header>
          <Card.Content className="flex justify-center py-6">
            <div className="relative h-40 w-40 rounded-full border-[30px] border-[#7c3aed] border-r-zinc-800 border-b-zinc-700 transform rotate-45 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-white transform -rotate-45">
                75%
              </div>
            </div>
          </Card.Content>
        </Card.Root>
      </div>
    )
  },

  {
    id: "login-form",
    name: "Login Form",
    category: "Patterns",
    description: "A pre-built login form with email and password.",
    installCommand: "npm install",
    usageCode: `<LoginForm />`,
    demo: (
      <div className="w-full max-w-sm">
        <Card.Root>
          <Card.Header>
            <Card.Title>Login</Card.Title>
            <Card.Description>Enter your email below to login to your account.</Card.Description>
          </Card.Header>
          <Card.Content className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button className="w-full">Sign in</Button>
          </Card.Footer>
        </Card.Root>
      </div>
    )
  },
  {
    id: "payment-method",
    name: "Payment Method",
    category: "Patterns",
    description: "A card to manage payment methods.",
    installCommand: "npm install",
    usageCode: `<PaymentMethod />`,
    demo: (
      <div className="w-full max-w-md">
        <Card.Root>
          <Card.Header>
            <Card.Title>Payment Method</Card.Title>
            <Card.Description>Add a new payment method to your account.</Card.Description>
          </Card.Header>
          <Card.Content className="grid gap-6">
            <RadioGroup.Root defaultValue="card" className="grid grid-cols-3 gap-4">
              <Label htmlFor="card" className="flex flex-col items-center justify-between rounded-md border border-white/10 bg-zinc-950 p-4 hover:bg-zinc-900 hover:text-white [&:has([data-state=checked])]:border-[#7c3aed] [&:has([data-state=checked])]:text-[#7c3aed]">
                <RadioGroup.Item value="card" id="card" className="sr-only" />
                <CreditCard className="mb-3 h-6 w-6" />
                Card
              </Label>
              <Label htmlFor="paypal" className="flex flex-col items-center justify-between rounded-md border border-white/10 bg-zinc-950 p-4 hover:bg-zinc-900 hover:text-white [&:has([data-state=checked])]:border-[#7c3aed] [&:has([data-state=checked])]:text-[#7c3aed]">
                <RadioGroup.Item value="paypal" id="paypal" className="sr-only" />
                <Gem className="mb-3 h-6 w-6" />
                Paypal
              </Label>
              <Label htmlFor="apple" className="flex flex-col items-center justify-between rounded-md border border-white/10 bg-zinc-950 p-4 hover:bg-zinc-900 hover:text-white [&:has([data-state=checked])]:border-[#7c3aed] [&:has([data-state=checked])]:text-[#7c3aed]">
                <RadioGroup.Item value="apple" id="apple" className="sr-only" />
                <CommandIcon className="mb-3 h-6 w-6" />
                Apple
              </Label>
            </RadioGroup.Root>
          </Card.Content>
          <Card.Footer>
            <Button className="w-full">Continue</Button>
          </Card.Footer>
        </Card.Root>
      </div>
    )
  },
  {
    id: "notifications",
    name: "Notifications",
    category: "Patterns",
    description: "A notification preference card.",
    installCommand: "npm install",
    usageCode: `<Notifications />`,
    demo: (
      <div className="w-[380px]">
        <Card.Root>
          <Card.Header>
            <Card.Title>Notifications</Card.Title>
            <Card.Description>Choose what you want to be notified about.</Card.Description>
          </Card.Header>
          <Card.Content className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border border-white/10 p-4">
              <Bell className="h-5 w-5" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Push Notifications</p>
                <p className="text-sm text-zinc-500">Send notifications to device.</p>
              </div>
              <Switch />
            </div>
            <div className=" flex items-center space-x-4 rounded-md border border-white/10 p-4">
              <Mail className="h-5 w-5" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Email Notifications</p>
                <p className="text-sm text-zinc-500">Send daily digest.</p>
              </div>
              <Switch defaultChecked />
            </div>
          </Card.Content>
        </Card.Root>
      </div>
    )
  },
  {
    id: "cookie-settings",
    name: "Cookie Settings",
    category: "Patterns",
    description: "A cookie consent settings pattern.",
    installCommand: "npm install",
    usageCode: `<CookieSettings />`,
    demo: (
      <div className="w-full max-w-sm">
        <Card.Root>
          <Card.Header>
            <Card.Title>Cookie Settings</Card.Title>
            <Card.Description>Manage your cookie settings here.</Card.Description>
          </Card.Header>
          <Card.Content className="grid gap-6">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="necessary" className="flex flex-col space-y-1">
                <span>Strictly Necessary</span>
                <span className="font-normal text-xs text-muted-foreground">These cookies are essential.</span>
              </Label>
              <Switch id="necessary" defaultChecked disabled />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="functional" className="flex flex-col space-y-1">
                <span>Functional Cookies</span>
                <span className="font-normal text-xs text-muted-foreground">These cookies allow the website to remember choices.</span>
              </Label>
              <Switch id="functional" />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="performance" className="flex flex-col space-y-1">
                <span>Performance Cookies</span>
                <span className="font-normal text-xs text-muted-foreground">These cookies help to improve the performance.</span>
              </Label>
              <Switch id="performance" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button className="w-full">Save Preferences</Button>
          </Card.Footer>
        </Card.Root>
      </div>
    )
  }
];

const stripTypes = (code: string) => {
  return code
    .replace(/export interface [\s\S]*?^}/gm, '')
    .replace(/export type [\s\S]*?^$/gm, '')
    .replace(/React\.forwardRef<[^>]+>/g, 'React.forwardRef')
    .replace(/React\.useState<[^>]+>/g, 'React.useState')
    .replace(/: (string|number|boolean|any|void|React\.ReactNode)(\[\])?/g, '')
    .replace(/: [A-Z][a-zA-Z0-9_.]+(\[\])?/g, '')
    .replace(/\?: (string|number|boolean|any|void|React\.ReactNode)(\[\])?/g, '')
    .replace(/\?: [A-Z][a-zA-Z0-9_.]+(\[\])?/g, '')
    .replace(/as [A-Z][a-zA-Z0-9_]+/g, '')
    .split('\n')
    .filter(line => line.trim() !== '')
    .join('\n');
}

const ComponentDoc: React.FC<{ entry: ComponentEntry }> = ({ entry }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'install'>('preview');
  const [copied, setCopied] = useState(false);
  const [isJs, setIsJs] = useState(false);

  const codeToDisplay = activeTab === 'code'
    ? (CODE_SNIPPETS[entry.id] || CODE_SNIPPETS['default'])
    : entry.usageCode;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getDisplayCode = (code: string) => {
    if (isJs) return stripTypes(code);
    return code;
  }

  return (
    <div className="space-y-8 animate-in fade-in-0 slide-in-from-bottom-2 duration-700 [animation-timing-function:cubic-bezier(0.16,1,0.3,1)]">
      <div className="space-y-3 border-b border-white/[0.08] pb-8">
        {/* Category-specific badges */}
        {entry.category === 'Foundation' && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-bold text-blue-400 tracking-wide uppercase">Essential</span>
          </div>
        )}
        {entry.category === 'Form Primitives' && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-bold text-purple-400 tracking-wide uppercase">Forms</span>
          </div>
        )}
        {entry.category === 'Data Display' && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-emerald-400 tracking-wide uppercase">Data</span>
          </div>
        )}
        {entry.category === 'Feedback' && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-xs font-bold text-yellow-400 tracking-wide uppercase">Status</span>
          </div>
        )}
        {entry.category === 'Overlay' && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs font-bold text-indigo-400 tracking-wide uppercase">Popups</span>
          </div>
        )}
        {entry.category === 'Navigation' && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-bold text-teal-400 tracking-wide uppercase">Menu</span>
          </div>
        )}
        {entry.category === 'Charts' && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs font-bold text-orange-400 tracking-wide uppercase">Analytics</span>
          </div>
        )}
        {entry.category === 'Patterns' && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/20 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-xs font-bold text-rose-400 tracking-wide uppercase">Templates</span>
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">{entry.name}</h1>
        <p className="text-base md:text-lg text-zinc-400/90 max-w-3xl leading-relaxed">{entry.description}</p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex bg-zinc-900/60 p-1 rounded-lg border border-white/[0.08] shadow-sm">
            {['preview', 'code', 'install'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-5 py-2 text-sm font-medium rounded-md transition-all duration-200 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] capitalize ${activeTab === tab
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
              >
                {tab === 'code' ? 'Source Code' : tab}
              </button>
            ))}
          </div>

          {(activeTab === 'code' || activeTab === 'install') && (
            <div className="flex items-center space-x-2 bg-zinc-900/60 px-4 py-2 rounded-lg border border-white/[0.08] shadow-sm">
              <span className={`text-xs font-bold transition-colors duration-200 ${!isJs ? 'text-[#7c3aed]' : 'text-zinc-500'}`}>TS</span>
              <Switch checked={isJs} onCheckedChange={setIsJs} className="scale-75 data-[state=checked]:bg-zinc-700" />
              <span className={`text-xs font-bold transition-colors duration-200 ${isJs ? 'text-yellow-400' : 'text-zinc-500'}`}>JS</span>
            </div>
          )}
        </div>

        <div className="group relative rounded-xl border border-white/[0.08] bg-zinc-950 shadow-2xl overflow-hidden hover:border-white/[0.12] transition-colors duration-300">
          {activeTab === 'preview' && (
            <div className="relative flex min-h-[300px] w-full items-center justify-center p-12">
              <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>

              <div className="relative z-10 w-full flex justify-center">
                {entry.demo}
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="relative w-full bg-[#0a0a0a]">
              <div className="absolute right-4 top-4 z-20">
                <Button variant="outline" size="sm" onClick={() => handleCopy(getDisplayCode(codeToDisplay))} className="bg-zinc-900 border-white/10 hover:bg-zinc-800 transition-colors duration-200">
                  {copied ? <Check size={14} className="mr-2 text-green-500" /> : <Copy size={14} className="mr-2" />}
                  Copy
                </Button>
              </div>
              <div className="p-6 overflow-auto max-h-[600px] w-full">
                <pre className="text-sm font-mono text-zinc-300 leading-relaxed tab-4">
                  <code>{getDisplayCode(codeToDisplay)}</code>
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'install' && (
            <div className="p-10 space-y-10 bg-[#0a0a0a] min-h-[300px]">
              <div className="space-y-4">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <Terminal size={16} className="text-[#7c3aed]" />
                  1. Install Dependencies
                </h3>
                <div className="relative group/install">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg blur opacity-0 group-hover/install:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center justify-between bg-zinc-900 border border-white/[0.08] rounded-lg p-4 font-mono text-sm text-zinc-300">
                    <span>{entry.installCommand}</span>
                    <Button variant="ghost" size="icon" onClick={() => handleCopy(entry.installCommand)} className="h-8 w-8 hover:bg-white/10 transition-colors">
                      <Copy size={14} />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <Code2 size={16} className="text-[#7c3aed]" />
                  2. Usage
                </h3>
                <div className="relative group/usage">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg blur opacity-0 group-hover/usage:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-zinc-900 border border-white/[0.08] rounded-lg p-6 font-mono text-sm text-zinc-300 overflow-x-auto">
                    <pre><code>{getDisplayCode(entry.usageCode)}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-16 mt-24 border-t border-white/[0.06] relative overflow-hidden bg-zinc-950/80 backdrop-blur-xl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#7c3aed]/30 to-transparent" />
      <div className="max-w-[1600px] mx-auto px-6 flex flex-col items-center justify-center gap-6 text-center relative z-10">
        <div className="flex items-center gap-3 mb-2 group cursor-default">
          <img src="/brand/logo/logo.png" alt="Zentrix Orbit Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(124,58,237,0.6)] animate-pulse-glow transition-transform group-hover:scale-110 duration-500" />
          <span className="font-bold tracking-tight text-xl text-white">ZENTRIX <span className="text-[#7c3aed]">ORBIT</span></span>
        </div>
        <p className="text-zinc-500 max-w-lg leading-relaxed text-sm">
          The definitive headless UI system for scalable, enterprise-grade React applications.
          Created by <span className="text-zinc-300 font-medium">Aariz Mehdi</span>.
        </p>
        <div className="text-xs text-zinc-600 mt-4 font-mono">
          © {new Date().getFullYear()} ZENTRIX ORBIT. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [activeRoute, setActiveRoute] = useState<string>('introduction');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories: Category[] = ['Foundation', 'Form Primitives', 'Data Display', 'Feedback', 'Overlay', 'Navigation', 'Charts', 'Patterns'];

  // Scroll to top when route changes
  React.useEffect(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeRoute]);

  const renderContent = () => {
    if (activeRoute === 'introduction') {
      return (
        <div className="space-y-16 max-w-5xl mx-auto">
          <div className="relative space-y-12 py-8 text-center md:text-left">
            {/* Subtle radial gradient glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(124,58,237,0.08)_0%,transparent_60%)] pointer-events-none" />
            <div className="relative space-y-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-300 [animation-timing-function:cubic-bezier(0.16,1,0.3,1)]">
              <h1 className="font-display text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[1.1] max-w-3xl md:mx-0 mx-auto mb-8">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-white animated-gradient">
                  Build faster
                </span>
                <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-300 animated-gradient-delay">
                  Ship smarter
                </span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-300/95 max-w-2xl leading-[1.75] md:mx-0 mx-auto" style={{ letterSpacing: '-0.015em', fontWeight: 450 }}>
                Zentrix Orbit is a collection of re-usable components that you can copy and paste directly into your apps. It's not a library—it's a foundation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-in fade-in-0 slide-in-from-bottom-4 duration-300 [animation-delay:100ms] [animation-timing-function:cubic-bezier(0.16,1,0.3,1)]">
              <Button size="lg" variant="neon" onClick={() => setActiveRoute('button')} className="group h-12 px-8 text-base rounded-xl transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(124,58,237,0.3)] focus:ring-2 focus:ring-[#7c3aed] focus:ring-offset-2 focus:ring-offset-zinc-950 bg-gradient-to-r from-[#7c3aed] to-[#6d28d9]">
                Explore Components <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('https://github.com', '_blank')} className="group h-12 px-8 text-base rounded-xl transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-zinc-950">
                <Github className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" /> Star on GitHub
              </Button>
            </div>
          </div>

          <Separator className="my-16" />
          <div className="space-y-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-300 [animation-delay:150ms] [animation-timing-function:cubic-bezier(0.16,1,0.3,1)]">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white">Quick Start Guide</h2>
              <div className="px-4 py-1.5 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] text-xs font-semibold border border-[#7c3aed]/20 shadow-[0_0_20px_rgba(124,58,237,0.15)]">
                v2.0.0
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card.Root className="group bg-zinc-900/40 border-white/[0.06] hover:border-white/[0.12] hover:bg-zinc-900/60 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] rounded-xl">
                <Card.Header className="pb-4">
                  <Card.Title className="flex items-center gap-3 text-lg font-semibold"><Terminal className="text-[#7c3aed] transition-transform duration-300 group-hover:scale-110" size={20} /> 1. Initialize Project</Card.Title>
                </Card.Header>
                <Card.Content className="space-y-4">
                  <p className="text-sm text-zinc-400/90 leading-relaxed">Start by creating a new React project using Vite.</p>
                  <div className="bg-black/50 p-4 rounded-lg border border-white/[0.06] flex justify-between items-center group/code hover:border-white/10 transition-colors">
                    <code className="text-sm font-mono text-zinc-300">npm create vite@latest my-app -- --template react-ts</code>
                  </div>
                </Card.Content>
              </Card.Root>

              <Card.Root className="group bg-zinc-900/40 border-white/[0.06] hover:border-white/[0.12] hover:bg-zinc-900/60 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] rounded-xl">
                <Card.Header className="pb-4">
                  <Card.Title className="flex items-center gap-3 text-lg font-semibold"><Code2 className="text-[#7c3aed] transition-transform duration-300 group-hover:scale-110" size={20} /> 2. Setup Tailwind</Card.Title>
                </Card.Header>
                <Card.Content className="space-y-4">
                  <p className="text-sm text-zinc-400/90 leading-relaxed">Install Tailwind CSS and its dependencies.</p>
                  <div className="bg-black/50 p-4 rounded-lg border border-white/[0.06] space-y-2 font-mono text-sm text-zinc-300">
                    <div>npm install -D tailwindcss postcss autoprefixer</div>
                    <div>npx tailwindcss init -p</div>
                  </div>
                </Card.Content>
              </Card.Root>

              <Card.Root className="group bg-zinc-900/40 border-white/[0.06] hover:border-white/[0.12] hover:bg-zinc-900/60 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] rounded-xl">
                <Card.Header className="pb-4">
                  <Card.Title className="flex items-center gap-3 text-lg font-semibold"><Box className="text-[#7c3aed] transition-transform duration-300 group-hover:scale-110" size={20} /> 3. Add Utils</Card.Title>
                </Card.Header>
                <Card.Content className="space-y-4">
                  <p className="text-sm text-zinc-400/90 leading-relaxed">You need a utility file for class merging.</p>
                  <div className="bg-black/50 p-4 rounded-lg border border-white/[0.06] font-mono text-sm text-zinc-300">
                    npm install clsx tailwind-merge lucide-react
                  </div>
                </Card.Content>
              </Card.Root>

              <Card.Root className="group bg-zinc-900/40 border-white/[0.06] hover:border-white/[0.12] hover:bg-zinc-900/60 transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] rounded-xl">
                <Card.Header className="pb-4">
                  <Card.Title className="flex items-center gap-3 text-lg font-semibold"><Copy className="text-[#7c3aed] transition-transform duration-300 group-hover:scale-110" size={20} /> 4. Copy Code</Card.Title>
                </Card.Header>
                <Card.Content className="space-y-4">
                  <p className="text-sm text-zinc-400/90 leading-relaxed">Navigate to the component you want, click the <strong>Source Code</strong> tab, and copy it into your project.</p>
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm flex items-center gap-2 font-medium">
                    <Check size={16} /> Ready for production
                  </div>
                </Card.Content>
              </Card.Root>
            </div>
          </div>
        </div>
      );
    }

    const component = componentRegistry.find(c => c.id === activeRoute);
    if (component) {
      return <ComponentDoc key={component.id} entry={component} />;
    }

    return <div>Component not found</div>;
  };

  const filteredCategories = useMemo(() => {
    return categories;
  }, []);

  return (
    <div className="h-screen font-sans selection:bg-[#7c3aed]/30 selection:text-white bg-zinc-950 text-white overflow-hidden flex flex-col">

      <header className="flex-none w-full border-b border-white/[0.06] bg-zinc-950/90 backdrop-blur-xl z-50 shadow-[0_1px_0_0_rgba(255,255,255,0.02)]">
        <div className="w-full h-16 px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActiveRoute('introduction')}>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img src="/brand/logo/logo.png" alt="Zentrix Orbit Logo" className="relative w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(124,58,237,0.6)] animate-pulse-glow" />
            </div>
            <span className="font-bold tracking-tight text-xl hidden sm:inline-block">ZENTRIX <span className="text-[#7c3aed]">ORBIT</span></span>
          </div>

          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-500"></div>
              <div className="relative flex items-center">
                <Search className="absolute left-3 h-4 w-4 text-zinc-500 transition-colors group-focus-within:text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full h-10 rounded-lg bg-zinc-900/50 border border-white/[0.08] pl-10 pr-16 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:bg-zinc-900/70 focus:border-white/[0.12] transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-3 flex items-center gap-1">
                  <span className="text-[10px] bg-white/[0.08] px-2 py-1 rounded text-zinc-400 border border-white/[0.06] font-medium">⌘K</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu />
            </Button>
            <div className="hidden md:flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <div className="h-4 w-[1px] bg-white/10"></div>
              <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">v2.0</a>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">

        <aside className={`fixed inset-y-0 left-0 z-40 w-72 shrink-0 transform bg-zinc-950 border-r border-white/[0.06] transition-transform duration-300 md:translate-x-0 md:static md:h-full ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-zinc-700`}>
          <div className="h-full overflow-y-auto">
            <div className="px-4 py-2 space-y-8 pt-8 pb-10 md:pt-6 md:pb-6">

              <div className="space-y-1">
                <h4 className="font-semibold px-4 py-2 text-[10px] uppercase tracking-[0.1em] text-zinc-500">
                  Getting Started
                </h4>
                <button
                  onClick={() => { setActiveRoute('introduction'); setMobileMenuOpen(false); }}
                  className={`group relative flex items-center gap-3 w-full text-left pl-6 pr-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${activeRoute === 'introduction' ? 'bg-[#7c3aed]/10 text-[#7c3aed] font-medium shadow-[inset_3px_0_0_0_rgba(124,58,237,1)] shadow-[0_0_15px_rgba(124,58,237,0.15)]' : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'}`}
                >
                  <Layout size={16} className={activeRoute === 'introduction' ? 'text-[#7c3aed]' : 'text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200'} />
                  <span className="relative">
                    Introduction
                    <span className={`absolute -bottom-0.5 left-0 h-[1px] bg-white transition-all duration-200 ${activeRoute === 'introduction' ? 'w-0' : 'w-0 group-hover:w-full'}`} />
                  </span>
                </button>
              </div>

              {filteredCategories.map(category => {
                const items = componentRegistry.filter(c => c.category === category);
                const visibleItems = searchQuery
                  ? items.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  : items;

                if (visibleItems.length === 0) return null;

                return (
                  <div key={category} className="space-y-1">
                    <h4 className="font-semibold px-4 py-2 text-[10px] uppercase tracking-[0.1em] text-zinc-500">{category}</h4>
                    <ul className="space-y-0.5">
                      {visibleItems.map(item => (
                        <li key={item.id}>
                          <button
                            onClick={() => { setActiveRoute(item.id); setMobileMenuOpen(false); }}
                            className={`group relative block w-full text-left pl-6 pr-3 py-2 rounded-lg text-sm transition-all duration-200 ${activeRoute === item.id ? 'bg-white/[0.08] text-white font-medium shadow-[inset_3px_0_0_0_rgba(124,58,237,1)] shadow-[0_0_15px_rgba(124,58,237,0.15)]' : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'}`}
                          >
                            <span className="relative">
                              {item.name}
                              <span className={`absolute -bottom-0.5 left-0 h-[1px] bg-white transition-all duration-200 ${activeRoute === item.id ? 'w-0' : 'w-0 group-hover:w-full'}`} />
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        <main className="flex-1 min-w-0 overflow-y-auto relative scroll-smooth bg-zinc-950">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 min-h-screen">
            {renderContent()}
          </div>
          <Footer />
        </main>

      </div>
    </div>
  );
};

export default App;
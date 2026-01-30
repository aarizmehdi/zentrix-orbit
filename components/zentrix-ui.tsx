import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as ToastPrimitive from "@radix-ui/react-toast";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { Command as CommandPrimitive } from "cmdk";
import { X, ChevronDown, Check, ChevronRight, Search, Circle, Star, ArrowLeft, ArrowRight, Loader2, MoreHorizontal } from "lucide-react";
import { cn } from "../lib/utils";

/* -------------------------------------------------------------------------- */
/*                                   BUTTON                                   */
/* -------------------------------------------------------------------------- */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost" | "neon" | "destructive" | "secondary" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  loading?: boolean;
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, loading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          {
            "bg-white text-black hover:bg-white/90 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.4)]": variant === "default",
            "bg-zinc-800 text-white hover:bg-zinc-800/80 shadow-md": variant === "secondary",
            "bg-red-900 text-white hover:bg-red-900/90 shadow-md": variant === "destructive",
            "border border-white/10 bg-transparent hover:bg-white/5 text-white": variant === "outline",
            "hover:bg-white/10 text-white": variant === "ghost",
            "text-primary underline-offset-4 hover:underline": variant === "link",
            "bg-[#7c3aed] text-white hover:bg-[#6d28d9] shadow-[0_0_20px_-5px_rgba(124,58,237,0.6)] hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.8)] border border-[#7c3aed]/20": variant === "neon",
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
    );
  }
);
Button.displayName = "Button";

/* -------------------------------------------------------------------------- */
/*                                    CARD                                    */
/* -------------------------------------------------------------------------- */
const CardRoot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-xl border border-white/10 bg-zinc-950 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-sm", className)} {...props} />
));
CardRoot.displayName = "Card.Root";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
));
CardHeader.displayName = "Card.Header";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight text-white", className)} {...props} />
));
CardTitle.displayName = "Card.Title";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-zinc-400", className)} {...props} />
));
CardDescription.displayName = "Card.Description";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "Card.Content";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
));
CardFooter.displayName = "Card.Footer";

export const Card = { Root: CardRoot, Header: CardHeader, Title: CardTitle, Description: CardDescription, Content: CardContent, Footer: CardFooter };

/* -------------------------------------------------------------------------- */
/*                                    INPUT                                   */
/* -------------------------------------------------------------------------- */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, label, error, ...props }, ref) => {
  return (
    <div className="grid gap-2">
      {label && <LabelPrimitive.Root className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-300">{label}</LabelPrimitive.Root>}
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-white/10 bg-zinc-900/50 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]/50 focus-visible:border-[#7c3aed]/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-white/20 shadow-sm",
          error && "border-red-500/50 focus-visible:ring-red-500/50",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
})
Input.displayName = "Input"

/* -------------------------------------------------------------------------- */
/*                                   LABEL                                    */
/* -------------------------------------------------------------------------- */
export const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-300", className)} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

/* -------------------------------------------------------------------------- */
/*                                  CHECKBOX                                  */
/* -------------------------------------------------------------------------- */
export const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={cn("peer h-4 w-4 shrink-0 rounded-sm border border-white/20 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#7c3aed] data-[state=checked]:text-white data-[state=checked]:border-[#7c3aed] transition-all duration-200 shadow-sm", className)} {...props}>
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}><Check className="h-3 w-3" /></CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

/* -------------------------------------------------------------------------- */
/*                                   SWITCH                                   */
/* -------------------------------------------------------------------------- */
export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root className={cn("peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#7c3aed] data-[state=unchecked]:bg-zinc-700 shadow-inner", className)} {...props} ref={ref}>
    <SwitchPrimitive.Thumb className={cn("pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")} />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

/* -------------------------------------------------------------------------- */
/*                                   BADGE                                    */
/* -------------------------------------------------------------------------- */
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "neon";
  className?: string;
  children?: React.ReactNode;
}
export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-white text-black hover:bg-white/80 shadow-sm": variant === "default",
          "border-transparent bg-zinc-800 text-zinc-50 hover:bg-zinc-800/80 shadow-sm": variant === "secondary",
          "border-transparent bg-red-900/50 text-red-200 hover:bg-red-900/70 border-red-900": variant === "destructive",
          "text-zinc-300 border-white/10": variant === "outline",
          "border-transparent bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20 shadow-[0_0_10px_-3px_rgba(124,58,237,0.4)]": variant === "neon",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 SEPARATOR                                  */
/* -------------------------------------------------------------------------- */
export const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>>(({ className, orientation = "horizontal", ...props }, ref) => (
  <SeparatorPrimitive.Root ref={ref} decorative orientation={orientation} className={cn("shrink-0 bg-white/10", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)} {...props} />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

/* -------------------------------------------------------------------------- */
/*                                   SLIDER                                   */
/* -------------------------------------------------------------------------- */
export const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root ref={ref} className={cn("relative flex w-full touch-none select-none items-center", className)} {...props}>
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-zinc-800 shadow-inner"><SliderPrimitive.Range className="absolute h-full bg-[#7c3aed]" /></SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-[#7c3aed] bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-md hover:scale-110 duration-200" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

/* -------------------------------------------------------------------------- */
/*                                  TEXTAREA                                  */
/* -------------------------------------------------------------------------- */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { label?: string; }
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, label, ...props }, ref) => {
  return (
    <div className="grid gap-2">
      {label && <LabelPrimitive.Root className="text-sm font-medium leading-none text-zinc-300">{label}</LabelPrimitive.Root>}
      <textarea className={cn("flex min-h-[80px] w-full rounded-md border border-white/10 bg-zinc-900/50 px-3 py-2 text-sm ring-offset-background placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]/50 focus-visible:border-[#7c3aed]/50 disabled:cursor-not-allowed disabled:opacity-50 text-white shadow-sm transition-all duration-200 hover:border-white/20", className)} ref={ref} {...props} />
    </div>
  )
})
Textarea.displayName = "Textarea"

/* -------------------------------------------------------------------------- */
/*                                   DIALOG                                   */
/* -------------------------------------------------------------------------- */
const DialogRoot = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close
const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)} {...props} />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content ref={ref} className={cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-zinc-950 p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-xl md:w-full", className)} {...props}>
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName
const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
)
DialogHeader.displayName = "DialogHeader"
const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
)
DialogFooter.displayName = "DialogFooter"
const DialogTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight text-white", className)} {...props} />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName
const DialogDescription = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-zinc-400", className)} {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export const Modal = { Root: DialogRoot, Trigger: DialogTrigger, Content: DialogContent, Header: DialogHeader, Footer: DialogFooter, Title: DialogTitle, Description: DialogDescription, Close: DialogClose };
export const Dialog = Modal;

/* -------------------------------------------------------------------------- */
/*                                ALERT DIALOG                                */
/* -------------------------------------------------------------------------- */
const AlertDialog = {
  Root: DialogPrimitive.Root,
  Trigger: DialogPrimitive.Trigger,
  Content: React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ className, children, ...props }, ref) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
      <DialogPrimitive.Content ref={ref} className={cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-zinc-950 p-6 shadow-2xl duration-200 sm:rounded-xl text-white", className)} {...props}>
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
export { AlertDialog }

/* -------------------------------------------------------------------------- */
/*                                    SHEET                                   */
/* -------------------------------------------------------------------------- */
const SheetRoot = DialogPrimitive.Root
const SheetTrigger = DialogPrimitive.Trigger
const SheetClose = DialogPrimitive.Close
const SheetPortal = DialogPrimitive.Portal
const SheetOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay className={cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 backdrop-blur-sm", className)} {...props} ref={ref} />
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
    <DialogPrimitive.Content ref={ref} className={cn("fixed z-50 gap-4 bg-zinc-950 p-6 shadow-2xl transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out duration-300", sheetVariants[side], className)} {...props}>
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

export const Sheet = { Root: SheetRoot, Trigger: SheetTrigger, Close: SheetClose, Content: SheetContent, Header: SheetHeader, Footer: SheetFooter, Title: SheetTitle, Description: SheetDescription }

/* -------------------------------------------------------------------------- */
/*                                  POPOVER                                   */
/* -------------------------------------------------------------------------- */
const PopoverRoot = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverContent = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>, React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content ref={ref} align={align} sideOffset={sideOffset} className={cn("z-50 w-72 rounded-lg border border-white/10 bg-zinc-950 p-4 text-popover-foreground shadow-xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className)} {...props} />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName
export const Popover = { Root: PopoverRoot, Trigger: PopoverTrigger, Content: PopoverContent }

/* -------------------------------------------------------------------------- */
/*                                   OTHERS                                   */
/* -------------------------------------------------------------------------- */
export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("animate-pulse rounded-md bg-zinc-800", className)} {...props} />
)

export const Alert = {
  Root: React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "destructive" }>(({ className, variant, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn("relative w-full rounded-lg border border-white/10 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground bg-zinc-900/30", variant === "destructive" && "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive", className)} {...props} />
  )),
  Title: React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
  )),
  Description: React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  ))
}

export const Callout = {
  Root: React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "warning" | "error" | "info" }>(({ className, variant = "default", ...props }, ref) => (
    <div ref={ref} className={cn("rounded-md border p-4 shadow-sm", { "border-white/10 bg-zinc-900/50": variant === "default", "border-yellow-900/50 bg-yellow-900/20 text-yellow-200": variant === "warning", "border-red-900/50 bg-red-900/20 text-red-200": variant === "error", "border-blue-900/50 bg-blue-900/20 text-blue-200": variant === "info" }, className)} {...props} />
  )),
  Icon: React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mb-2 mr-3 inline-block h-5 w-5 align-top", className)} {...props} />
  )),
  Text: React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("inline-block text-sm", className)} {...props} />
  ))
}

export const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root ref={ref} className={cn("relative h-4 w-full overflow-hidden rounded-full bg-zinc-800 shadow-inner", className)} {...props}><ProgressPrimitive.Indicator className="h-full w-full flex-1 bg-[#7c3aed] transition-all" style={{ transform: `translateX(-${100 - (value || 0)}%)` }} /></ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export const Toast = {
  Provider: ToastPrimitive.Provider,
  Viewport: React.forwardRef<React.ElementRef<typeof ToastPrimitive.Viewport>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>>(({ className, ...props }, ref) => (
    <ToastPrimitive.Viewport ref={ref} className={cn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className)} {...props} />
  )),
  Root: React.forwardRef<React.ElementRef<typeof ToastPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>>(({ className, ...props }, ref) => (
    <ToastPrimitive.Root ref={ref} className={cn("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-white/10 p-6 pr-8 shadow-2xl transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full bg-zinc-950 text-white", className)} {...props} />
  )),
  Action: React.forwardRef<React.ElementRef<typeof ToastPrimitive.Action>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>>(({ className, ...props }, ref) => (
    <ToastPrimitive.Action ref={ref} className={cn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className)} {...props} />
  )),
  Close: React.forwardRef<React.ElementRef<typeof ToastPrimitive.Close>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>>(({ className, ...props }, ref) => (
    <ToastPrimitive.Close ref={ref} className={cn("absolute right-2 top-2 rounded-md p-1 text-white/50 opacity-0 transition-opacity hover:text-white focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100", className)} toast-close="" {...props}><X className="h-4 w-4" /></ToastPrimitive.Close>
  )),
  Title: React.forwardRef<React.ElementRef<typeof ToastPrimitive.Title>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>>(({ className, ...props }, ref) => (
    <ToastPrimitive.Title ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
  )),
  Description: React.forwardRef<React.ElementRef<typeof ToastPrimitive.Description>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>>(({ className, ...props }, ref) => (
    <ToastPrimitive.Description ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
  ))
}

/* -------------------------------------------------------------------------- */
/*                                 RE-EXPORTS                                 */
/* -------------------------------------------------------------------------- */
export const RadioGroup = {
  Root: React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>>(({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />
  )),
  Item: React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>>(({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Item ref={ref} className={cn("aspect-square h-4 w-4 rounded-full border border-white/20 text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm", className)} {...props}>
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center"><Circle className="h-2.5 w-2.5 fill-[#7c3aed] text-[#7c3aed]" /></RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  ))
}

export const Rating = React.forwardRef<HTMLDivElement, { max?: number, value?: number, onValueChange?: (value: number) => void, readOnly?: boolean }>(({ max = 5, value = 0, onValueChange, readOnly = false }, ref) => {
  return (
    <div ref={ref} className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Star key={i} className={cn("h-5 w-5 transition-all drop-shadow-sm", i < value ? "fill-yellow-400 text-yellow-400" : "text-zinc-600", !readOnly && "cursor-pointer hover:scale-110")} onClick={() => !readOnly && onValueChange?.(i + 1)} />
      ))}
    </div>
  )
})

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
    <div ref={ref} className={cn("p-3 w-fit border border-white/10 rounded-xl bg-zinc-950 shadow-2xl", className)} {...props}>
      <div className="flex justify-between items-center mb-4">
        <Button onClick={prevMonth} variant="ghost" size="icon" className="h-7 w-7"><ArrowLeft className="h-4 w-4" /></Button>
        <div className="font-semibold text-sm w-32 text-center">{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
        <Button onClick={nextMonth} variant="ghost" size="icon" className="h-7 w-7"><ArrowRight className="h-4 w-4" /></Button>
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
                    <Button variant="ghost" className={cn("h-9 w-9 p-0 font-normal aria-selected:opacity-100", day === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear() && "bg-[#7c3aed] text-white hover:bg-[#7c3aed] hover:text-white focus:bg-[#7c3aed] focus:text-white shadow-md")}>
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
})

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
})

export const Command = {
  Root: React.forwardRef<React.ElementRef<typeof CommandPrimitive>, React.ComponentPropsWithoutRef<typeof CommandPrimitive>>(({ className, ...props }, ref) => (
    <CommandPrimitive ref={ref} className={cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-zinc-950 text-popover-foreground", className)} {...props} />
  )),
  Dialog: ({ children, ...props }: React.ComponentProps<typeof DialogRoot>) => (
    <DialogRoot {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-2xl"><Command.Root className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">{children}</Command.Root></DialogContent>
    </DialogRoot>
  ),
  Input: React.forwardRef<React.ElementRef<typeof CommandPrimitive.Input>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>>(({ className, ...props }, ref) => (
    <div className="flex items-center border-b border-white/10 px-3" cmdk-input-wrapper="">
      <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input ref={ref} className={cn("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className)} {...props} />
    </div>
  )),
  List: React.forwardRef<React.ElementRef<typeof CommandPrimitive.List>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>>(({ className, ...props }, ref) => (
    <CommandPrimitive.List ref={ref} className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)} {...props} />
  )),
  Empty: React.forwardRef<React.ElementRef<typeof CommandPrimitive.Empty>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>>((props, ref) => (
    <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />
  )),
  Group: React.forwardRef<React.ElementRef<typeof CommandPrimitive.Group>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>>(({ className, ...props }, ref) => (
    <CommandPrimitive.Group ref={ref} className={cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className)} {...props} />
  )),
  Item: React.forwardRef<React.ElementRef<typeof CommandPrimitive.Item>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>>(({ className, ...props }, ref) => (
    <CommandPrimitive.Item ref={ref} className={cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-zinc-800 aria-selected:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors", className)} {...props} />
  )),
  Separator: React.forwardRef<React.ElementRef<typeof CommandPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>>(({ className, ...props }, ref) => (
    <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-white/10", className)} {...props} />
  )),
  Shortcut: ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
    <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />
  )
}

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
    <Button ref={ref} variant={variant} size={size} className={cn("absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full shadow-lg bg-black/50 border-transparent hover:bg-black/70 backdrop-blur-sm", className)} {...props}><ArrowLeft className="h-4 w-4" /><span className="sr-only">Previous slide</span></Button>
  )),
  Next: React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "outline", size = "icon", ...props }, ref) => (
    <Button ref={ref} variant={variant} size={size} className={cn("absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full shadow-lg bg-black/50 border-transparent hover:bg-black/70 backdrop-blur-sm", className)} {...props}><ArrowRight className="h-4 w-4" /><span className="sr-only">Next slide</span></Button>
  ))
}

export const Drawer = {
  Root: DialogPrimitive.Root,
  Trigger: DialogPrimitive.Trigger,
  Content: React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ className, children, ...props }, ref) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogPrimitive.Content ref={ref} className={cn("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-white/10 bg-zinc-950 p-6 text-white shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", className)} {...props}>
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-zinc-800" />
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

export const Accordion = {
  Root: AccordionPrimitive.Root,
  Item: React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item ref={ref} className={cn("border-b border-white/10", className)} {...props} />
  )),
  Trigger: React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex"><AccordionPrimitive.Trigger ref={ref} className={cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-white [&[data-state=open]>svg]:rotate-180 text-zinc-400", className)} {...props}>{children}<ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" /></AccordionPrimitive.Trigger></AccordionPrimitive.Header>
  )),
  Content: React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content ref={ref} className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...props}><div className={cn("pb-4 pt-0 text-zinc-400", className)}>{children}</div></AccordionPrimitive.Content>
  ))
}

export const Tabs = {
  Root: TabsPrimitive.Root,
  List: React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(({ className, ...props }, ref) => (
    <TabsPrimitive.List ref={ref} className={cn("inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 p-1 text-zinc-400 border border-white/5", className)} {...props} />
  )),
  Trigger: React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger ref={ref} className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-zinc-800 data-[state=active]:text-white data-[state=active]:shadow-sm", className)} {...props} />
  )),
  Content: React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(({ className, ...props }, ref) => (
    <TabsPrimitive.Content ref={ref} className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)} {...props} />
  ))
}

export const Avatar = {
  Root: React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Root ref={ref} className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-sm border border-white/5", className)} {...props} />
  )),
  Image: React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
  )),
  Fallback: React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback ref={ref} className={cn("flex h-full w-full items-center justify-center rounded-full bg-zinc-800 text-zinc-400", className)} {...props} />
  ))
}

export const Select = {
  Root: SelectPrimitive.Root,
  Group: SelectPrimitive.Group,
  Value: SelectPrimitive.Value,
  Trigger: React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger ref={ref} className={cn("flex h-10 w-full items-center justify-between rounded-md border border-white/10 bg-zinc-900/50 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/50 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm transition-all duration-200 hover:border-white/20", className)} {...props}>
      {children}<SelectPrimitive.Icon asChild><ChevronDown className="h-4 w-4 opacity-50" /></SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )),
  Content: React.forwardRef<React.ElementRef<typeof SelectPrimitive.Content>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>>(({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content ref={ref} className={cn("relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-white/10 bg-zinc-950 text-white shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className)} position={position} {...props}>
        <SelectPrimitive.Viewport className={cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")}>{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )),
  Label: React.forwardRef<React.ElementRef<typeof SelectPrimitive.Label>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>>(({ className, ...props }, ref) => (
    <SelectPrimitive.Label ref={ref} className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
  )),
  Item: React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item ref={ref} className={cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-zinc-800 focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)} {...props}>
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"><SelectPrimitive.ItemIndicator><Check className="h-4 w-4 text-[#7c3aed]" /></SelectPrimitive.ItemIndicator></span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  ))
}

export const DropdownMenu = {
  Root: DropdownMenuPrimitive.Root,
  Trigger: DropdownMenuPrimitive.Trigger,
  Content: React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>>(({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content ref={ref} sideOffset={sideOffset} className={cn("z-50 min-w-[8rem] overflow-hidden rounded-md border border-white/10 bg-zinc-950 p-1 text-white shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out", className)} {...props} />
    </DropdownMenuPrimitive.Portal>
  )),
  Item: React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Item>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }>(({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Item ref={ref} className={cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-zinc-800 focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className)} {...props} />
  )),
  Label: React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Label>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }>(({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Label ref={ref} className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)} {...props} />
  )),
  Separator: React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-white/10", className)} {...props} />
  ))
}

export const Tooltip = {
  Provider: TooltipPrimitive.Provider,
  Root: TooltipPrimitive.Root,
  Trigger: TooltipPrimitive.Trigger,
  Content: React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>>(({ className, sideOffset = 4, ...props }, ref) => (
    <TooltipPrimitive.Content ref={ref} sideOffset={sideOffset} className={cn("z-50 overflow-hidden rounded-md border border-white/10 bg-zinc-950 px-3 py-1.5 text-sm text-white shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", className)} {...props} />
  ))
}

export const HoverCard = {
  Root: HoverCardPrimitive.Root,
  Trigger: HoverCardPrimitive.Trigger,
  Content: React.forwardRef<React.ElementRef<typeof HoverCardPrimitive.Content>, React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
    <HoverCardPrimitive.Content ref={ref} align={align} sideOffset={sideOffset} className={cn("z-50 w-64 rounded-md border border-white/10 bg-zinc-950 p-4 text-popover-foreground shadow-xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className)} {...props} />
  ))
}

export const Menubar = {
  Root: React.forwardRef<React.ElementRef<typeof MenubarPrimitive.Root>, React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Root ref={ref} className={cn("flex h-10 items-center space-x-1 rounded-md border border-white/10 bg-zinc-950 p-1 shadow-sm", className)} {...props} />
  )),
  Menu: MenubarPrimitive.Menu,
  Trigger: React.forwardRef<React.ElementRef<typeof MenubarPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Trigger ref={ref} className={cn("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-zinc-800 focus:text-white data-[state=open]:bg-zinc-800 data-[state=open]:text-white", className)} {...props} />
  )),
  Content: React.forwardRef<React.ElementRef<typeof MenubarPrimitive.Content>, React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content ref={ref} align={align} alignOffset={alignOffset} sideOffset={sideOffset} className={cn("z-50 min-w-[12rem] overflow-hidden rounded-md border border-white/10 bg-zinc-950 p-1 text-popover-foreground shadow-xl data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)} {...props} />
    </MenubarPrimitive.Portal>
  )),
  Item: React.forwardRef<React.ElementRef<typeof MenubarPrimitive.Item>, React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & { inset?: boolean }>(({ className, inset, ...props }, ref) => (
    <MenubarPrimitive.Item ref={ref} className={cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-zinc-800 focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className)} {...props} />
  )),
  Separator: React.forwardRef<React.ElementRef<typeof MenubarPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-white/10", className)} {...props} />
  ))
}

export const NavigationMenu = {
  Root: React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Root>, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root ref={ref} className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)} {...props}>{children}<NavigationMenu.Viewport /></NavigationMenuPrimitive.Root>
  )),
  List: React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.List>, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List ref={ref} className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)} {...props} />
  )),
  Item: NavigationMenuPrimitive.Item,
  Trigger: React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger ref={ref} className={cn("group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-800 hover:text-white focus:bg-zinc-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-zinc-800/50 data-[state=open]:bg-zinc-800/50", className)} {...props}>{children}<ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" /></NavigationMenuPrimitive.Trigger>
  )),
  Content: React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Content>, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content ref={ref} className={cn("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto bg-zinc-950 p-4 rounded-md border border-white/10 shadow-2xl", className)} {...props} />
  )),
  Link: NavigationMenuPrimitive.Link,
  Viewport: React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Viewport>, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>>(({ className, ...props }, ref) => (
    <div className={cn("absolute left-0 top-full flex justify-center")}><NavigationMenuPrimitive.Viewport className={cn("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-white/10 bg-zinc-950 text-popover-foreground shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className)} ref={ref} {...props} /></div>
  ))
}

export const Toggle = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & { size?: "default" | "sm" | "lg" }>(({ className, size = "default", ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-500 ease-out",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
      "disabled:pointer-events-none disabled:opacity-40",
      // Inactive state
      "bg-zinc-800/40 text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-300",
      // Active state - Yellow to Green gradient with glow
      "data-[state=on]:bg-gradient-to-br data-[state=on]:from-yellow-400 data-[state=on]:via-lime-400 data-[state=on]:to-green-500",
      "data-[state=on]:text-zinc-950 data-[state=on]:font-bold",
      "data-[state=on]:shadow-[0_0_25px_rgba(234,179,8,0.4),0_0_50px_rgba(132,204,22,0.2)]",
      "hover:scale-[1.05] active:scale-95",
      "data-[state=on]:hover:shadow-[0_0_30px_rgba(234,179,8,0.6),0_0_60px_rgba(132,204,22,0.3)]",
      {
        "h-10 px-5": size === "default",
        "h-9 px-4 text-xs": size === "sm",
        "h-12 px-6 text-base": size === "lg",
      },
      className
    )}
    {...props}
  />
))
Toggle.displayName = TogglePrimitive.Root.displayName

export const ToggleGroup = {
  Root: React.forwardRef<React.ElementRef<typeof ToggleGroupPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & { variant?: "default" | "outline", size?: "default" | "sm" | "lg" }>(({ className, variant, size, children, ...props }, ref) => (
    <ToggleGroupPrimitive.Root ref={ref} className={cn("flex items-center justify-center gap-1", className)} {...props}>{children}</ToggleGroupPrimitive.Root>
  )),
  Item: React.forwardRef<React.ElementRef<typeof ToggleGroupPrimitive.Item>, React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & { variant?: "default" | "outline", size?: "default" | "sm" | "lg" }>(({ className, children, variant = "default", size = "default", ...props }, ref) => {
    return (
      <ToggleGroupPrimitive.Item ref={ref} className={cn("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-zinc-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-zinc-800 data-[state=on]:text-white", { "bg-transparent": variant === "default", "border border-white/10 bg-transparent hover:bg-zinc-800 hover:text-white": variant === "outline", "h-10 px-3": size === "default", "h-9 px-2.5": size === "sm", "h-11 px-5": size === "lg" }, className)} {...props}>{children}</ToggleGroupPrimitive.Item>
    )
  })
}

export const ScrollArea = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}><ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport><ScrollBar /></ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName
const ScrollBar = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>, React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar ref={ref} orientation={orientation} className={cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className)} {...props}><ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors" /></ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export const Collapsible = {
  Root: CollapsiblePrimitive.Root,
  Trigger: CollapsiblePrimitive.CollapsibleTrigger,
  Content: CollapsiblePrimitive.CollapsibleContent
}

export const ContextMenu = {
  Root: ContextMenuPrimitive.Root,
  Trigger: ContextMenuPrimitive.Trigger,
  Content: React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.Content>, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>>(({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content ref={ref} className={cn("z-50 min-w-[8rem] overflow-hidden rounded-md border border-white/10 bg-zinc-950 p-1 text-white shadow-xl animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)} {...props} />
    </ContextMenuPrimitive.Portal>
  )),
  Item: React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.Item>, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & { inset?: boolean }>(({ className, inset, ...props }, ref) => (
    <ContextMenuPrimitive.Item ref={ref} className={cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-zinc-800 focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className)} {...props} />
  )),
  Separator: React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>>(({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-white/10", className)} {...props} />
  ))
}

export const AspectRatio = AspectRatioPrimitive.Root

export const Table = {
  Root: React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto"><table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} /></div>
  )),
  Header: React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
    <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
  )),
  Body: React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  )),
  Footer: React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)} {...props} />
  )),
  Row: React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(({ className, ...props }, ref) => (
    <tr ref={ref} className={cn("border-b transition-colors hover:bg-white/5 data-[state=selected]:bg-muted", className)} {...props} />
  )),
  Head: React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => (
    <th ref={ref} className={cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className)} {...props} />
  )),
  Cell: React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => (
    <td ref={ref} className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
  ))
}

export const Breadcrumb = {
  Root: React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<"nav"> & { separator?: React.ReactNode }>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />),
  List: React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(({ className, ...props }, ref) => (
    <ol ref={ref} className={cn("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", className)} {...props} />
  )),
  Item: React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  )),
  Link: React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<"a"> & { asChild?: boolean }>(({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a"
    return <Comp ref={ref} className={cn("transition-colors hover:text-foreground", className)} {...props} />
  }),
  Page: React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(({ className, ...props }, ref) => (
    <span ref={ref} role="link" aria-disabled="true" aria-current="page" className={cn("font-normal text-foreground", className)} {...props} />
  )),
  Separator: ({ children, className, ...props }: React.ComponentProps<"li">) => (
    <li role="presentation" aria-hidden="true" className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)} {...props}>
      {children ?? <ChevronRight />}
    </li>
  ),
  Ellipsis: ({ className, ...props }: React.ComponentProps<"span">) => (
    <span role="presentation" aria-hidden="true" className={cn("flex h-9 w-9 items-center justify-center", className)} {...props}>
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More</span>
    </span>
  )
}
export const BreadcrumbComp = Breadcrumb;
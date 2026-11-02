import type { ComponentProps, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/cn"

const buttonVariants = cva(
    // Base styles
    "group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none",

    {
        variants: {
            variant: {
                primary: "bg-brand-600 text-white hover:bg-brand-700 data-[pressed=true]:bg-brand-800",
                secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 data-[pressed=true]:bg-slate-300",
                outline: "border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-50 data-[pressed=true]:bg-slate-100",
                link: "text-brand-600 underline-offset-4 hover:underline",
            },

            size: {
                xs: "h-6 px-2 text-xs",
                sm: "h-8 px-3 text-sm",
                md: "h-10 px-4 text-sm",
                lg: "h-12 px-6 text-base",
                xl: "h-14 px-8 text-lg",
            },

            radius: {
                none: "rounded-none",
                sm: "rounded-sm",
                md: "rounded-lg",
                lg: "rounded-xl",
                full: "rounded-full",
            },

            fullWidth: {
                true: "w-full",
                false: "w-auto",
            },

            animation: {
                none: "",
                subtle: "hover:brightness-110 active:brightness-95",
                scale: "hover:scale-[1.03] active:scale-[0.97]",
                lift: "hover:-translate-y-0.5 hover:shadow-md active:translate-y-0",
                iconSlide: "",
                iconRotate: "",
            },

            iconOnly: {
                true: "aspect-square !px-0",
                false: "",
            },
        },

        defaultVariants: {
            variant: "primary",
            size: "md",
            radius: "md",
            animation: "subtle",
            iconOnly: false,
        },
    }
)

type ButtonProps = ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        startIcon?: ReactNode
        endIcon?: ReactNode
        loading?: boolean
        loadingText?: string
        pressed?: boolean
    }

export function Button({
    className,
    variant,
    size,
    radius,
    fullWidth,
    animation,
    iconOnly,
    startIcon,
    endIcon,
    loading = false,
    loadingText,
    pressed,
    disabled,
    type = "button",
    children,
    ...props
}: ButtonProps) {

    const isDisabled = disabled || loading

    return (
        <button
            type={type}
            disabled={isDisabled}
            aria-busy={loading || undefined}
            aria-pressed={pressed}
            data-pressed={pressed}
            className={cn(
                buttonVariants({
                    variant,
                    size,
                    radius,
                    fullWidth,
                    animation,
                    iconOnly,
                }),
                className
            )}
            {...props}
        >
            {/* Loading spinner */}
            {loading ? (
                <span
                    className="size-4 shrink-0 animate-spin rounded-full border-2 border-current border-r-transparent motion-reduce:animate-none"
                    role="status"
                    aria-label="Loading"
                />
            ) : (
                <>
                    {/* Start icon */}
                    {startIcon && (
                        <span className="inline-flex shrink-0 items-center">
                            {startIcon}
                        </span>
                    )}

                    {/* Button label */}
                    {!iconOnly && (
                        <span>
                            {loadingText && loading
                                ? loadingText
                                : children}
                        </span>
                    )}

                    {/* End icon */}
                    {endIcon && (
                        <span
                            className={cn(
                                "inline-flex shrink-0 items-center",
                                animation === "iconSlide" &&
                                "transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
                                animation === "iconRotate" &&
                                "transition-transform group-hover:rotate-12 motion-reduce:transform-none"
                            )}
                        >
                            {endIcon}
                        </span>
                    )}
                </>
            )}
        </button>
    )
}

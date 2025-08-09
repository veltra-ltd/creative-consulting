"use client";

import React, {
  useRef,
  useEffect,
  forwardRef,
  type ButtonHTMLAttributes,
} from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils/cn";
import { gsap } from "gsap";
import { cva, type VariantProps } from "class-variance-authority";

// Custom button design system
const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all duration-300",
  {
    variants: {
      variant: {
        primaryLink:
          "bg-[#1c1c1d] text-white border border-[#1c1c1d] hover:bg-transparent hover:border-primary hover:text-primary rounded-[4px] px-5 py-2.5 w-fit ",
        secondaryLink:
          "bg-transparent hover:text-white border hover:bg-primary hover:border-primary px-4 py-2.5 lg:px-3.5 lg:py-2 xl:px-6 xl:py-3.5 shadow-sm rounded-full text-primary/90 border-primary/90",
        primary: "bg-primary text-white hover:bg-primary",
        secondary:
          "border border-[#1c1c1d] text-[#1c1c1d] hover:bg-[#1c1c1d] hover:text-white",
        outline:
          "bg-transparent border border-current text-[#1c1c1d] hover:bg-[#1c1c1d] hover:text-white hover:border-[#1c1c1d]",
      },
      size: {
        default: "px-4 py-2.5 rounded-[4px]",
        sm: "px-3 py-2 rounded-[4px] text-sm",
        lg: "px-6 py-3 rounded-[4px] text-lg",
        xl: "px-8 py-4 rounded-[4px] text-xl",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      href,
      children,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
      }
    }, []);

    const handleMouseEnter = () => {
      if (buttonRef.current) {
        gsap.to(buttonRef.current, { scale: 1.05, duration: 0.2 });
      }
    };

    const handleMouseLeave = () => {
      if (buttonRef.current) {
        gsap.to(buttonRef.current, { scale: 1, duration: 0.2 });
      }
    };

    // Decide which element to render
    const isLinkVariant =
      variant === "primaryLink" || variant === "secondaryLink";

    const Comp: React.ElementType =
      isLinkVariant && href ? Link : asChild ? Slot : "button";

    return (
      <Comp
        ref={(node: HTMLButtonElement | null) => {
          if (!asChild && ref && typeof ref !== "function") {
            (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
              node;
          }
          buttonRef.current = node;
        }}
        {...(isLinkVariant && href ? { href } : {})}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

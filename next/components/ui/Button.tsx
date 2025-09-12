import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
};

export function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md h-10 px-4 text-sm font-semibold transition-colors active:translate-y-[1px]";
  const variants: Record<string, string> = {
    primary: "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] text-[var(--color-on-primary)] shadow-[var(--shadow-elev-1)]",
    secondary: "bg-white text-[#111] border border-[var(--color-border)] hover:bg-white/95",
    ghost: "bg-transparent text-white/90 hover:bg-white/10",
  };
  const width = fullWidth ? "w-full" : "";
  return (
    <button className={`${base} ${variants[variant]} ${width} ${className}`} {...rest}>
      {children}
    </button>
  );
}



import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  requiredMark?: boolean;
};

export function TextField({ label, hint, requiredMark, className = "", ...rest }: Props) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block mb-2 text-[14px] font-semibold">
          {label} {requiredMark && <span className="text-[#ff4d4f]">*</span>}
        </label>
      )}
      <input
        className="w-full h-11 rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 outline-none focus:border-[var(--color-primary)] bg-white text-[#111] placeholder:text-[#8b8b8b]"
        {...rest}
      />
      {hint && <p className="mt-2 text-[12px] text-black/60">{hint}</p>}
    </div>
  );
}



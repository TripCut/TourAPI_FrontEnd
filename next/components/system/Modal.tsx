"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  backdropClassName?: string;
  contentClassName?: string;
};

export function Modal({ open, onClose, children, backdropClassName = "", contentClassName = "" }: Props) {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted) return null;
  const root = document.getElementById("portal-root");
  if (!root || !open) return null;

  return createPortal(
    <div className={`fixed inset-0 z-[1000] ${backdropClassName || "bg-black/50"}`} onClick={onClose}>
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${contentClassName || "w-[90%] max-w-sm rounded-xl bg-white p-5"}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    root
  );
}



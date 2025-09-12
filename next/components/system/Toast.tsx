"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

type ToastItem = { id: number; message: string };
type ToastContextValue = { show: (message: string, ms?: number) => void };

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);

  const show = useCallback((message: string, ms = 2000) => {
    const id = Date.now();
    setItems((prev) => [...prev, { id, message }]);
    setTimeout(() => setItems((prev) => prev.filter((i) => i.id !== id)), ms);
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[1100] flex justify-center">
        <div className="flex flex-col items-center gap-2">
          {items.map((t) => (
            <div key={t.id} className="rounded-full bg-black/80 text-white px-4 py-2 text-sm shadow-md">
              {t.message}
            </div>
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}



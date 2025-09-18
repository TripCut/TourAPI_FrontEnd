"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Props = {
  header?: React.ReactNode;
  children: React.ReactNode;
  initialSnap?: number; // 0~1 (뷰포트 대비 비율)
  snaps?: number[]; // 예: [0.3, 0.6, 0.9]
  startClosed?: boolean; // 초기 닫힘(피크만 노출)
  closedPeek?: number; // 닫힘 시 보여줄 높이(px)
};

export function BottomSheet({
  header,
  children,
  initialSnap = 0.6,
  snaps = [0.5, 0.6, 0.9],
  startClosed = false,
  closedPeek = 18,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const startH = useRef(0);
  const [height, setHeight] = useState(() =>
    startClosed ? closedPeek : Math.round(window.innerHeight * initialSnap),
  );

  const clampedSnaps = useMemo(() => {
    const pixelSnaps = snaps
      .map((s) => Math.round(window.innerHeight * s))
      .sort((a, b) => a - b);
    return [closedPeek, ...pixelSnaps];
  }, [snaps, closedPeek]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      startY.current = e.clientY;
      startH.current = height;
      (e.target as Element).setPointerCapture(e.pointerId);
    },
    [height],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (startY.current === 0) return;
      e.preventDefault();
      const delta = startY.current - e.clientY; // 위로 드래그 양수
      const next = Math.min(
        window.innerHeight,
        Math.max(closedPeek, startH.current + delta),
      );
      setHeight(next);
    },
    [closedPeek],
  );

  const onPointerUp = useCallback(() => {
    if (startY.current === 0) return;
    const current = height;
    startY.current = 0;
    // 가장 가까운 스냅으로 정착
    const nearest = clampedSnaps.reduce(
      (prev, cur) =>
        Math.abs(cur - current) < Math.abs(prev - current) ? cur : prev,
      clampedSnaps[0],
    );
    setHeight(nearest);
  }, [height, clampedSnaps]);

  useEffect(() => {
    const onResize = () =>
      setHeight(
        startClosed ? closedPeek : Math.round(window.innerHeight * initialSnap),
      );
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [initialSnap, startClosed, closedPeek]);

  return (
    <div
      ref={containerRef}
      className="fixed left-1/2 bottom-0 z-20 w-full max-w-sm -translate-x-1/2"
      style={{ height }}
    >
      <div className="absolute inset-0 rounded-t-3xl bg-gray-50 shadow-xl border-t border-gray-200 flex flex-col overflow-hidden">
        <div
          className="cursor-grab active:cursor-grabbing px-4 pt-3 pb-2 select-none touch-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <div className="mx-auto h-1.5 w-10 rounded-full bg-gray-300" />
          {header && <div className="mt-3">{header}</div>}
        </div>
        <div className="flex-1 overflow-y-auto px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {children}
        </div>
      </div>
    </div>
  );
}

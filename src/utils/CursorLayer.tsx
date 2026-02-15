import { useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";

type CursorLayerProps = {
  size?: number;
  strokeWidth?: number;
  hideSystemCursor?: boolean;
};

export function CursorLayer({
  size = 24,
  strokeWidth = 2
}: CursorLayerProps) {
  /* Initialize Data-cursor-layer */
  const host = useMemo(() => {
    const node = document.createElement("div");
    node.setAttribute("data-cursor-layer", "true");
    return node;
  }, []);

  useEffect(() => {
    document.body.appendChild(host);
    return () => host.remove();
  }, [host]);

  /* Cursor Ref and Movement */
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    let running = true;
    let px = -9999;
    let py = -9999;
    let rx = px;
    let ry = py;
    const half = size / 2;

    const setPos = (x: number, y: number) => {
      px = x;
      py = y;

      // First-time snap so it appears immediately
      if (rx === -9999 && ry === -9999) {
        rx = px;
        ry = py;
        el.style.transform = `translate3d(${rx - half}px, ${ry - half}px, 0)`;
      }
    };

    const updateFromPointerEvent = (e: PointerEvent) => {
      const anyE = e as unknown as { getCoalescedEvents?: () => PointerEvent[] };
      const coalesced = anyE.getCoalescedEvents?.();
      if (coalesced && coalesced.length) {
        const last = coalesced[coalesced.length - 1];
        setPos(last.clientX, last.clientY);
      } else {
        setPos(e.clientX, e.clientY);
      }
    };

    const onBlur = () => setPos(-9999, -9999);
    const onEnter = (e: PointerEvent) => setPos(e.clientX, e.clientY);
    const onMove = (e: PointerEvent) => updateFromPointerEvent(e);

    window.addEventListener("blur", onBlur);
    window.addEventListener("pointerenter", onEnter as any, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });

    const rawSupported = "onpointerrawupdate" in window;

    window.addEventListener(
      rawSupported ? "pointerrawupdate" : "pointermove",
      onMove as any,
      { passive: true }
    );

    // Ticks
    const tick = (t: number) => {
      if (!running) return;

      rx += (px - rx)
      ry += (py - ry)

      el.style.transform = `translate3d(${rx - half}px, ${ry - half}px, 0)`;
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);

    return () => {
      running = false;
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("pointerenter", onEnter as any);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener(rawSupported ? "pointerrawupdate" : "pointermove", onMove as any);
    };
  }, [size]);

  const content = (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 2147483647,
        willChange: "transform",
        transform: "translate3d(-9999px, -9999px, 0)",
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - strokeWidth}
          fill="rgba(255,255,255,0.33"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          style={{ transformOrigin: "50% 50%" }}
        />
      </svg>
    </div>
  );

  return createPortal(content, host);
}

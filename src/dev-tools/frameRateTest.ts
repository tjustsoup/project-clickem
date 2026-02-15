/**
 * These are some diagnostic functions that can be thrown into App.tsx in a `useEffect` to test frame rate related things.
 * Call these in App.tsx, inside a 1-time useEffect, for example:
 * 
 * ```
 * useEffect(() => {
 *   return () => logRafFps()
 * }, [])
 * ```
 * 
 * Warning:  These were hallucinated by Chat Gippity, but I just needed them for testing/diagnostics
 *  - These will be deleted in the future
 *  - These do not affect gameplay in any way
 */


/**
 * "Request Animation Frame" FPS Tracker
 * - Logs the current Frame Rate
 */
export function logRafFps() {
  let last = performance.now();
  let frames = 0;

  const tick = (t: number) => {
    frames++;
    if (t - last >= 1000) {
      console.log("RAF fps:", frames);
      frames = 0;
      last = t;
    }
    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

/**
 * "Request Animation Frame" Timing
 * - Logs the timing/delay of "Request Animation Frame"
 * - Not entirely sure the diagnostic purpose of this, tbh
 */
export function logRafTiming() {
  let last = performance.now();
  const samples: number[] = [];

  const tick = (t: number) => {
    const dt = t - last;
    last = t;
    samples.push(dt);

    if (samples.length >= 240) {
      // ~4 seconds at 60fps, ~1.7s at 144fps
      const s = samples.slice().sort((a, b) => a - b);
      const p = (q: number) => s[Math.floor(q * (s.length - 1))];

      const p50 = p(0.5);
      const p90 = p(0.9);
      const p99 = p(0.99);

      const hz50 = 1000 / p50;
      const hz90 = 1000 / p90;

      console.log(
        `rAF dt(ms) p50=${p50.toFixed(2)} p90=${p90.toFixed(2)} p99=${p99.toFixed(2)} | ~hz p50=${hz50.toFixed(1)} p90=${hz90.toFixed(1)}`
      );

      samples.length = 0;
    }

    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

/**
 * Pointer Event Frequency
 * - Logs the amount of pointer events that have been tracked
 * - Useful for seeing how responsive a window is
 */
export function logPointerEventHz() {
  let moves = 0;
  let last = performance.now();

  const onMove = () => {
    moves++;
    const now = performance.now();
    if (now - last >= 1000) {
      console.log("pointermove events/sec:", moves);
      moves = 0;
      last = now;
    }
  };

  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("mousemove", onMove, { passive: true }); // extra signal

  return () => {
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("mousemove", onMove);
  };
}
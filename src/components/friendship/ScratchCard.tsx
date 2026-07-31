import { useEffect, useRef, useState } from "react";

export function ScratchCard({
  children,
  onRevealed,
}: {
  children: React.ReactNode;
  onRevealed: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const drawing = useRef(false);
  const revealed = useRef(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const paint = () => {
      const rect = wrap.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(rect.width));
      canvas.height = Math.max(1, Math.round(rect.height));
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#a8cfc2");
      gradient.addColorStop(1, "#7fb8a8");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255,255,255,0.25)";
      for (let x = 8; x < canvas.width; x += 22) {
        for (let y = 8; y < canvas.height; y += 22) {
          ctx.beginPath();
          ctx.arc(x, y, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.fillStyle = "rgba(255,255,255,0.75)";
      ctx.font = "500 12px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("scratch", canvas.width / 2, canvas.height / 2);
    };

    paint();
    const observer = new ResizeObserver(() => {
      if (!revealed.current) paint();
    });
    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  const scratchAt = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || revealed.current) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(clientX - rect.left, clientY - rect.top, 26, 0, Math.PI * 2);
    ctx.fill();

    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let clear = 0;
    for (let i = 3; i < data.length; i += 64) {
      if (data[i] === 0) clear++;
    }
    if (clear / (data.length / 64) > 0.5) {
      revealed.current = true;
      setDone(true);
      onRevealed();
    }
  };

  const reveal = () => {
    if (revealed.current) return;
    revealed.current = true;
    setDone(true);
    onRevealed();
  };

  return (
    <div
      ref={wrapRef}
      className="relative min-h-[128px] w-full overflow-hidden rounded-xl bg-card shadow-[0_10px_26px_-20px_rgba(0,0,0,0.5)]"
      onPointerDown={(e) => {
        drawing.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        scratchAt(e.clientX, e.clientY);
      }}
      onPointerMove={(e) => {
        if (drawing.current) scratchAt(e.clientX, e.clientY);
      }}
      onPointerUp={() => (drawing.current = false)}
      onPointerLeave={() => (drawing.current = false)}
      onDoubleClick={reveal}
    >
      <div className="p-5">{children}</div>
      <canvas
        ref={canvasRef}
        aria-hidden
        className={`absolute inset-0 h-full w-full touch-none transition-opacity duration-500 ${
          done ? "pointer-events-none opacity-0" : "cursor-grab"
        }`}
      />
    </div>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SceneShell({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <section
      onClick={onClick}
      className={cn(
        "graph-paper relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-5 py-16",
        onClick && "cursor-pointer",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--background)_95%)]" />
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">{children}</div>
    </section>
  );
}

export function SceneHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <header className="animate-soft-in mb-8 text-center">
      <p className="font-sans text-xs font-bold tracking-[0.25em] text-coral uppercase">
        <span className="text-primary">✦</span> {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
        {title}
      </h2>
      <p className="font-script mt-3 text-xl text-primary sm:text-2xl">{subtitle} ✿</p>
    </header>
  );
}

export function NextButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-8 rounded-full bg-primary px-8 py-3 font-sans text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_-12px_var(--primary)] transition-transform hover:scale-105 active:scale-95"
    >
      {label} →
    </button>
  );
}

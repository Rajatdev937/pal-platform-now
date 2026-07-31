import { useState } from "react";
import { truths } from "./content";
import { ScratchCard } from "./ScratchCard";
import { NextButton, SceneHeading, SceneShell } from "./SceneShell";

export function TruthsScene({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);

  return (
    <SceneShell>
      <SceneHeading
        eyebrow="Six Little Truths"
        title="scratch these open"
        subtitle="rub each one — there's something under it"
      />

      <svg viewBox="0 0 40 56" className="mb-8 h-12 w-9" aria-hidden>
        <path d="M20 26 V52" stroke="var(--primary)" strokeWidth="2.5" fill="none" />
        <path d="M20 38 C12 38 8 32 6 28 C14 26 19 31 20 38 Z" fill="var(--mint-deep)" />
        <circle cx="13" cy="14" r="9" fill="var(--coral)" />
        <circle cx="27" cy="14" r="9" fill="var(--coral)" />
        <circle cx="20" cy="22" r="9" fill="var(--coral)" />
        <circle cx="20" cy="16" r="5" fill="var(--honey)" />
      </svg>


      <div className="grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {truths.map((truth, i) => (
          <ScratchCard key={truth.title} onRevealed={() => setCount((c) => c + 1)}>
            <p className="font-sans text-xs font-bold text-coral">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="font-display mt-1 text-lg font-semibold text-foreground">
              {truth.title}
            </h3>
            <p className="mt-1 font-sans text-sm leading-6 text-muted-foreground">{truth.body}</p>
          </ScratchCard>
        ))}
      </div>

      <p className="font-script mt-6 text-lg text-muted-foreground">
        {count >= truths.length ? "that's all six ✿" : `${count} of ${truths.length} uncovered`}
      </p>
      <NextButton label="read the letter" onClick={onDone} />
    </SceneShell>
  );
}

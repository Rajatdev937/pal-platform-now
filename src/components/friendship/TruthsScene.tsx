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

      <span className="mb-8 text-3xl">🌷</span>

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

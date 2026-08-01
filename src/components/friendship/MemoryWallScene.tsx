import { useState } from "react";
import { memories } from "./content";
import { NextButton, SceneHeading, SceneShell } from "./SceneShell";

export function MemoryWallScene({ onDone }: { onDone: () => void }) {
  const [flipped, setFlipped] = useState<number[]>([]);
  const all = flipped.length === memories.length;

  return (
    <SceneShell>
      <SceneHeading
        eyebrow="OUR MEMORIES"
        title="flip one over"
        subtitle="every photo has something written on the back"
      />

      <div className="grid w-full max-w-3xl grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-7">
        {memories.map((memory, i) => {
          const isFlipped = flipped.includes(i);
          return (
            <button
              key={memory.note}
              type="button"
              aria-label={isFlipped ? "Flip photo back" : "Flip photo over"}
              onClick={() =>
                setFlipped((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]))
              }
              className="relative aspect-[3/4] w-full [perspective:1200px]"
            >
              <span className="absolute -top-2 left-1/2 z-20 h-3 w-3 -translate-x-1/2 rounded-full bg-honey shadow-md" />
              <div
                className="flip-3d relative h-full w-full"
                style={{ transform: isFlipped ? "rotateY(180deg)" : undefined }}
              >
                <div className="backface-hidden absolute inset-0 flex flex-col rounded-sm bg-paper p-2 shadow-[0_10px_24px_-16px_rgba(0,0,0,0.5)]">
                  <img
                    src={memory.src}
                    alt={memory.alt}
                    width={640}
                    height={768}
                    loading="lazy"
                    className="h-full w-full rounded-[2px] object-cover"
                  />
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-primary/60">
                    ✿
                  </span>
                </div>
                <div
                  className="backface-hidden ruled-paper absolute inset-0 flex items-center rounded-sm p-4 shadow-[0_10px_24px_-16px_rgba(0,0,0,0.5)]"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <p className="font-script w-full text-center text-base leading-7 text-muted-foreground">
                    {memory.note}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <p className="font-script mt-6 text-lg text-muted-foreground">
        {all ? "that's the whole wall ✿" : "tap a photo to flip it ✿"}
      </p>
      <NextButton label="scratch to reveal" onClick={onDone} />
    </SceneShell>
  );
}

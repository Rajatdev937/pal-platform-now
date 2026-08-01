import { useEffect, useRef, useState } from "react";
import catBrown from "@/assets/cat-brown.png";
import catWhite from "@/assets/cat-white.png";
import { NextButton, SceneShell } from "./SceneShell";

/** 0 idle · 1 walking in · 2 tying the bands · 3 celebrating · 4 finished */
type Phase = 0 | 1 | 2 | 3 | 4;

export function BandScene({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const start = () => {
    if (phase !== 0) return;
    setPhase(1);
    timers.current = [
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 3400),
      setTimeout(() => setPhase(4), 5400),
    ];
  };

  const moved = phase >= 1;
  const tying = phase >= 2;
  const party = phase >= 3;

  return (
    <SceneShell>
      <div className="animate-soft-in flex w-full max-w-xl flex-col items-center text-center">
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
          🎀 Friendship Day Ritual
        </h2>
        <p className="font-script mt-4 text-xl leading-8 text-primary sm:text-2xl">
          Since we couldn't tie friendship bands together this Friendship Day...
          <br />
          Let's do it here instead. 🤍
        </p>

        {/* stage */}
        <div className="relative mt-10 flex h-56 w-full items-end justify-center overflow-hidden sm:h-64">
          <div
            className={`pointer-events-none absolute bottom-6 h-32 w-32 rounded-full bg-honey/40 blur-2xl transition-opacity duration-700 ${
              party ? "opacity-100" : "opacity-0"
            }`}
          />

          <img
            src={catBrown}
            alt="A little brown cat"
            width={512}
            height={512}
            loading="lazy"
            className="relative w-24 transition-transform duration-[1600ms] ease-out sm:w-28"
            style={{
              transform: `translateX(${moved ? (party ? "22%" : "34%") : "-220%"}) rotate(${
                tying ? "-6deg" : "0deg"
              })`,
            }}
          />
          <img
            src={catWhite}
            alt="A little white cat"
            width={512}
            height={512}
            loading="lazy"
            className="relative w-24 transition-transform duration-[1600ms] ease-out sm:w-28"
            style={{
              transform: `translateX(${moved ? (party ? "-22%" : "-34%") : "220%"}) rotate(${
                tying ? "6deg" : "0deg"
              })`,
            }}
          />

          {/* friendship bands */}
          <div
            className={`pointer-events-none absolute bottom-24 flex gap-6 text-3xl transition-all duration-700 ${
              tying ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <span>🎀</span>
            <span>🎀</span>
          </div>

          {/* sparkles, hearts, confetti */}
          {party &&
            [0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <span
                key={i}
                className="animate-rise absolute bottom-10 select-none"
                style={{
                  left: `${10 + i * 10}%`,
                  animationDelay: `${i * 0.25}s`,
                  fontSize: `${14 + (i % 3) * 5}px`,
                }}
              >
                {["✨", "💗", "🎊", "💛"][i % 4]}
              </span>
            ))}
        </div>

        {phase === 0 && (
          <button
            type="button"
            onClick={start}
            className="mt-6 rounded-full bg-primary px-8 py-4 font-sans text-base font-semibold text-primary-foreground shadow-[0_10px_24px_-12px_var(--primary)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            🎀 Tie Friendship Band
          </button>
        )}
        {phase === 4 && <NextButton label="Continue" onClick={onDone} />}
      </div>
    </SceneShell>
  );
}

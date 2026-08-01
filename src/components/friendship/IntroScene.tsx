import { useEffect } from "react";
import balloon from "@/assets/balloon.png";
import { SceneShell } from "./SceneShell";

export function IntroScene({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    // Increase delay slightly to allow for the rise + float animation
    const t = setTimeout(onDone, 5000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <SceneShell onClick={onDone}>
      <h1 className="font-display animate-soft-in text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Happy Friendship Day
      </h1>

      <div className="relative mt-14 flex flex-col items-center">
        <img
          src={balloon}
          alt="A striped hot air balloon carrying a letter"
          width={512}
          height={640}
          className="animate-balloon-rise-float w-40 drop-shadow-[0_18px_28px_rgba(0,0,0,0.08)] sm:w-52 motion-reduce:animate-soft-in"
        />
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="animate-rise absolute bottom-10 text-coral"
            style={{
              left: `${18 + i * 22}%`,
              animationDelay: `${i * 1.1}s`,
              fontSize: `${10 + (i % 2) * 6}px`,
            }}
          >
            ♥
          </span>
        ))}
        <p className="font-script mt-6 text-lg text-muted-foreground">a delivery for you...</p>
      </div>
    </SceneShell>
  );
}

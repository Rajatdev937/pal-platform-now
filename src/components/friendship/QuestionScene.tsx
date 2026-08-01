import catBrown from "@/assets/cat-brown.png";
import catWhite from "@/assets/cat-white.png";
import { SceneShell } from "./SceneShell";

const options = [
  "🙂 Just a Friend",
  "💛 Best Friend",
  "🫶 Closest Friend",
  "👑 Bestestesttt Frienddd!!",
];

export function QuestionScene({ onDone }: { onDone: () => void }) {
  return (
    <SceneShell>
      <div className="animate-soft-in w-full max-w-xl rounded-3xl border border-border bg-paper px-6 py-9 shadow-[0_20px_44px_-28px_rgba(0,0,0,0.4)] sm:px-10">
        <div className="mb-5 flex items-end justify-center gap-2">
          <img
            src={catBrown}
            alt="A little brown cat"
            width={512}
            height={512}
            loading="lazy"
            className="w-20 rotate-[-4deg] sm:w-24"
          />
          <img
            src={catWhite}
            alt="A little white cat"
            width={512}
            height={512}
            loading="lazy"
            className="w-20 rotate-[4deg] sm:w-24"
          />
        </div>

        <h2 className="font-display text-center text-2xl font-semibold text-foreground sm:text-3xl">
          💛 One Tiny Friendship Day Question...
        </h2>
        <p className="font-script mt-3 text-center text-xl text-primary sm:text-2xl">
          what u consider me the most? 🤍
        </p>

        <div className="mt-8 grid gap-3">
          {options.map((label) => (
            <button
              key={label}
              type="button"
              onClick={onDone}
              className="w-full rounded-full border border-primary/30 bg-card px-6 py-4 font-sans text-base font-semibold text-primary shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-secondary hover:shadow-[0_0_24px_-6px_var(--primary)] active:scale-95"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </SceneShell>
  );
}

import critter from "@/assets/critter.png";
import { memories } from "./content";
import { SceneShell } from "./SceneShell";

export function LetterScene({ onReplay, onNext }: { onReplay: () => void; onNext?: () => void }) {
  return (
    <SceneShell>
      <div className="animate-soft-in flex w-full max-w-xl flex-col items-center">
        <span className="rounded-full border border-primary/40 bg-card px-4 py-1 font-sans text-xs font-semibold text-primary">
          ✿ one last thing ✿
        </span>

        <div className="relative mt-5 rotate-[-1deg] bg-paper px-8 py-3 shadow-sm">
          <h2 className="font-display text-2xl font-semibold text-foreground">A Note For You</h2>
        </div>

        <article className="ruled-paper relative mt-6 w-full rounded-sm px-7 py-10 shadow-[0_20px_44px_-28px_rgba(0,0,0,0.5)]">
          <span className="absolute -top-3 left-8 rotate-[-6deg] rounded-sm bg-honey/70 px-6 py-1 text-[8px] tracking-widest text-honey">
            ● ● ● ●
          </span>
          <div className="font-script space-y-5 text-lg leading-8 text-foreground">
            <p className="text-primary">Hey you,</p>
            <p>
              I'm not great at saying this stuff out loud, so I made you a page instead — our
              photos, a few things I actually mean, and no way for you to change the subject.
            </p>
            <p>
              thank you for the years of picking up the phone, for the advice I didn't ask for and
              definitely needed, and for never once making me explain myself twice. you've seen
              every version of me and stayed for all of them.
            </p>
            <p>
              I hope today is a good one. and I hope you know that whatever happens next, you've got
              a person in your corner permanently. that's me. I'm the person.
            </p>
          </div>

          <div className="mt-7 flex gap-3">
            {memories.slice(2, 5).map((memory) => (
              <img
                key={memory.alt}
                src={memory.src}
                alt={memory.alt}
                width={640}
                height={768}
                loading="lazy"
                className="h-20 w-20 rotate-[-2deg] rounded-sm border-4 border-paper object-cover shadow-sm"
              />
            ))}
          </div>

          <p className="font-script mt-8 text-base text-muted-foreground">always in your corner,</p>
          <p className="font-script mt-1 inline-block border-b-2 border-primary/60 pb-1 text-2xl text-primary">
            your friend
          </p>
          <img
            src={critter}
            alt="A tiny otter waving goodbye"
            width={512}
            height={512}
            loading="lazy"
            className="absolute right-4 bottom-4 w-14"
          />
        </article>

        <p className="mt-7 font-sans text-[11px] font-semibold tracking-[0.25em] text-primary uppercase">
          ✿ made with love by me
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={onReplay}
            className="rounded-full border border-primary/40 bg-card px-6 py-2 font-sans text-sm font-medium text-primary transition-colors hover:bg-secondary"
          >
            ↻ play it again
          </button>
          {onNext && (
            <button
              type="button"
              onClick={onNext}
              className="rounded-full bg-primary px-6 py-2 font-sans text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_-12px_var(--primary)] transition-transform hover:scale-105 active:scale-95"
            >
              one more thing →
            </button>
          )}
        </div>
      </div>
    </SceneShell>
  );
}

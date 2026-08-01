import critter from "@/assets/critter.png";
import { SceneShell } from "./SceneShell";

export function EnvelopeScene({ onDone }: { onDone: () => void }) {
  return (
    <SceneShell onClick={onDone}>
      <div className="relative w-full max-w-md">
        {/* note sliding out of the envelope */}
        <div className="animate-note-out relative z-20 mx-auto -mb-24 w-[88%] rounded-md border border-border/60 bg-paper px-6 pt-8 pb-24 text-center shadow-[0_-10px_30px_-18px_rgba(0,0,0,0.4)]">
          <span className="absolute top-3 left-4 text-honey">♥</span>
          <span className="absolute top-3 right-4 text-honey">♥</span>
          <p className="font-script text-3xl text-foreground">Hey You Baunii!!</p>
          <p className="font-script mt-3 text-xl leading-8 text-muted-foreground">
            I created&nbsp; something&nbsp;for you on this very day hope you like it
            <br />
            (as always😏)...
          </p>
          <p className="font-script mt-3 text-lg text-primary">Divyanshi.... ✿</p>
        </div>

        {/* envelope */}
        <div className="animate-soft-in relative z-30 aspect-[16/9.5] w-full overflow-hidden rounded-xl border-2 border-primary/80 bg-mint shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]">
          {/* diagonal folds forming an X */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 h-full w-1/2 origin-top-left skew-y-[31deg] border-r border-primary/40 bg-[color-mix(in_oklab,var(--mint)_88%,white)]" />
            <div className="absolute top-0 right-0 h-full w-1/2 origin-top-right -skew-y-[31deg] border-l border-primary/40 bg-[color-mix(in_oklab,var(--mint)_88%,white)]" />
            <div className="absolute bottom-0 left-0 h-full w-1/2 origin-bottom-left -skew-y-[31deg] border-r border-primary/40 bg-[color-mix(in_oklab,var(--mint)_70%,white)]" />
            <div className="absolute right-0 bottom-0 h-full w-1/2 origin-bottom-right skew-y-[31deg] border-l border-primary/40 bg-[color-mix(in_oklab,var(--mint)_70%,white)]" />
          </div>

          <span className="absolute top-1/2 left-5 z-10 -translate-y-1/2 rounded-md border-2 border-dashed border-primary/70 bg-paper/40 px-3 py-1 font-sans text-[10px] font-bold tracking-widest text-primary uppercase">
            Happy Friendship Day
          </span>
          <span className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-4xl text-accent drop-shadow-sm">
            💝
          </span>
          <img
            src={critter}
            alt="A tiny otter peeking from behind the envelope"
            width={512}
            height={512}
            loading="lazy"
            className="absolute right-1 bottom-0 z-10 w-14 sm:w-16"
          />
        </div>
      </div>

      <p className="mt-10 animate-pulse font-sans text-[11px] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
        TAP ANYWHERE TO BEGIN!!
      </p>
    </SceneShell>
  );
}

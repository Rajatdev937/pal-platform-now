import critter from "@/assets/critter.png";
import { SceneShell } from "./SceneShell";

export function EnvelopeScene({ onDone }: { onDone: () => void }) {
  return (
    <SceneShell onClick={onDone}>
      <div className="animate-soft-in relative w-full max-w-md">
        {/* note sliding out */}
        <div className="relative z-20 mx-auto -mb-14 w-[86%] rounded-t-xl bg-paper px-6 pt-8 pb-16 text-center shadow-[0_-8px_24px_-16px_rgba(0,0,0,0.35)]">
          <span className="absolute top-3 left-3 text-honey">♥</span>
          <span className="absolute top-3 right-3 text-honey">♥</span>
          <p className="font-script text-3xl text-foreground">Hey You Baunii!!</p>
          <p className="font-script mt-3 text-xl leading-8 text-muted-foreground">
            I created&nbsp; something&nbsp;for you on this very day hope you like it
            <br />
            (as always😏)...
          </p>
          <p className="font-script mt-3 text-lg text-primary">Divyanshi.... ✿</p>
        </div>

        {/* envelope */}
        <div className="relative z-30 aspect-[16/10] w-full rounded-lg bg-mint shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <div className="absolute -top-px left-0 h-full w-1/2 origin-bottom-left skew-y-[26deg] border-r border-mint-deep/40 bg-mint" />
            <div className="absolute -top-px right-0 h-full w-1/2 origin-bottom-right -skew-y-[26deg] border-l border-mint-deep/40 bg-mint" />
          </div>
          <span className="absolute top-1/2 left-6 z-10 -translate-y-1/2 rounded-md border-2 border-dashed border-primary/70 px-3 py-1 font-sans text-[10px] font-bold tracking-widest text-primary uppercase">
            Happy Friendship Day
          </span>
          <span className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-4xl text-accent drop-shadow-sm">
            💝
          </span>
          <img
            src={critter}
            alt="A tiny otter peeking from behind the envelope"
            width={512}
            height={512}
            loading="lazy"
            className="absolute -right-4 bottom-0 z-10 w-16 sm:w-20"
          />
        </div>
      </div>

      <p className="mt-10 animate-pulse font-sans text-[11px] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
        TAP ANYWHERE TO BEGIN!!
      </p>
    </SceneShell>
  );
}

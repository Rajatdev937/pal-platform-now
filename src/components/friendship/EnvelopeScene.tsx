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

        {/* Envelope */}
        <div className="animate-soft-in relative z-30 mx-auto h-[240px] w-full max-w-md">
          {/* Back body */}
          <div className="absolute inset-0 rounded-[10px] border-2 border-[#4d6f67] bg-[#b9e6d8] shadow-xl" />

          {/* Left Fold */}
          <div
            className="absolute bottom-0 left-0 h-[72%] w-1/2 border-r border-[#6b9087] bg-[#cfeee5]"
            style={{
              clipPath: "polygon(0 100%,100% 0,100% 100%)",
            }}
          />

          {/* Right Fold */}
          <div
            className="absolute right-0 bottom-0 h-[72%] w-1/2 border-l border-[#6b9087] bg-[#cfeee5]"
            style={{
              clipPath: "polygon(0 0,100% 100%,0 100%)",
            }}
          />

          {/* Bottom Fold */}
          <div
            className="absolute bottom-0 left-0 h-[65%] w-full border-t border-[#6b9087] bg-[#a9dccc]"
            style={{
              clipPath: "polygon(0 100%,50% 28%,100% 100%)",
            }}
          />

          {/* Top Open Flap */}
          <div
            className="absolute top-0 left-0 h-[55%] w-full origin-top bg-[#d7f3eb]"
            style={{
              clipPath: "polygon(0 0,100% 0,50% 100%)",
            }}
          />

          {/* Tag */}
          <span className="absolute left-5 top-[55%] z-30 rounded-full border-2 border-dashed border-primary bg-paper px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
            Happy Friendship Day
          </span>

          {/* Heart Seal */}
          <div className="absolute bottom-9 left-1/2 z-30 -translate-x-1/2 text-5xl">
            💛
          </div>

          {/* Otter */}
          <img
            src={critter}
            alt=""
            className="absolute right-1 bottom-1 z-40 w-16"
          />
        </div>
      </div>

      <p className="mt-10 animate-pulse font-sans text-[11px] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
        TAP ANYWHERE TO BEGIN!!
      </p>
    </SceneShell>
  );
}

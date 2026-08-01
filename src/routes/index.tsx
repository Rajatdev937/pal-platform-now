import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IntroScene } from "@/components/friendship/IntroScene";
import { EnvelopeScene } from "@/components/friendship/EnvelopeScene";
import { MemoryWallScene } from "@/components/friendship/MemoryWallScene";
import { TruthsScene } from "@/components/friendship/TruthsScene";
import { LetterScene } from "@/components/friendship/LetterScene";
import { QuestionScene } from "@/components/friendship/QuestionScene";
import { BandScene } from "@/components/friendship/BandScene";

const title = "Happy Friendship Day — A Little Something For You";
const description =
  "An interactive friendship day card: flip our photo wall, scratch open six little truths, and read the letter I couldn't say out loud.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [scene, setScene] = useState(0);
  const next = () => setScene((s) => s + 1);

  return (
    <main>

      {scene === 0 && <IntroScene onDone={next} />}
      {scene === 1 && <EnvelopeScene onDone={next} />}
      {scene === 2 && <MemoryWallScene onDone={next} />}
      {scene === 3 && <TruthsScene onDone={next} />}
      {scene === 4 && <LetterScene onReplay={() => setScene(0)} onNext={next} />}
      {scene === 5 && <QuestionScene onDone={next} />}
      {scene === 6 && <BandScene onDone={() => setScene(0)} />}
    </main>
  );
}

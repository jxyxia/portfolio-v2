"use client";

import { TextMorph } from "@/components/ui/text-morph";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { useEffect, useState } from "react";

function CopyButton() {
  const [text, setText] = useState("Copy");
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    if (text === "Copied") {
      const t = setTimeout(() => setText("Copy"), 2000);
      return () => clearTimeout(t);
    }
  }, [text]);

  return (
    <button
      onClick={() => {
        setText("Copied");
        navigator.clipboard.writeText(currentUrl);
      }}
      className="font-base flex items-center gap-1 text-center text-sm text-zinc-500 transition-colors dark:text-zinc-400"
      type="button"
    >
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </button>
  );
}

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* top mask + progress */}
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{ bounce: 0 }}
      />

      {/* copy button */}
      <div className="fixed right-4 top-24 z-30">
        <CopyButton />
      </div>

      {/* Wider outer container so page uses more horizontal space */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 pb-28 md:pb-32">
        {/* Header / media area — allow images and hero elements to be wider */}
        <div className="mx-auto w-full max-w-4xl">
          {/* if your MDX includes a hero image at the top, it will fill this area.
              Keep it centered and allow it to be wider than the text column. */}
          {/* Example: if your MDX renders an image element at the top, it will be full width here */}
        </div>

        {/* Article content layout:
            - left: wide header/media (done above)
            - center: readable text column capped at ~75ch
            - we center the column in the larger container so side gutters feel smaller
        */}
        <article className="mx-auto mt-8 w-full max-w-[75ch] prose prose-gray prose-invert leading-relaxed prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium">
          {children}
        </article>
      </main>
    </>
  );
}

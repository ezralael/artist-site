"use client";

import { useEffect, useRef, useState } from "react";

type LazyIframeProps = {
  title: string;
  src: string;
  height?: number;
  allow?: string; // 👈 optional, fixes all those "allow is missing" errors
};

export default function LazyIframe({
  title,
  src,
  height = 352,
  allow,
}: LazyIframeProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: height }}>
      {visible && (
        <iframe
          title={title}
          src={src}
          width="100%"
          height={height}
          loading="lazy"
          allow={
            allow ||
            "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
          }
          style={{ border: 0 }}
        />
      )}
    </div>
  );
}

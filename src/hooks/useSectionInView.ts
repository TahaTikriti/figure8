"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Shared hook to reveal a section when it scrolls into view.
 * Returns a ref to attach to the section element and an `isVisible` flag.
 */
export function useSectionInView<T extends HTMLElement>() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<T | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return { sectionRef, isVisible };
}


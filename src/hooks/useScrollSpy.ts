"use client";

import { useEffect, useState } from "react";

interface UseScrollSpyOptions {
  offset?: number;
}

export function useScrollSpy(options: UseScrollSpyOptions = {}) {
  const { offset = 100 } = options;
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const onScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - offset;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId || "hero");
        }
      });
    };

    document.addEventListener("scroll", onScroll);
    window.addEventListener("load", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("load", onScroll);
    };
  }, [offset]);

  return activeSection;
}
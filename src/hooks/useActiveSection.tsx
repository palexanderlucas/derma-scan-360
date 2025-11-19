import { useState, useEffect } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = [
      "technologie",
      "ablauf",
      "preise",
      "team",
      "standort",
      "unternehmen",
      "kommunen",
      "faq",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is in the middle third of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return activeSection;
};

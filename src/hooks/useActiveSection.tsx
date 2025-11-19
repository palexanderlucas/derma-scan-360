import { useState, useEffect } from "react";

export const useActiveSection = (sections?: string[]) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const defaultSections = [
      "technologie",
      "ablauf",
      "preise",
      "team",
      "standort",
      "unternehmen",
      "kommunen",
      "faq",
    ];

    const sectionsToObserve = sections || defaultSections;

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

    sectionsToObserve.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionsToObserve.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  return activeSection;
};

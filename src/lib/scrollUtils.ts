/**
 * Scrolls to a section with proper header offset
 * @param id - The section id to scroll to
 * @param callback - Optional callback after scrolling (e.g., close menu)
 */
export const scrollToSection = (id: string, callback?: () => void) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = window.innerWidth < 768 ? 64 : 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
  callback?.();
};

/**
 * Scrolls to top of page smoothly
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

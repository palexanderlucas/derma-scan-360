import { lazy, ComponentType } from "react";

const RELOAD_KEY = "chunk-reload-attempted";

// After a new deploy, old page loads may reference chunk files that no longer exist.
// On a failed dynamic import, reload once to fetch the fresh build.
export function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
) {
  return lazy(async () => {
    try {
      const mod = await factory();
      sessionStorage.removeItem(RELOAD_KEY);
      return mod;
    } catch (error) {
      if (!sessionStorage.getItem(RELOAD_KEY)) {
        sessionStorage.setItem(RELOAD_KEY, "1");
        window.location.reload();
        return new Promise<{ default: T }>(() => {});
      }
      throw error;
    }
  });
}

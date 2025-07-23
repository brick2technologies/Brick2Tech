import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component ensures the page scrolls to top on route change.
 * Respects user's reduced motion preferences for accessibility.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
// ✅ This component is used to scroll the page to the top whenever the route changes.
// It checks the user's preference for reduced motion and applies smooth scrolling accordingly.
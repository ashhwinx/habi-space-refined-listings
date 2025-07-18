import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure route transition completes
    const timer = setTimeout(() => {
      // Use smooth scroll for a premium feel
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);
};

export default useScrollToTop;

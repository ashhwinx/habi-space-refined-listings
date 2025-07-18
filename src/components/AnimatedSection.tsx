import React, { useEffect, useState } from "react";
import useIntersectionObserver from "@/hooks/use-intersection-observer";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fadeInUp" | "fadeIn" | "slideInLeft" | "slideInRight";
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  animation = "fadeInUp",
}: AnimatedSectionProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: false, // Allow re-triggering for homepage navigation
  });

  useEffect(() => {
    if (isIntersecting) {
      // Small delay to ensure smooth re-animation
      const timer = setTimeout(() => setShouldAnimate(true), 50);
      return () => clearTimeout(timer);
    } else {
      setShouldAnimate(false);
    }
  }, [isIntersecting]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fadeIn":
        return shouldAnimate ? "animate-fadeIn" : "opacity-0";
      case "slideInLeft":
        return shouldAnimate
          ? "animate-slideInLeft"
          : "opacity-0 -translate-x-8";
      case "slideInRight":
        return shouldAnimate
          ? "animate-slideInRight"
          : "opacity-0 translate-x-8";
      default:
        return shouldAnimate ? "animate-fadeInUp" : "opacity-0 translate-y-8";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

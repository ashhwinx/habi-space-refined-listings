import React from "react";
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
  animation = "fadeIn",
}: AnimatedSectionProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const getAnimationClass = () => {
    switch (animation) {
      case "fadeIn":
        return isIntersecting ? "animate-fadeIn" : "opacity-0";
      case "slideInLeft":
        return isIntersecting
          ? "animate-slideInLeft"
          : "opacity-0 -translate-x-8";
      case "slideInRight":
        return isIntersecting
          ? "animate-slideInRight"
          : "opacity-0 translate-x-8";
      default:
        return isIntersecting ? "animate-fadeInUp" : "opacity-0 translate-y-8";
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

import { useEffect, useState, useRef, type RefObject } from "react";

export function useElementOnScreen(
  options?: IntersectionObserverInit,
): [RefObject<HTMLDivElement | null>, boolean] {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const currentRef = containerRef.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Unobserve once triggered to keep it visible after scrolling past
        if (currentRef) observer.unobserve(currentRef);
      }
    }, options);

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [containerRef, isVisible];
}

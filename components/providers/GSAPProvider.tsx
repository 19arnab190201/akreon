"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface GSAPProviderProps {
  children: React.ReactNode;
}

export default function GSAPProvider({ children }: GSAPProviderProps) {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Set default configurations
    gsap.defaults({
      ease: "power2.out",
      duration: 0.8,
    });

    // Cleanup
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return <>{children}</>;
}

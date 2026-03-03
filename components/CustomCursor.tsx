"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch device
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      setTimeout(() => setIsTouchDevice(true), 0);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className={cn("fixed top-0 left-0 w-4 h-4 rounded-full bg-charcoal pointer-events-none z-[9999] mix-blend-difference")}
      animate={{
        x: position.x - (isHovered ? 16 : 8),
        y: position.y - (isHovered ? 16 : 8),
        scale: isHovered ? 2 : 1,
        opacity: isHovered ? 0.6 : 1,
        filter: isHovered ? "blur(4px)" : "blur(0px)",
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.5,
      }}
      style={{
        width: isHovered ? 32 : 16,
        height: isHovered ? 32 : 16,
        backgroundColor: "white" // mixed with difference gives opposite colors
      }}
    />
  );
}

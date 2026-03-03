"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSelect = (route: string) => {
    if (route) {
      router.push(route);
    }
  };

  return (
    <div className={cn("relative flex-1 flex flex-col justify-center items-center min-h-screen w-full bg-[#EBE4D5] overflow-hidden")}>
      {/* Animated Background Orbs */}
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0")}>
        <motion.div
          animate={{
            y: ["0%", "10%", "0%"],
            x: ["0%", "-5%", "0%"],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn("absolute top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#E8DBBE] mix-blend-multiply filter blur-[100px] opacity-70")}
        />
        <motion.div
          animate={{
            y: ["0%", "-10%", "0%"],
            x: ["0%", "5%", "0%"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn("absolute bottom-[20%] right-[20%] w-[600px] h-[600px] rounded-full bg-[#F3EDE2] mix-blend-multiply filter blur-[120px] opacity-60")}
        />
        <motion.div
          animate={{
            y: ["0%", "5%", "0%"],
            x: ["0%", "10%", "0%"],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn("absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full bg-[#D4DFE8] mix-blend-multiply filter blur-[90px] opacity-40")}
        />
      </div>

      <motion.div
        className={cn("relative z-10 w-full max-w-lg px-6 flex flex-col items-center")}
        animate={{
          y: isFocused ? (typeof window !== "undefined" && window.innerWidth < 768 ? -200 : 0) : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <div className={cn("relative w-full flex flex-col items-center")}>
          <div className={cn("relative w-full z-20")}>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setIsFocused(true);
              }}
              className={cn("w-full flex items-center justify-between px-6 py-4 bg-white/40 backdrop-blur-xl border border-white/60 rounded-full shadow-lg text-charcoal/80 text-lg hover:bg-white/50 transition-colors relative z-20")}
            >
              <span className={cn("font-serif text-2xl")}>Выберите событие...</span>
              <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.3 }}
                  className={cn("absolute top-full mt-2 w-full bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl overflow-hidden py-2 z-10")}
                >
                  <button
                    onClick={() => handleSelect("")}
                    className={cn("w-full text-left px-6 py-4 text-charcoal hover:bg-white/50 transition-colors font-serif text-2xl")}
                  >
                    Свадьба
                  </button>
                  <button
                    onClick={() => handleSelect("/birthday")}
                    className={cn("w-full text-left px-6 py-4 text-charcoal hover:bg-white/50 transition-colors font-serif text-2xl")}
                  >
                    День рождения
                  </button>
                  <button
                    onClick={() => handleSelect("")}
                    className={cn("w-full text-left px-6 py-4 text-charcoal hover:bg-white/50 transition-colors font-serif text-2xl")}
                  >
                    Корпоратив
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={cn("mt-6")}
        >
          <Link href="#works" className={cn("text-charcoal/60 hover:text-charcoal transition-colors text-sm border-b border-charcoal/20 pb-0.5 hover:border-charcoal/60 uppercase tracking-widest font-medium")}>
            или посмотреть наши работы
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

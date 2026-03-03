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
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center")}>
        <motion.div
          animate={{
            x: ["-5%", "5%", "-5%"],
            y: ["-5%", "5%", "-5%"],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn("absolute w-[40vw] h-[40vw] rounded-full blur-[120px] opacity-40 bg-white translate-x-[-10vw] translate-y-[-10vw]")}
        />
        <motion.div
          animate={{
            x: ["5%", "-5%", "5%"],
            y: ["5%", "-5%", "5%"],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn("absolute w-[40vw] h-[40vw] rounded-full blur-[120px] opacity-40 bg-[#F5EEDC] translate-x-[10vw] translate-y-[5vw]")}
        />
        <motion.div
          animate={{
            x: ["0%", "10%", "0%"],
            y: ["10%", "0%", "10%"],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn("absolute w-[40vw] h-[40vw] rounded-full blur-[120px] opacity-40 bg-[#E0E8F0] translate-y-[-15vw]")}
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
              className={cn("h-16 w-full max-w-xl mx-auto rounded-full bg-white/30 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] flex items-center justify-between px-6 hover:bg-white/40 transition-colors relative z-20")}
            >
              <span className={cn("font-sans text-lg text-[#2D2D2D]")}>Выберите событие...</span>
              <ChevronDown className={cn("w-5 h-5 text-[#2D2D2D] transition-transform duration-300", isOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.3 }}
                  className={cn("absolute top-full mt-2 w-full max-w-xl mx-auto left-0 right-0 bg-white/30 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-3xl overflow-hidden py-2 z-10")}
                >
                  <button
                    onClick={() => handleSelect("")}
                    className={cn("w-full text-left px-6 py-4 text-[#2D2D2D] hover:bg-white/40 transition-colors font-sans text-lg")}
                  >
                    Свадьба
                  </button>
                  <button
                    onClick={() => handleSelect("/birthday")}
                    className={cn("w-full text-left px-6 py-4 text-[#2D2D2D] hover:bg-white/40 transition-colors font-sans text-lg")}
                  >
                    День рождения
                  </button>
                  <button
                    onClick={() => handleSelect("")}
                    className={cn("w-full text-left px-6 py-4 text-[#2D2D2D] hover:bg-white/40 transition-colors font-sans text-lg")}
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

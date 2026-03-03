"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...classes: (string | undefined | null | false)[]) {
  return twMerge(clsx(classes));
}

const options = [
  { label: "Свадьба", value: "wedding" },
  { label: "День рождения", value: "birthday" },
  { label: "Корпоратив", value: "corporate" },
];

export default function EventSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: { label: string; value: string }) => {
    setIsOpen(false);
    if (option.value === "birthday") {
      router.push("/birthday");
    } else {
      console.log(`Selected: ${option.label}`);
    }
  };

  return (
    <div className="relative z-50 w-full max-w-md mx-auto" ref={containerRef}>
      {/* Mobile interaction requires moving to the top if open.
          We handle this with framer-motion layout animations. */}

      {/*
        This is the actual search bar and dropdown container.
        On mobile, when open, it becomes fixed and moves to the top.
      */}
      <motion.div
        layout
        className={cn(
          "w-full transition-all duration-500 ease-out z-50 relative",
          isOpen ? "max-md:fixed max-md:top-8 max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-[calc(100%-2rem)] max-md:z-50" : ""
        )}
      >
        <motion.div
          layout
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center gap-3 px-6 py-4 cursor-pointer select-none",
            "backdrop-blur-xl bg-white/10 border border-white/20 text-white shadow-xl",
            "rounded-full transition-colors hover:bg-white/15",
            isOpen && "bg-white/15"
          )}
        >
          <Search className="w-5 h-5 text-white/70" />
          <span className="flex-1 text-base sm:text-lg tracking-wide whitespace-nowrap overflow-hidden text-ellipsis opacity-90">
            Что вы хотите отпраздновать?
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-white/70" />
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              layoutId="dropdown"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 8, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full mt-2 w-full"
            >
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl overflow-hidden py-2 flex flex-col">
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(option);
                    }}
                    className="w-full text-left px-6 py-4 text-white hover:bg-white/10 transition-colors text-lg tracking-wide"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Overlay for mobile when open to focus attention */}
      <AnimatePresence>
        {isOpen && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 md:hidden"
             onClick={() => setIsOpen(false)}
           />
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("flex-1 flex flex-col")}
    >
      {children}
    </motion.div>
  );
}

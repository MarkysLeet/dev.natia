"use client";

import { useState } from "react";
import Link from "next/link";
import { ContactDrawer } from "./ContactDrawer";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className={cn("fixed top-0 left-0 w-full z-30 px-6 py-6 flex justify-between items-center mix-blend-difference text-white")}>
        <Link href="/" className={cn("font-serif text-3xl font-medium tracking-wide")}>
          LOGO.
        </Link>

        <nav className={cn("flex items-center gap-8 text-sm uppercase tracking-[0.2em] font-medium")}>
          <Link href="#about" className={cn("hover:opacity-70 transition-opacity hidden md:block")}>О нас</Link>
          <Link href="#works" className={cn("hover:opacity-70 transition-opacity hidden md:block")}>Работы</Link>
          <button
            onClick={() => setIsDrawerOpen(true)}
            className={cn("hover:opacity-70 transition-opacity")}
          >
            Связаться
          </button>
        </nav>
      </header>

      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}

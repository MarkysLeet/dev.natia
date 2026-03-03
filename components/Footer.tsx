import { Instagram, Send, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className={cn("mt-32 border-t border-black/5 py-10 w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-charcoal/60 mt-auto")}>
      <div className={cn("mb-4 md:mb-0 flex flex-col md:flex-row items-center md:gap-4")}>
        <span>&copy; {new Date().getFullYear()} Event Agency. Все права защищены.</span>
        <span className={cn("hidden md:inline text-black/20")}>|</span>
        <span className={cn("text-xs opacity-50 tracking-widest uppercase font-sans mt-2 md:mt-0")}>
          Design & Development by Grozan Studio
        </span>
      </div>

      <div className={cn("flex gap-6")}>
        <a href="#" className={cn("hover:text-charcoal transition-colors")}>
          <Instagram className={cn("w-4 h-4")} />
        </a>
        <a href="#" className={cn("hover:text-charcoal transition-colors")}>
          <Send className={cn("w-4 h-4")} />
        </a>
        <a href="#" className={cn("hover:text-charcoal transition-colors")}>
          <MessageCircle className={cn("w-4 h-4")} />
        </a>
      </div>
    </footer>
  );
}

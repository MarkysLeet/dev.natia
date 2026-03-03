"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Send, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={cn("fixed inset-0 z-40 bg-black/20 backdrop-blur-sm")}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={cn("fixed top-0 right-0 h-full w-full max-w-md z-50 bg-white/40 backdrop-blur-2xl border-l border-white/50 shadow-2xl p-10 flex flex-col")}
          >
            <div className={cn("flex justify-between items-center mb-12")}>
              <h2 className={cn("text-3xl font-serif text-charcoal")}>Связаться</h2>
              <button
                onClick={onClose}
                className={cn("p-2 rounded-full hover:bg-black/5 transition-colors")}
              >
                <X className={cn("w-6 h-6 text-charcoal")} />
              </button>
            </div>

            <form className={cn("flex flex-col gap-6 flex-grow")}>
              <div className={cn("flex flex-col gap-2")}>
                <label className={cn("text-sm text-charcoal/70 uppercase tracking-widest")}>
                  Имя
                </label>
                <input
                  type="text"
                  className={cn("bg-transparent border-b border-charcoal/20 pb-2 focus:outline-none focus:border-charcoal transition-colors text-lg")}
                  placeholder="Ваше имя"
                />
              </div>

              <div className={cn("flex flex-col gap-2")}>
                <label className={cn("text-sm text-charcoal/70 uppercase tracking-widest")}>
                  Телефон / Мессенджер
                </label>
                <input
                  type="text"
                  className={cn("bg-transparent border-b border-charcoal/20 pb-2 focus:outline-none focus:border-charcoal transition-colors text-lg")}
                  placeholder="+7 (999) 000-00-00"
                />
              </div>

              <div className={cn("flex flex-col gap-2")}>
                <label className={cn("text-sm text-charcoal/70 uppercase tracking-widest")}>
                  Событие
                </label>
                <select className={cn("bg-transparent border-b border-charcoal/20 pb-2 focus:outline-none focus:border-charcoal transition-colors text-lg appearance-none cursor-pointer rounded-none")}>
                  <option value="" disabled selected>
                    Выберите событие
                  </option>
                  <option value="wedding">Свадьба</option>
                  <option value="birthday">День рождения</option>
                  <option value="corporate">Корпоратив</option>
                </select>
              </div>

              <button
                type="button"
                className={cn("mt-8 py-4 bg-charcoal text-white rounded-none hover:bg-charcoal/90 transition-colors text-sm uppercase tracking-widest")}
              >
                Отправить заявку
              </button>
            </form>

            <div className={cn("mt-auto pt-12 border-t border-charcoal/10 flex justify-center gap-8")}>
              <a href="#" className={cn("text-charcoal/60 hover:text-charcoal transition-colors")}>
                <Instagram className={cn("w-6 h-6")} />
              </a>
              <a href="#" className={cn("text-charcoal/60 hover:text-charcoal transition-colors")}>
                <Send className={cn("w-6 h-6")} /> {/* Telegram icon */}
              </a>
              <a href="#" className={cn("text-charcoal/60 hover:text-charcoal transition-colors")}>
                <MessageCircle className={cn("w-6 h-6")} /> {/* WhatsApp icon */}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

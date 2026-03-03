"use client";

import { motion } from "framer-motion";

export default function BirthdayPage() {
  const words = "Создайте свой идеальный день рождения".split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number] } },
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-6 text-[#2C2C2A]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="overflow-hidden"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight mb-8">
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={item}
                className="inline-block mr-[0.2em] last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto leading-relaxed font-sans"
        >
          Мы позаботимся о каждой детали, чтобы ваш праздник стал по-настоящему особенным и незабываемым.
        </motion.p>
      </div>
    </main>
  );
}

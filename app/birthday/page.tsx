"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BirthdayPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const revealProps: any = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" },
    transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] },
  };

  return (
    <div className={cn("flex-1 flex flex-col w-full bg-[#BCC7D3] text-[#2D2D2D] selection:bg-[#2D2D2D] selection:text-white pb-32")}>

      {/* Hero Section */}
      <section className={cn("min-h-screen flex flex-col justify-center items-center text-center px-6 relative")}>
        <motion.h1
          className={cn("font-serif text-5xl md:text-7xl lg:text-8xl leading-tight max-w-5xl z-10")}
          {...revealProps}
        >
          Создайте свой<br />
          <span className={cn("italic")}>идеальный</span> день рождения
        </motion.h1>
      </section>

      {/* Pain Points */}
      <section className={cn("py-32 px-6 md:px-12 lg:px-24")}>
        <motion.div
          className={cn("grid grid-cols-1 md:grid-cols-3 gap-8")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {[
            { title: "Стресс подготовки", desc: "Бесконечные звонки и суета вместо предвкушения праздника." },
            { title: "Нехватка времени", desc: "Попытки вписать организацию в плотный рабочий график." },
            { title: "Шаблонные идеи", desc: "Одни и те же сценарии и банальные решения для каждого гостя." }
          ].map((point, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] } }
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={cn("bg-white/30 backdrop-blur-xl border border-white/40 p-10 rounded-3xl")}
            >
              <h3 className={cn("font-serif text-3xl mb-4")}>{point.title}</h3>
              <p className={cn("text-charcoal/70 leading-relaxed font-sans")}>{point.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Solution */}
      <section className={cn("py-32 px-6 md:px-12 lg:px-24")}>
        <div className={cn("max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center")}>
          <motion.div className={cn("flex-1")} {...revealProps}>
            <h2 className={cn("font-serif text-4xl md:text-5xl mb-8")}>Искусство <br/>персонального <br/>подхода</h2>
            <p className={cn("text-lg text-charcoal/80 leading-relaxed mb-8 max-w-md")}>
              Мы превращаем организацию вашего праздника в искусство. От первой идеи до последнего гостя — каждая деталь отражает ваш характер и стиль. Забудьте о шаблонах, мы создаем уникальные впечатления.
            </p>
            <button className={cn("text-sm uppercase tracking-widest border-b border-charcoal pb-1 hover:opacity-70 transition-opacity")}>
              Узнать больше
            </button>
          </motion.div>

          <motion.div
            className={cn("flex-1 w-full aspect-[4/5] rounded-[2rem] bg-white/20 border border-white/40 shadow-[inset_0_2px_20px_rgba(255,255,255,0.3)] flex items-center justify-center relative overflow-hidden")}
            {...revealProps}
          >
            <div className={cn("absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent")} />
            <ImageIcon className={cn("w-16 h-16 text-white/50 stroke-[1]")} />
          </motion.div>
        </div>
      </section>

      {/* The Roadmap */}
      <section className={cn("py-32 px-6 md:px-12 lg:px-24")}>
        <motion.div className={cn("max-w-3xl mx-auto")} {...revealProps}>
          <h2 className={cn("font-serif text-4xl md:text-5xl mb-24 text-center")}>Как мы создаем праздник</h2>

          <div className={cn("relative border-l border-charcoal/20 ml-4 md:ml-8 space-y-24")}>
            {[
              { step: "01", title: "Знакомство", desc: "Мы встречаемся, чтобы понять ваши желания и мечты." },
              { step: "02", title: "Концепция", desc: "Разрабатываем уникальную идею и стиль вашего события." },
              { step: "03", title: "Подбор локаций", desc: "Находим идеальное место, которое подчеркнет концепцию." },
              { step: "04", title: "Ваш идеальный день", desc: "Вы наслаждаетесь моментом, а мы заботимся обо всем остальном." }
            ].map((item, i) => (
              <motion.div
                key={i}
                className={cn("relative pl-12 md:pl-20")}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.165, 0.84, 0.44, 1] }}
              >
                <div className={cn("absolute -left-[5px] top-2 w-[9px] h-[9px] bg-charcoal rounded-full")} />
                <span className={cn("text-sm font-medium text-charcoal/50 tracking-widest mb-2 block")}>{item.step}</span>
                <h3 className={cn("font-serif text-3xl mb-3")}>{item.title}</h3>
                <p className={cn("text-charcoal/70")}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services List */}
      <section className={cn("py-32 px-6 md:px-12 lg:px-24")}>
        <motion.div className={cn("max-w-4xl mx-auto")} {...revealProps}>
          <h2 className={cn("font-serif text-4xl md:text-5xl mb-16")}>Что включено</h2>

          <ul className={cn("space-y-6")}>
            {[
              "Персональный менеджер 24/7",
              "Разработка индивидуального сценария",
              "Координация в день мероприятия",
              "Подбор и менеджмент подрядчиков",
              "Финансовое планирование и отчетность"
            ].map((service, i) => (
              <motion.li
                key={i}
                className={cn("flex items-center gap-6 text-xl text-charcoal/80")}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <svg width="24" height="2" viewBox="0 0 24 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H24" stroke="#2D2D2D" strokeOpacity="0.4" strokeWidth="2"/>
                </svg>
                {service}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon, BrainCircuit, Hourglass, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BirthdayPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const revealProps: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <div className={cn("flex-1 flex flex-col w-full bg-[#EBE4D5] text-[#2D2D2D] selection:bg-[#2D2D2D] selection:text-white pb-32")}>

      {/* Hero Section */}
      <section className={cn("min-h-[60vh] flex flex-col items-center justify-center text-center px-6 relative")}>
        <motion.h1
          className={cn("font-serif text-6xl md:text-7xl leading-tight tracking-tight text-center max-w-4xl z-10")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.span className="block" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}>Создайте свой</motion.span>
          <motion.span className="block" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}><span className={cn("italic")}>идеальный</span> день рождения</motion.span>
        </motion.h1>
      </section>

      {/* Pain Points */}
      <section className={cn("px-4")}>
        <motion.div
          className={cn("grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-6xl mx-auto")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {[
            { icon: BrainCircuit, title: "Стресс подготовки", desc: "Бесконечные звонки и суета вместо предвкушения праздника." },
            { icon: Hourglass, title: "Нехватка времени", desc: "Попытки вписать организацию в плотный рабочий график." },
            { icon: Sparkles, title: "Шаблонные идеи", desc: "Одни и те же сценарии и банальные решения для каждого гостя." }
          ].map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                }}
                className={cn("p-10 rounded-3xl bg-white/30 backdrop-blur-md border border-white/50 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-[#BCC7D3]/40 hover:shadow-xl hover:border-white/80")}
              >
                <Icon strokeWidth={1.5} className={cn("w-8 h-8 mb-6 text-[#2D2D2D]")} />
                <h3 className={cn("font-serif text-3xl mb-3")}>{point.title}</h3>
                <p className={cn("font-sans text-sm opacity-70 leading-relaxed")}>{point.desc}</p>
              </motion.div>
            );
          })}
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

          <div className={cn("mt-32 mb-32 max-w-2xl mx-auto relative pl-10 border-l border-black/10")}>
            {[
              { step: "01", title: "Знакомство", desc: "Мы встречаемся, чтобы понять ваши желания и мечты." },
              { step: "02", title: "Концепция", desc: "Разрабатываем уникальную идею и стиль вашего события." },
              { step: "03", title: "Подбор локаций", desc: "Находим идеальное место, которое подчеркнет концепцию." },
              { step: "04", title: "Ваш идеальный день", desc: "Вы наслаждаетесь моментом, а мы заботимся обо всем остальном." }
            ].map((item, i) => (
              <motion.div
                key={i}
                className={cn("mb-16 relative")}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.165, 0.84, 0.44, 1] }}
              >
                <div className={cn("absolute -left-[45px] top-2 w-2.5 h-2.5 rounded-full bg-[#BCC7D3]")} />
                <span className={cn("text-sm font-medium text-charcoal/50 tracking-widest mb-2 block")}>{item.step}</span>
                <h3 className={cn("font-serif text-2xl mb-3")}>{item.title}</h3>
                <p className={cn("font-sans text-sm opacity-70")}>{item.desc}</p>
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

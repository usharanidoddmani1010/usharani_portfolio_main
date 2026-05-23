import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Section from "./Section";

const edu = [
  {
    school: "BMS College of Engineering, Bengaluru",
    degree: "BE in Computer Science Engineering",
    period: "2024 – 2028",
    score: "CGPA: 9.157",
  },
  {
    school: "National Public School",
    degree: "12th Board (PCM + Computer Science)",
    period: "2022 – 2024",
    score: "Percentage: 94.15%",
  },
];

export default function Education() {
  return (
    <Section id="education" kicker="Academic journey" title="Education">
      <div className="relative max-w-3xl mx-auto">
        <div
          className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
          style={{ background: "var(--gradient-primary)" }}
        />
        {edu.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`relative mb-10 md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"} pl-14`}
          >
            <div
              className="absolute left-5 md:left-auto md:right-0 top-4 w-4 h-4 rounded-full -translate-x-1/2 md:translate-x-1/2 neon-shadow"
              style={{
                background: "var(--gradient-primary)",
                ...(i % 2 !== 0 ? { right: "auto", left: 0 } : {}),
              }}
            />
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 text-primary text-xs mb-2">
                <GraduationCap size={14} />
                <span>{e.period}</span>
              </div>
              <h3 className="font-semibold text-lg">{e.school}</h3>
              <p className="text-sm text-muted-foreground mb-2">{e.degree}</p>
              <p className="text-sm gradient-text font-semibold">{e.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

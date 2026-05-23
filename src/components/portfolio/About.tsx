import { motion } from "framer-motion";
import { GraduationCap, Code2, Trophy, Brain } from "lucide-react";
import Section from "./Section";

const stats = [
  { icon: Code2, value: "3+", label: "Projects" },
  { icon: Brain, value: "MERN", label: "Stack Developer" },
  { icon: Trophy, value: "Finalist", label: "Hackathon" },
  { icon: GraduationCap, value: "9.157", label: "CGPA" },
];

export default function About() {
  return (
    <Section id="about" kicker="Who I am" title="About Me">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-2">
            Hello! I'm <span className="gradient-text">Usharani</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I am a passionate Computer Science student who enjoys building full-stack applications,
            solving coding problems, learning modern technologies, and contributing to impactful
            projects.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-secondary/50">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Education
              </p>
              <p className="font-medium">BE in Computer Science Engineering</p>
              <p className="text-muted-foreground">BMS College of Engineering, Bengaluru</p>
              <p className="text-primary mt-1">CGPA 9.157 · 2024–2028</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                12th Board
              </p>
              <p className="font-medium">National Public School</p>
              <p className="text-muted-foreground">PCM + Computer Science</p>
              <p className="text-primary mt-1">94.15% · 2022–2024</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div
                className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3"
                style={{ background: "var(--gradient-primary)" }}
              >
                <s.icon size={22} className="text-primary-foreground" />
              </div>
              <p className="text-2xl font-bold gradient-text">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

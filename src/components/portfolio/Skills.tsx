import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  type LucideIcon,
} from "lucide-react";
import Section from "./Section";

type Category = {
  name: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
};

const categories: Category[] = [
  {
    name: "Languages",
    icon: Code2,
    accent: "from-purple-500/40 to-blue-500/40",
    skills: ["Java (DSA)", "Python", "C", "JavaScript"],
  },
  {
    name: "Frontend",
    icon: Layout,
    accent: "from-blue-500/40 to-cyan-500/40",
    skills: ["HTML", "CSS", "React.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: Server,
    accent: "from-pink-500/40 to-purple-500/40",
    skills: ["Node.js", "Express.js"],
  },
  {
    name: "Databases",
    icon: Database,
    accent: "from-emerald-500/40 to-cyan-500/40",
    skills: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    name: "Tools",
    icon: Wrench,
    accent: "from-amber-500/40 to-pink-500/40",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    name: "CS Fundamentals",
    icon: Brain,
    accent: "from-indigo-500/40 to-purple-500/40",
    skills: ["OOP", "DBMS", "Operating Systems", "REST APIs"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" kicker="What I work with" title="Skills & Tech">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-6 group relative overflow-hidden border border-border/60 hover:border-primary/50 transition-colors"
            >
              {/* Glow */}
              <div
                className={`pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${cat.accent} blur-2xl`}
              />
              <div
                className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: "var(--gradient-glow)" }}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-primary-foreground shadow-lg"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-bold text-lg gradient-text">
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, idx) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="relative text-xs px-3 py-1.5 rounded-full bg-secondary/70 border border-border/70 backdrop-blur-sm hover:border-primary/60 hover:text-primary hover:shadow-[0_0_20px_-2px_hsl(var(--primary)/0.5)] transition-all cursor-default"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

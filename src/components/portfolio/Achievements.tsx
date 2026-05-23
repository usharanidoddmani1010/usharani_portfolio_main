import { motion } from "framer-motion";
import { Trophy, Award, BookOpen, Rocket } from "lucide-react";
import Section from "./Section";

const items = [
  { icon: Trophy, title: "Hackathon Finalist", text: "Recognized among top teams in a competitive hackathon." },
  { icon: Rocket, title: "First Hackathon Experience", text: "Built and shipped a working product under tight deadlines." },
  { icon: BookOpen, title: "Strong Academic Performance", text: "Consistent top-tier CGPA in Computer Science Engineering." },
  { icon: Award, title: "Real-World Full Stack Projects", text: "Designed and built multiple production-grade applications." },
];

export default function Achievements() {
  return (
    <Section id="achievements" kicker="Milestones" title="Achievements">
      <div className="grid sm:grid-cols-2 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.02 }}
            className="glass rounded-2xl p-6 flex gap-4"
          >
            <div
              className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center"
              style={{ background: "var(--gradient-primary)" }}
            >
              <it.icon size={22} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

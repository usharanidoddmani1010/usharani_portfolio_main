import { motion } from "framer-motion";
import { ExternalLink, Github, Music2 } from "lucide-react";
import Section from "./Section";

type Project = {
  title: string;
  stack: string[];
  description: string;
  features: string[];
  gradient: string;
  emoji: string;
  github: string;
  demo: string;
  themed?: "music";
};

const projects: Project[] = [
  {
    title: "Virtual Hackathon Platform (HackathonHub)",
    stack: ["MERN", "JWT", "REST APIs"],
    description:
      "Full-stack virtual hackathon platform enabling challenge hosting, team formation, submissions, and judging. JWT-based auth with Admin, Mentor, and Participant roles. Built for college deployment.",
    features: [
      "Auth & Authorization",
      "Team Formation",
      "Submissions",
      "Admin Dashboard",
      "Mentor Evaluation",
    ],
    gradient: "from-purple-500/30 to-blue-500/30",
    emoji: "🚀",
    github: "#",
    demo: "#",
  },
  {
    title: "Spotify Clone",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "Modern Spotify-inspired music streaming web app with a sleek UI and interactive music controls. Built responsive layouts, animated player controls, playlist sections, and a dynamic progress bar to recreate a real-world streaming experience.",
    features: [
      "Modern Spotify UI Clone",
      "Music Player Controls",
      "Responsive Design",
      "Playlist Interface",
      "Interactive Animations",
      "Dynamic Progress Bar",
    ],
    gradient: "from-emerald-500/40 to-green-500/30",
    emoji: "🎵",
    github: "https://github.com/usharanidoddmani1010/My-spotify.git",
    demo: "https://my-spotify-2026.netlify.app/",
    themed: "music",
  },
];

export default function Projects() {
  return (
    <Section id="projects" kicker="Selected work" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className={`glass rounded-2xl p-6 relative overflow-hidden group border border-border/60 hover:border-primary/50 transition-colors ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
            />

            {/* Music-themed decoration */}
            {p.themed === "music" && (
              <>
                <div className="pointer-events-none absolute -right-10 -top-10 w-40 h-40 rounded-full border border-emerald-400/30" />
                <div className="pointer-events-none absolute -right-4 -top-4 w-24 h-24 rounded-full border border-emerald-400/20" />
                <Music2
                  className="pointer-events-none absolute right-6 top-6 text-emerald-400/40 group-hover:text-emerald-400/80 transition-colors"
                  size={28}
                />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 flex items-end gap-1 px-6 opacity-30 group-hover:opacity-70 transition-opacity">
                  {Array.from({ length: 28 }).map((_, idx) => (
                    <motion.span
                      key={idx}
                      className="flex-1 rounded-t bg-gradient-to-t from-emerald-500 to-green-300"
                      animate={{
                        height: ["20%", "90%", "40%", "70%", "20%"],
                      }}
                      transition={{
                        duration: 1.4 + (idx % 5) * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.05,
                      }}
                    />
                  ))}
                </div>
              </>
            )}

            <div className="relative">
              <div className="flex items-start justify-between mb-3 gap-3">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{p.emoji}</div>
                  <h3 className="font-display font-bold text-xl">{p.title}</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-secondary/70 border border-border"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <ul className="grid sm:grid-cols-2 gap-1.5 text-xs text-muted-foreground mb-5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" /> {f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2 flex-wrap">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full text-primary-foreground hover:opacity-90 transition-opacity"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <ExternalLink size={12} /> Live Demo
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-border hover:bg-secondary transition-colors"
                >
                  <Github size={12} /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

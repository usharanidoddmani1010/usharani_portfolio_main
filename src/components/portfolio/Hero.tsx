import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from "lucide-react";

const titles = [
  "MERN Stack Developer",
  "Problem Solver",
  "Open Source Enthusiast",
  "CS Engineering Student",
];

function TypeWriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[i];
    const t = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1400);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setI((p) => (p + 1) % titles.length);
          }
        }
      },
      deleting ? 40 : 80,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="gradient-text">
      {text}
      <span className="inline-block w-[2px] h-6 bg-primary ml-1 animate-pulse align-middle" />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.4fr_1fr] gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-muted-foreground">Available for internships & opportunities</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-4">
            Hi, I'm <span className="gradient-text">Usharani</span>
          </h1>
          <p className="text-xl md:text-2xl font-display mb-4 min-h-[2rem]">
            <TypeWriter />
          </p>
          <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Passionate about building impactful software solutions, modern web applications, and
            innovative tech products. Enthusiastic about web development, open source, AI tools, and
            software engineering.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-primary-foreground neon-shadow"
              style={{ background: "var(--gradient-primary)" }}
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/1xNQa88ITTd46nX81oq1qXhLfdWcgGvZP/view?usp=drivesdk"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium glass hover:bg-secondary transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-border hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
          </div>
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/usharanidoddmanil010", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/usharani-s-39a397374",
                label: "LinkedIn",
              },
              { icon: Mail, href: "mailto:usharanidoddmani018@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="p-3 rounded-full glass hover:scale-110 hover:text-primary transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ background: "var(--gradient-primary)", filter: "blur(30px)", opacity: 0.6 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
  className="absolute inset-0 rounded-full p-[3px]"
  style={{
    background:
      "conic-gradient(from 0deg, var(--neon-purple), var(--neon-cyan), var(--neon-blue), var(--neon-purple))",
  }}
>
  <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
    <img
      src="/profile.jpeg"
      alt="Usharani"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</motion.div>
            {/* Floating badges */}
            {["⚛️", "💻", "🚀"].map((emoji, idx) => (
              <motion.div
                key={idx}
                className="absolute glass rounded-full w-14 h-14 flex items-center justify-center text-2xl"
                style={{
                  top: `${[10, 50, 80][idx]}%`,
                  left: `${[-10, 100, 10][idx]}%`,
                }}
               
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

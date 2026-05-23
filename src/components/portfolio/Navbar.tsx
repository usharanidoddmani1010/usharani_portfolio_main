import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Achievements", id: "achievements" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      const sections = links.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(links[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
        style={{ scaleX, background: "var(--gradient-primary)" }}
      />
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-4 py-2 w-[min(95%,900px)]"
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="font-display font-bold text-lg gradient-text px-3">
            Usharani
          </a>
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative px-3 py-1.5 text-sm rounded-full transition-colors ${
                    active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "var(--gradient-primary)", opacity: 0.18 }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden p-2 rounded-full hover:bg-secondary"
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden flex flex-col gap-1 mt-3 pb-2"
          >
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2 text-sm rounded-lg ${
                    active === l.id ? "bg-secondary text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </motion.nav>
    </>
  );
}

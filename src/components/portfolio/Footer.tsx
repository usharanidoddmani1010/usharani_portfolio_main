import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Designed & Developed by <span className="gradient-text font-semibold">Usharani</span>
        </p>
        <div className="flex items-center gap-2">
          {[
            { icon: Github, href: "https://github.com/usharanidoddmanil010", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/usharani-s-39a397374", label: "LinkedIn" },
            { icon: Mail, href: "mailto:usharanidoddmani018@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="p-2.5 rounded-full glass hover:text-primary transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 p-2.5 rounded-full text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import Section from "./Section";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:usharanidoddmani018@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" kicker="Let's connect" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 space-y-5"
        >
          <h3 className="text-2xl font-bold">Let's build something great</h3>
          <p className="text-sm text-muted-foreground">
            Open to internships, hackathons, open-source collaboration, and SWE roles. I'll reply
            within a day.
          </p>
          <div className="space-y-3 text-sm">
            <a
              href="mailto:usharanidoddmani018@gmail.com"
              className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40 hover:bg-secondary transition-colors"
            >
              <Mail size={16} className="text-primary" />
              usharanidoddmani018@gmail.com
            </a>
            <a
              href="tel:+919964747849"
              className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40 hover:bg-secondary transition-colors"
            >
              <Phone size={16} className="text-primary" />
              +91 99647 47849
            </a>
            <a
              href="https://linkedin.com/in/usharani-s-39a397374"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40 hover:bg-secondary transition-colors"
            >
              <Linkedin size={16} className="text-primary" />
              linkedin.com/in/usharani-s-39a397374
            </a>
            <a
              href="https://github.com/usharanidoddmanil010"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40 hover:bg-secondary transition-colors"
            >
              <Github size={16} className="text-primary" />
              github.com/usharanidoddmanil010
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 space-y-4"
        >
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition-colors"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition-colors resize-none"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-primary-foreground neon-shadow"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Send size={16} />
            {sent ? "Opening your mail app..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Section({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {kicker && (
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{kicker}</p>
          )}
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">{title}</span>
          </h2>
          <div
            className="mx-auto mt-4 h-[2px] w-20 rounded-full"
            style={{ background: "var(--gradient-primary)" }}
          />
        </motion.div>
        {children}
      </div>
    </section>
  );
}

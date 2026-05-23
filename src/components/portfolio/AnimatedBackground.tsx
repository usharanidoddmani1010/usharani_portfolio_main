import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full animate-blob opacity-40"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.25 300 / 0.5), transparent 60%)" }}
      />
      <div
        className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full animate-blob opacity-30"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.2 240 / 0.5), transparent 60%)",
          animationDelay: "3s",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full animate-blob opacity-30"
        style={{
          background: "radial-gradient(circle, oklch(0.82 0.16 200 / 0.5), transparent 60%)",
          animationDelay: "6s",
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Particles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            boxShadow: "0 0 8px currentColor",
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

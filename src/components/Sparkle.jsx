import { motion } from "framer-motion";

export default function Sparkle({
  size = 20, // ⬅️ increased from 14
  color = "#D4AF37",
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0.7, 1.1, 0.7],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 3.2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Vertical ray */}
      <span
        className="absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: size * 0.28,   // ⬅️ thicker
          height: size,
          background: color,
          boxShadow: `0 0 ${size * 1.6}px ${color}`,
        }}
      />

      {/* Horizontal ray */}
      <span
        className="absolute top-1/2 left-0 -translate-y-1/2"
        style={{
          height: size * 0.28,  // ⬅️ thicker
          width: size,
          background: color,
          boxShadow: `0 0 ${size * 1.6}px ${color}`,
        }}
      />

      {/* Diamond core */}
      <span
        className="absolute inset-0"
        style={{
          background: color,
          transform: "rotate(45deg)",
          boxShadow: `
            0 0 ${size * 2.2}px ${color},
            0 0 ${size * 4.5}px ${color}55
          `,
        }}
      />
    </motion.div>
  );
}

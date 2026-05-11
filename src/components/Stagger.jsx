import { motion, useReducedMotion } from "framer-motion";

export default function Stagger({ className = "", children }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        show: {
          transition: prefersReduced
            ? { staggerChildren: 0 }
            : { staggerChildren: 0.12, delayChildren: 0.05 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

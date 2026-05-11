import { motion, useReducedMotion } from "motion/react";

/** Wrap any section to fade+slide into view on scroll */
export default function Reveal({
  as: Tag = "section",
  direction = "up",     // "up" | "down" | "left" | "right"
  delay = 0,            // seconds
  once = true,
  amount = 0.2,         // how much of the element must be visible (0-1)
  className = "",
  children,
}) {
  const prefersReduced = useReducedMotion();
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const distance = direction === "left" || direction === "up" ? 24 : -24;

  const hidden = prefersReduced ? { opacity: 0 } : { opacity: 0, [axis]: distance };
  const show   = prefersReduced
    ? { opacity: 1, transition: { duration: 0.4, delay } }
    : { opacity: 1, [axis]: 0, transition: { duration: 0.6, ease: "easeOut", delay } };

  return (
    <motion.section
      as={Tag}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{ hidden, show }}
    >
      {children}
    </motion.section>
  );
}

"use client";
import { motion, useScroll } from "framer-motion";

function ScrollCheck() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
  );
}

export default ScrollCheck;

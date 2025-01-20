"use client"
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const variants: Variants = {
  initial: { opacity: 0},
  animate: { opacity: 1},
};

const AnimatedText = ({ texts, interval }: { texts: string[]; interval: number }) => {
  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setCurrentText(texts[(index + 1) % texts.length]);
    }, interval);

    return () => clearInterval(intervalId);
  }, [index, texts, interval]);

  return (
    <div className="text-center">
      <AnimatePresence>
        <motion.h1
          key={currentText}
          variants={variants}
          initial="initial"
          animate="animate"
          className="text-2xl font-bold"
        >
          {currentText}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedText;
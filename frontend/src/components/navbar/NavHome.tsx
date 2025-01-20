"use client"

import useIsomorphicLayoutEffect from "../../hooks/UseIsomorphicLayoutEffect";
import gsap from "gsap"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRef, useState } from "react"
import Image from "next/image";

export default function NavHome() {
  const el = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  useIsomorphicLayoutEffect(() => {
    gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      tl.to(el.current, { x: 0, duration: 2, ease: "power4.inOut" }, 0);
    }, el);
  }, []);

  return (
    <motion.div
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.6
      }}
      className="bg-dot-pattern bg-dot w-full h-[50px] bg-white shadow-xl"
    >
      <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
        ref={el}
        className="pointer-events-auto absolute translate-x-[calc(-15rem-2.5vw)]"
      >
        <div className="overflow-hidden pb-1">
          <Link href="#home" className="group inline-flex items-center gap-x-2">
            <motion.div
              
              className="relative flex items-center justify-center"
            >
              <Image
                aria-hidden
                src="./icon-kuromi.svg"
                alt="Globe icon"
                width={12}
                height={12}
                className="h-9 w-9 m-2 transition-transform duration-300 ease-in-out group-hover:rotate-[20deg]"
              />
              
            </motion.div>
            <p className="text-xl font-bold font-sans">Aloee</p>
            <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: hovered ? 1 : 0, x: hovered ? -5 : -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-xl font-bold font-sans"
              >
                There
              </motion.p>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

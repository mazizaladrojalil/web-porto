
"use client"
import {motion} from "framer-motion"
interface DescriptionAnimateProps {
    text:string,
    index: number
}

export const DescriptionAnimate = ({text, index} :DescriptionAnimateProps) => {
    return (
        <motion.span
            key={index}
            initial={{
                filter: "blur(5px)",
                opacity: 0,
                y: 5,
            }}
            animate={{
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 1.8,
                ease: "easeInOut",
                delay: 0.145 * index,
            }}
            className="inline-block"
            >
            {text}&nbsp;
        </motion.span>
    )
}
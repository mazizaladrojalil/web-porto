
"use client"
import {AnimationControls, motion} from "framer-motion"
interface DescriptionAnimateProps {
    text:string,
    index: number,
    isAnimate:boolean
}

export const DescriptionAnimate = ({text, index, isAnimate} :DescriptionAnimateProps) => {
    
    return (
        <motion.span
            key={index}
            initial={{
                filter: "blur(5px)",
                opacity: 0,
                y: 5,
            }}
            animate={isAnimate?{
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
            }:{}}
            transition={{delay:index*0.1}}
            className="inline-block"
            >
            {text}&nbsp;
        </motion.span>
    )
}
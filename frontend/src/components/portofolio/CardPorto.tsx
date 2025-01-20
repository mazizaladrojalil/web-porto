import React from 'react';
import Image from 'next/image';
import { AnimateWords } from '../animation/AnimateWords';
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import {
    portoCardAnimation,
    portoCardImageAnimation,
    portoCardDescriptionAnimation

} from "./animationporto";
import { DescriptionAnimate } from '../animation/DescriptionAnimation';

interface CardProps {
    title: string;
    description: string;
    image: string;
    children?: React.ReactNode;
}

export const CardPorto = ({ title, description, image, children }: CardProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const ctrls = useAnimation()

    useEffect(() => {
        if (isInView) {
        ctrls.start("visible")
        }
    }, [ctrls, isInView])

    return (
        <div className="container">
            <motion.div 
            className="  card w-fit h-full flex flex-col"
            ref={ref}
            animate={ctrls}
            initial="hidden"
            variants={portoCardAnimation}
            aria-hidden={true}
            >
                <AnimateWords style="md:text-2xl text-xl font-bold " title={title} delay={1}/>
                <motion.div
                    ref={ref}
                    animate={ctrls}
                    initial="hidden"
                    variants={portoCardImageAnimation}
                    aria-hidden={true}
                    className='flex justify-center'
                >
                    <Image 
                        src={image}
                        alt={title}
                        width={400}
                        height={400}
                        className="rounded-lg"
                    />
                </motion.div>
                <motion.div
                    ref={ref}
                    animate={ctrls}
                    initial="hidden"
                    variants={portoCardDescriptionAnimation}
                    aria-hidden={true}
                    className='md:min-h-[125px]'
                >
                    {description && (
                        <motion.p>
                            {description.split(" ").map((word, index) => (
                                <DescriptionAnimate key={index} text={word} index={index}/>
                            ))}
                        </motion.p>
                    )}
                    
                </motion.div>
                <div className="mt-4 ">
                        {children}
                    </div>
        </motion.div>
        </div>

    );
};

export default CardPorto;

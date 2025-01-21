import * as motion from "motion/react-client";
import Image from "next/image";
import AnimatedText from "./TextAnimationGreeting";
import "@/styles/pattern.css"

const CircleAnimation = () => {
    const greetingTexts = ["Hello!", "Bonjour!", "Wilujeng Sumping!", "Hola!", "Guten Tag!"];
    return (
        <div className="relative flex items-center justify-center w-full h-full mt-9">
            {/* Chat Bubble */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.8,
                    duration: 0.2,
                }}
                className="absolute top-0 mt-[-15px] z-10 bg-white text-black py-2 px-4 rounded-xl shadow-lg"
            >
                <AnimatedText texts={greetingTexts} interval={2500} />
            </motion.div>

            {/* Animated Circle */}
            <motion.div
                initial={{  scale: 0 }}
                animate={{  scale: 1 }}
                transition={{
                    delay: 0.2,
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.8, bounce: 0.5 },
                }}
                className="pattern-2 absolute z-[-10] rounded-full bg-white shadow-xl md:w-[500px] md:h-[500px] h-[300px] w-[300px]"
            />

            {/* Profile Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 1.2,
                    duration: 0.4,
                }}
                className="relative md:w-[500px] md:h-[500px] h-[300px] w-[300px] overflow-hidden rounded-full"
            >
                <Image
                    src={"/profile.svg"}
                    alt="profile"
                    layout="fill"
                    objectFit="cover"
                    draggable="false"
                />
            </motion.div>
        </div>
    );
};

export default CircleAnimation;

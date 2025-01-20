import { Separator } from "../ui/separator"
import SkillCircle from "../animation/SkillCircleAnimation";
import {motion} from "framer-motion";

export default function About() {
    return(
        <motion.div 
        initial={{ scale: 0 }}
        animate={{scale:1}}
        className="card w-fit"
        >
        <h1 className=" md:text-3xl  uppercase font-bold mt-5 md:text-end text-center">About Me</h1>
                <p className=" text-lg  md:text-justify text-center break-normal leading-7">
                    Hi, I’m Ardelia Calista!<br/>
                    I’m a detail-oriented and organized individual with extensive experience in online administration. Proficient in using tools like Microsoft Office and Google Workspace, I excel in managing tasks such as data entry, scheduling, and providing customer service efficiently and effectively.<br/>
                </p>
                <h1 className=" md:text-2xl font-bold mt-5 md:text-start text-center">My Skill</h1>
                <Separator className="mt-2 mb-2 bg-zinc-200/50 dark:bg-zinc-800/25" />
                <div className="flex flex-wrap justify-center gap-3 mt-5">
                <SkillCircle percentage={80} color="#DA498D" label="Figma" />
                <SkillCircle percentage={85} color="#1E90FF" label="Canva" />
                <SkillCircle percentage={85} color="#1E90FF" label="Excel" />
                </div>
        </motion.div>
    )
};

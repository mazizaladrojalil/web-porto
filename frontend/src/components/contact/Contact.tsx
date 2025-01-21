import { motion } from "framer-motion";
import { AnimateWords } from "../animation/AnimateWords"
import ContactRounded from "./ContactRounded";
import ContactTitle from "./ContactTitle"
import ContactList from "./ContactList";
export default function Contact() {
    return(
            <section 
            id="contact"
            className="contact-section relative z-[0] mt-24 flex min-h-screen w-full flex-col items-center justify-center overflow-x-clip bg-[#DA498D]">
                <ContactRounded/>
                <div className="container flex-col  h-[500px]">
                    <ContactTitle title="Contact" style="text-white text-start"/>
                    <ContactList/>
                </div>
            </section>
    )
};

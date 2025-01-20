"use client";

import About from "../about/About";
import ProfileAnimation from "../animation/ProfileAnimation";
import {motion} from "framer-motion";


export default function HeroProfile() {
    return (
        <div className="container mt-10 flex md:flex-row flex-col justify-center md:items-center gap-5">
            <ProfileAnimation/>
            <About/>
        </div>
    );
}

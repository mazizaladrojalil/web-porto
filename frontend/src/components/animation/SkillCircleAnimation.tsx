import React from "react";
import { motion } from "framer-motion";

type SkillCircleProps = {
  percentage: number; // Persentase skill (0-100)
  color: string; // Warna utama lingkaran
  label: string; // Label skill (misalnya "React", "Node.js")
};

const SkillCircle: React.FC<SkillCircleProps> = ({ percentage, color, label }) => {
  const strokeDasharray = 283; // Panjang lingkaran SVG
  const strokeDashoffset = ((100 - percentage) / 100) * strokeDasharray;

  return (
    <div className="flex flex-col items-center relative group">
      <svg className="md:w-[120px] md:h-[120px] w-24 h-24" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          className="stroke-gray-200 fill-none"
          strokeWidth="10"
        />

        {/* Animated Circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          className="fill-none"
          strokeWidth="10"
          stroke={color}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDasharray} // Default state
          animate={{ strokeDashoffset }} // Animated to target offset
          transition={{
            duration: 1, // Durasi animasi (1 detik)
            ease: "easeInOut", // Jenis easing
          }}
        />

        {/* Label in the Center */}
        <text
          x="50"
          y="55"
          textAnchor="middle"
          className="font-semibold fill-gray-700 text-base"
        >
          {label}
        </text>
      </svg>

      {/* Percentage (shown on hover) */}
      <span className="absolute text-gray-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-1 shadow-md rounded-md">
        {percentage}%
      </span>
    </div>
  );
};

export default SkillCircle;

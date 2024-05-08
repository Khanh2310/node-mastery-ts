"use client";
import { AnimatePresence, motion } from "framer-motion";
import { gradient } from "./Gradient";
import { useEffect } from "react";

export const BackgroundAuth = () => {
    useEffect(() => {
        gradient.initGradient("#gradient-canvas");
      }, []);
      return (
        <AnimatePresence>
        <motion.canvas
          initial={{
            filter: "blur(20px)",
          }}
          animate={{
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.075, 0.82, 0.965, 1],
          }}
          id="gradient-canvas"
          data-transition-in
          className="-z-0 fixed inset-0 h-screen bg-[#c3e4ff]"
        ></motion.canvas>
       
    </AnimatePresence>
      );
    }
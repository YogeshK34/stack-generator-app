import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <motion.div
      className="text-center space-y-4 py-12 px-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl text-white drop-shadow-lg">
        Tech Stack Generator
      </h1>
      <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-white drop-shadow">
        Create awesome cards showcasing your tech stack. Share with your network
        and impress everyone!
      </p>
      <Image src="/logo.png" alt="source image" width="200" height="200" />
    </motion.div>
  );
}

// thisis the code dear
// run karu?? wanna seee?? the outpit?
// oi??
// kaha gayab?

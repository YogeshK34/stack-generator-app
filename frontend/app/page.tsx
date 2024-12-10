"use client";
import { Hero } from "@/components/hero";
import { StackForm } from "@/components/stack-form";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <div className="flex-1 px-4">
        <StackForm />
      </div>
      <footer />
    </motion.main>
  );
}

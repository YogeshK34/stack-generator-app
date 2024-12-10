"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CardPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const { name, stacks } = data
    ? JSON.parse(decodeURIComponent(data))
    : { name: "", stacks: [] };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative">
        <Image
          src="/bg1.jpeg"
          alt="Cartoonish background"
          width={800}
          height={600}
          className="rounded-lg shadow-2xl"
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-3xl font-bold mb-4 text-center">{name}</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Tech Stack:</h3>
              <div className="flex flex-wrap gap-2">
                {stacks.map((stack: { name: string; icon: string }) => (
                  <span
                    key={stack.name}
                    className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full"
                  >
                    <i className={`${stack.icon} mr-1`}></i>
                    {stack.name}
                  </span>
                ))}
              </div>
              <Button
                variant="secondary"
                onClick={() => {
                  router.push("/");
                }}
              >
                Continue creating more cards
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

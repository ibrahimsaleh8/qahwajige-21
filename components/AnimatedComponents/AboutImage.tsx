"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function AboutImage({ imageUrl }: { imageUrl: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-96 lg:h-128 rounded-3xl overflow-hidden shadow-xl border border-[#2b1f1a]/10">
    <Image
          src={imageUrl}
          alt="Hero Image"
          width={800}
          height={600}
          className="w-full h-full object-cover"
          priority
        />
    </motion.div>
  );
}

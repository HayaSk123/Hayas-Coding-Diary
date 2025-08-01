"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-pink-50 px-6">
      <motion.div
        className="text-center max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">
          Haya’s Coding Diary 🧷
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          A cozy little space where I share my daily wins, bugs, fixes, and the joy of building things with code ✨
        </p>
        <Link href="/blog">
          <button className="bg-pink-400 hover:bg-pink-500 text-white font-medium px-6 py-3 rounded-full shadow-md transition duration-300">
            Read My Blog
          </button>
        </Link>
      </motion.div>
    </section>
  );
}

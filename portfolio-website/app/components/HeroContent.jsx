"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
      <div className="flex flex-col items-center max-w-4xl text-center gap-3">
        <motion.p
          className="text-7xl font-bold text-blue-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I&apos;m Davide.
        </motion.p>

        <motion.p
          className="text-4xl font-bold text-fuchsia-300 pb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Full-stack developer based in London.
        </motion.p>

        <motion.p
          className="text-3xl font-medium text-blue-100/70 mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Formerly a nurse, now building with
        </motion.p>

        <motion.p
          className="text-3xl text-fuchsia-400 font-semibold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          React, Node.js and PostgreSQL.
        </motion.p>

        <motion.p
          className="text-3xl font-medium text-blue-100/70"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Currently collaborating with an early-stage AI startup and open to
          junior roles.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/projects">
            <button className="btn-fuchsia font-bold py-3 px-10 rounded-lg text-lg cursor-pointer">
              My projects
            </button>
          </Link>
          <Link href="/about">
            <button className="btn-cyan font-bold py-3 px-10 rounded-lg text-lg cursor-pointer">
              About me
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;

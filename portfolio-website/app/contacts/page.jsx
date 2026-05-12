"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contacts() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        "service_rg6zg2u",
        "template_jctvm6x",
        form,
        "i2QLkMEA7M6Jk7Xj3",
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen py-7">
      <Navbar />
      <div className="h-20" />
      <main className="mx-4 flex-grow flex flex-col items-center pb-10 sm:pb-20">
        <motion.h2
          className="text-center py-16 text-5xl font-bold text-blue-100"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          Get in touch
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 w-full max-w-2xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://www.linkedin.com/in/davide-polizzi-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 py-6 rounded-xl bg-black/50 transition-all duration-200"
            style={{
              border: "2px solid #d946ef",
              boxShadow: "0 0 12px #d946ef33",
            }}
          >
            <FaLinkedin style={{ color: "#f5d0fe", width: 40, height: 40 }} />
            <span className="text-fuchsia-300 text-sm font-semibold">
              LinkedIn
            </span>
          </a>
          <a
            href="https://github.com/Davipol"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 py-6 rounded-xl bg-black/50 transition-all duration-200"
            style={{
              border: "2px solid #22d3ee",
              boxShadow: "0 0 12px #22d3ee33",
            }}
          >
            <FaGithub style={{ color: "#a5f3fc", width: 40, height: 40 }} />
            <span className="text-cyan-300 text-sm font-semibold">GitHub</span>
          </a>
          <button
            onClick={() =>
              document
                .getElementById("contact-form")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col items-center gap-2 py-6 rounded-xl bg-black/50 transition-all duration-200 w-full"
            style={{
              border: "2px solid #d946ef",
              boxShadow: "0 0 12px #d946ef33",
            }}
          >
            <FaEnvelope style={{ color: "#f5d0fe", width: 40, height: 40 }} />
            <span className="text-fuchsia-300 text-sm font-semibold">
              Email me
            </span>
          </button>
        </motion.div>

        <motion.div
          id="contact-form"
          className="w-full max-w-2xl bg-black/50 rounded-xl p-8"
          style={{ border: "1px solid #2d1b69" }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-fuchsia-300 text-2xl font-bold mb-6 text-center">
            Send a message
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your name"
              value={form.from_name}
              onChange={handleChange}
              required
              className="bg-black/40 text-purple-100 placeholder-purple-400 rounded-lg px-4 py-3 text-sm outline-none w-full"
              style={{ border: "1px solid #4c1d95" }}
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your email"
              value={form.from_email}
              onChange={handleChange}
              required
              className="bg-black/40 text-purple-100 placeholder-purple-400 rounded-lg px-4 py-3 text-sm outline-none w-full"
              style={{ border: "1px solid #4c1d95" }}
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="bg-black/40 text-purple-100 placeholder-purple-400 rounded-lg px-4 py-3 text-sm outline-none w-full resize-none"
              style={{ border: "1px solid #4c1d95" }}
            />
            {status === "success" && (
              <p className="text-cyan-400 text-sm text-center">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-fuchsia font-bold py-3 px-8 rounded-lg text-sm cursor-pointer self-center mt-2"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
          </form>
        </motion.div>
      </main>
    </div>
  );
}

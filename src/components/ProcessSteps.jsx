import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardDocumentCheckIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    id: "01",
    title: "Register For Work",
    Icon: ClipboardDocumentCheckIcon,
  },
  {
    id: "02",
    title: "Inspect & Analyze",
    Icon: MagnifyingGlassIcon,
  },
  {
    id: "03",
    title: "Work Processing",
    Icon: Cog6ToothIcon,
  },
  {
    id: "04",
    title: "Handover Clients",
    Icon: InboxIcon,
  },
];

const iconAnimation = {
  animate: { y: [0, -10, 0] },
  transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
};

export default function ProcessSteps() {
  return (
    <div className="bg-white min-h-screen flex flex-col GetFontSol">
      <main className="flex-grow max-w-7xl mx-auto px-6 pt-16 pb-20">
        <h1 className="text-center text-4xl md:text-5xl GetFontSol text-gray-900 leading-tight max-w-4xl mx-auto">
          Quality Handyman Solution
        </h1>

        <section className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-16 max-w-6xl mx-auto GetFontSol">
          {steps.map(({ id, title, Icon }, index) => (
            <div
              key={id}
              className="relative bg-white shadow-lg py-14 px-8 flex flex-col items-center text-center rounded-xl"
            >
              {/* Flipped Top Decorative SVG */}
              <svg
                className="absolute top-0 left-0 right-0 rotate-180"
                fill="none"
                height="40"
                preserveAspectRatio="none"
                viewBox="0 0 100 40"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 40 L50 0 L100 40 Z" fill="#E4FBE4" />
              </svg>

              <motion.div
                className="rounded-full bg-green-100 p-6 mb-8 z-10"
                {...iconAnimation}
              >
                <Icon className="w-12 h-12 text-green-800" />
              </motion.div>

              <h2 className="text-lg font-extrabold text-gray-900 leading-tight tracking-widest uppercase">
                {title.split(" ").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h2>

              {/* Step number badge */}
              <div className="absolute -bottom-6 bg-green-100 border-2 border-green-800 text-green-800 w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold shadow-sm">
                {index + 1}
              </div>

              {/* Optional Bottom Triangle */}
              <svg
                className="absolute bottom-0 left-0 right-0"
                fill="none"
                height="40"
                preserveAspectRatio="none"
                viewBox="0 0 100 40"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0 L50 40 L100 0 Z" fill="white" />
              </svg>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

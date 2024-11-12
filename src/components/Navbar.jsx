import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg"
    >
      <span className="text-white text-2xl font-semibold">Powered by SidLabs</span>
      <div className="flex gap-6 text-white text-sm font-medium">
        <a href="#about" className="hover:underline">About Dr. Manpreet</a>
        <a href="#assessments" className="hover:underline">Assessments</a>
        <a href="#care" className="hover:underline">The CARE Platform</a>
      </div>
    </motion.nav>
  );
}

export default Navbar;

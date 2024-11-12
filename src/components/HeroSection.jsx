import React from "react";
import { motion } from "framer-motion";
import doctorImage from "../assets/doctor.png";

function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center py-16 px-4 bg-white shadow-md rounded-lg mx-4 md:mx-16 mt-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          #TalkToMissMp's Digital Tool for Psychological Assessments
        </h1>
        <p className="text-gray-600 mb-8">
          Built on one of the most trusted & authentic repositories from APA's DSM-5-TR Online Assessment Measures.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Book a Psychological Appointment with Dr. Manpreet
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="mt-8"
      >
        <img src={doctorImage} alt="Psychological Tool" className="w-full max-w-xs rounded-lg shadow-lg" />
      </motion.div>
    </section>
  );
}

export default HeroSection;

import React from "react";
import { motion } from "framer-motion";

function AssessmentCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition transform duration-50 ease-in-out"
      data-aos="zoom-in"
    >
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-center gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Take Test
        </button>
        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition">
          Learn More
        </button>
      </div>
    </motion.div>
  );
}

export default AssessmentCard;

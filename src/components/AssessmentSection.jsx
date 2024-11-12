import React from "react";
import AssessmentCard from "./AssessmentCard";

function AssessmentSection() {
  return (
    <section id="assessments" className="py-12 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center mb-8" data-aos="fade-up">
        <input
          type="text"
          placeholder="Search assessments..."
          className="border border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:border-blue-400 shadow-md"
        />
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-8 lg:px-16">
        <AssessmentCard title="Assessment 1" description="This is assessment 1." />
        <AssessmentCard title="Assessment 2" description="This is assessment 2." />
      </div>
    </section>
  );
}

export default AssessmentSection;

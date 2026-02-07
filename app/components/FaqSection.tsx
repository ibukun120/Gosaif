"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const faqs = [
  {
    question: "How do I know the guards are actually professional?",
    answer:
      "Every guard on GoSaif is vetted, background-checked, and you can view their ratings from real clients. You see their past reviews, photos, and uniforms before booking. If their conduct doesn’t meet our standards, they’re removed from the platform. We don’t just connect you with guards, we guarantee their professionalism.",
  },
  {
    question: "What if a guard doesn't show up or behaves unprofessionally?",
    answer:
      "If a guard fails to show up or behaves unprofessionally, GoSaif immediately assigns a replacement and investigates the incident. Repeat offenders are permanently removed from the platform.",
  },
  {
    question: "Can I actually see what the guards look like before I book?",
    answer:
      "Yes. Each guard profile includes verified photos, uniforms, certifications, and client ratings so you can make an informed decision before booking.",
  },
  {
    question: "How is this different from my usual vendor?",
    answer:
      "Unlike traditional vendors, GoSaif offers transparency, real-time tracking, instant replacements, and verified reviews — all from a mobile app.",
  },
  {
    question: "What about out-of-town events?",
    answer:
      "GoSaif supports out-of-town events by matching you with vetted guards closest to your event location, reducing travel delays and costs.",
  },
  {
    question: "How do I brief the guards before my event?",
    answer:
      "You can share event details, expectations, and special instructions directly through the app before the event begins.",
  },
  {
    question: "What if something goes wrong during the event?",
    answer:
      "GoSaif provides live support and rapid response. You can report incidents instantly, and our team will take immediate action.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full flex justify-center py-20 bg-[#0A6847]">
      <div className="w-full max-w-6xl border-2 border-black rounded-xl p-4 bg-white pb-20 mt-[-130px]">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[18px] md:text-[35px] xxl:text-[45px] font-semibold text-[#353535]">
            Frequently Asked Questions
          </h2>

          <div className="flex items-center gap-2 text-sm font-semibold text-[18px] md:text-[35px] xxl:text-[45px] text-[#353535]">
            <span className="w-5 h-5 bg-green-600 rounded flex items-center justify-center">
              <Check size={18}  className="text-white font-bold"/>
            </span>
            Answers
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Questions */}
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-4 py-3 rounded-md border text-sm lg:text-[22px] transition
                  ${
                    activeIndex === index
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-400 hover:bg-gray-100"
                  }
                `}
              >
                {faq.question}
              </button>
            ))}
          </div>

          {/* Answer */}
          <div className="relative bg-[#F0D800] rounded-md p-6 text-sm leading-relaxed">
            <span className="absolute top-[-18px] left-2 bg-red-400 text-white text-[12px] px-8 py-2 rounded">
              HERE
            </span>

            <p className="mt-4 text-black text-sm lg:text-[22px]">
              {faqs[activeIndex].answer}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

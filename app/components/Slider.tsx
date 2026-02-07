"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Download the app",
    description: "Step 1: Equip yourself with the right protection before heading out.",
    image: "/images/slide1.png",
  },
  {
    title: "Discover Services",
    description: "Step 2: Activate convoy mode to stay connected and protected.",
    image: "/images/slide2.png",
  },
  {
    title: "Smooth sailing on your Booking!",
    description: "Step 3: Enable shield for instant emergency response.",
    image: "/images/slide3.png",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full flex justify-center py-12 bg-white">
      <div className="relative w-full max-w-3xl bg-[#0F6B4A] rounded-xl px-6 py-8 overflow-hidden">

        {/* Title */}
        <h2 className="text-center text-white text-sm md:text-base font-bold">
          {slides[current].title}
        </h2>

        {/* Slide Content */}
        <div className="relative mt-6 h-[325px] flex items-center justify-center">
          <Image
            key={current}
            src={slides[current].image}
            alt="GoSafe step"
            fill
            className="object-cover transition-all duration-500 ease-in-out"
          />
        </div>

        

        {/* Controls */}
        <div className="absolute bottom-4 left-6 flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="w-8 h-8 rounded-full bg-[#0B5A3E] flex items-center justify-center text-white hover:opacity-80"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            className="w-8 h-8 rounded-full bg-[#0B5A3E] flex items-center justify-center text-white hover:opacity-80"
          >
            <ChevronRight size={18} />
          </button>

          {/* Step Indicators */}
          <div className="flex gap-2 ml-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-medium
                  ${
                    current === index
                      ? "bg-orange-400 text-white"
                      : "bg-blue-400 text-white opacity-70"
                  }
                `}
              >
                {index + 1}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

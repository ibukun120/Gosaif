// app/components/WhyUseGoSaif.tsx
import Image from "next/image";
import React from "react";

interface WhyCard {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  link: string;
}

const data = [
  {
    title: "See Who's Coming",
    subtitle: "Photos, physique, uniform, reviews — before you book",
    link: "/images/home/home1.png",
  },
  {
    title: "Clear Pricing",
    subtitle: "No negotiations, no surprises, no last-minute charges",
    link: "/images/home/home2.png",
  },
  {
    title: "Track Their Arrival",
    subtitle: "Live location tracking from when guard is enroute to arrival",
    link: "/images/home/home3.png",
  },
];

export default function WhyUseGoSaif() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <h2 className="text-3xl md:text-4xl lg:text-[45px] font-bold text-[#353535] mb-12 md:mb-16 text-center">
        Why Use GoSaif?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-10 mb-16">
        {data.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-4 border-[#353535] "
          >
            <div className="p-4">
              <h3 className="text-xl md:text-[35px] font-medium text-[#353535] mb-3">
              {card.title}
            </h3>
            <p className="text-[#818181] leading-relaxed text-[20px]">
              {card.subtitle}
            </p>
            </div>

            <div>
              <Image
                src={card.link}
                alt={card.title}
                width={200}
                height={200}
                className="w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-[#0A6847] hover:bg-green-700 text-white text-lg font-bold px-12 py-3 rounded-lg transition-all duration-300 w-[353px]">
        GET STARTED
      </button>
      </div>
    </section>
  );
}

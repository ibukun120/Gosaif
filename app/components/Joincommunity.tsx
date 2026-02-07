import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ImageItem {
  id: number;
  title: string;
  image: string;
  action: string;
}

const images: ImageItem[] = [
  {
    id: 1,
    title: "Personal Security",
    image: "/images/events/event1.png",
    action: "GET STARTED",
  },
  {
    id: 2,
    title: "Professional Guards",
    image: "/images/events/event2.png",
    action: "GET STARTED",
  },
  {
    id: 3,
    title: "24/7 Protection",
    image: "/images/events/event1.png",
    action: "SUBMITE RESUME",
  },
];

const Joincommunity: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-16 py-10 bg-[#0A6847]">
      <h1 className="text-center text-2xl md:text-3xl font-semibold mb-8 text-white">
        Join Our Community
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((item) => (
          <div
            key={item.id}
            className="relative h-[420px] w-full overflow-hidden rounded-xl"
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content Inside Image */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              {/* Top Text */}
              <h3 className="text-white text-xl font-semibold px-8">
                <span>
                  <Image src="/images/Union.png" alt="Logo1" width={18} height={18} className="inline-block mr-3" />
                </span>
                {item.title}
              </h3>

              {/* Bottom Button */}
              <div className="flex justify-center items-center">
                <button className="self-start rounded-md bg-white px-6 py-3 text-sm font-medium tracking-widest text-black transition hover:bg-gray-200">
                {item.action} <span><ArrowRight size={14} className="ml-2 inline-block" /></span>
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Joincommunity;

import Image from "next/image";
import { X, Check } from "lucide-react";

export default function EventPlannersSection() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 text-[#353535]">
          GoSaif Makes it Easier for{" "}
          <span className="text-[#26895D]">Event Planners</span>
        </h2>

        {/* BEFORE GoSaif */}
        <div className="bg-white rounded-xl shadow-xl shadow-gray-400 border flex flex-col md:flex-row gap-8 mb-10">
          
          {/* Text */}
          <div className="flex-1 p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-10 text-[#353535]">
              Before GoSaif
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              {[
                "Guards are generally unprofessional",
                "You hardly know the specific guards coming and their credentials",
                "Endless WhatsApp negotiation and follow-ups",
                "Scrambling to find replacement if things go wrong",
                "No way to know the true location of guards before and during bookings",
                "Guards ignore briefing instructions",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-0.5 text-white bg-[#B33939] rounded-full w-5 h-5 flex items-center justify-center">
                    <X size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="flex-1 relative">
            <Image
              src="/images/events/event1.png"
              alt="Before GoSaif"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* WITH GoSaif */}
        <div className="bg-white rounded-xl shadow-xl shadow-gray-400 border flex flex-col md:flex-row gap-8">
          
          {/* Image */}
          <div className="flex-1 relative ">
            <Image
              src="/images/events/event2.png"
              alt="With GoSaif"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1 p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-10 text-[#353535]">
              With GoSaif
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              {[
                "Vetted professionals with conduct standards enforced",
                "See photos and profiles, the person you book is who arrives",
                "Book in minutes with clear pricing, no back and forth",
                "Instant backup dispatch, we handle it while you focus on your event (coming soon)",
                "Location-tracking while guard is on the way to you and during your booking (coming soon)",
                "Share event brief in-app, chat with guards in-app during booking (coming soon)",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-0.5 text-white bg-[#279A66] rounded-full w-5 h-5 flex items-center justify-center">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <button className="bg-[#0A6847]  text-white text-[15px] font-medium px-12 py-2 rounded mb-14">
            GET STARTED
          </button>
        </div>

      </div>
    </section>
  );
}

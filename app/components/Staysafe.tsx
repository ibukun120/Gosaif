import Image from "next/image";

const features = [
  {
    title: "EVENTS",
    image: "/images/safe1.png",
  },
  {
    title: "CONVOY",
    image: "/images/safe2.png",
  },
  {
    title: "SHIELD",
    image: "/images/safe3.png",
  },
];

export default function Staysafe() {
  return (
    <section className="w-full bg-[#DAFFD2] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Hero */}
        <h1 className="text-2xl md:text-3xl lg:text-[55px] font-semibold text-[#353535]">
          GoSafe, Stay Safe.
        </h1>
        <p className="text-sm lg:text-[35px] text-[#353535] mt-1">
          Start with the app
        </p>

        {/* Phone Mockup */}
        <div className="relative mx-auto mt-8 w-[320px] h-[550px]">
          <Image
            src="/images/phone.png"
            alt="GoSafe App"
            fill
            className="object-contain"
          />
        </div>

        {/* Section Title */}
        <p className="mt-12 text-[#353535] text-[25px] font-semibold">
          Extensive options, tailored for you.
        </p>

        {/* Feature Cards */}
        <div className="mt-6 grid grid-cols-3 gap-4 justify-center items-center">
          {features.map((item) => (
            <div
              key={item.title}
              className="relative bg-[#0F2A1F] rounded md:h-[526px] md:w-[250px] xl:h-[926px] xl:w-[250px] "
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="relative bg-[#0F2A1F] rounded md:h-[526px] md:w-[250px] xl:h-[926px] xl:w-[250px]"
            >
              <span className="absolute bottom-4 left-2 text-xs tracking-[0.35em] text-white rotate-180 writing-mode-vertical">
                {item.title}
              </span>

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="mt-10 px-8 py-3 rounded-[5px] bg-[#0A6847] text-white text-[25px] cursor-pointer font-medium hover:opacity-90 transition w-[353px]">
          GET STARTED
        </button>

      </div>
    </section>
  );
}

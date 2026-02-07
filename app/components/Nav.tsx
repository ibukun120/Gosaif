import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="bg-white py-4 px-8 flex justify-between items-center">
      {/* left logo */}
      <div>
        <Image src="/images/GoSaif1.png" alt="Logo1" width={120} height={40} />
      </div>

      {/* middle links */}
      <div className="flex space-x-6 text-[#2D7F5A] font-semibold">
        <Link href="/" className="text-[#2D7F5A] font-semibold">
          Home
        </Link>
        <Link href="/join" className="text-[#2D7F5A] font-semibold">
          Join Us
        </Link>

        <Link href="/contact" className="text-[#2D7F5A] font-semibold">
          Contact
        </Link>
      </div>

      {/* right logo */}

      <div className="p-2 bg-[#C1F7E0] rounded-lg border border-[#0E6748]">
        <Image src="/images/logoshield.png" alt="Logo2" width={25} height={25} />
      </div>
    </div>
  );
};

export default Nav;

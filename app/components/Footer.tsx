import { ArrowRight, ChevronRight, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        {/* CTA Card */}
        <div className="bg-gradient-to-br from-[#0F7A55] to-[#0A5A3F] rounded-2xl py-14 px-6 text-center shadow-lg">
          <h2 className="text-white text-2xl md:text-4xl font-medium max-w-2xl mx-auto">
            Sit back and let us handle your security,
            <br /> for you.
          </h2>

          <p className="text-white text-sm mt-4 max-w-xl mx-auto">
            GoSaif connects individuals, businesses to vetted protection
            officers, armed or unarmed through a simple mobile experience.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 bg-white text-[#353535] px-18 py-2 rounded-md text-[20px] font-medium hover:opacity-90 transition">
            Try it out
            <ChevronRight size={25} />
          </button>
        </div>

        {/* Main Footer Content */}
        <div className="flex justify-between mt-16 flex-col md:flex-row gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-[#0F7A55]">
              <Image
                src="/images/foot.png"
                alt="Logo1"
                width={120}
                height={40}
              />
            </h3>
            <p className="text-sm text-gray-600 mt-6 max-w-sm">
              GoSaif connects individuals, businesses to vetted protection
              officers, armed or unarmed through a simple mobile experience.
            </p>

            {/* Subscribe */}
            <div className="mt-7 flex items-center max-w-sm border border-black rounded-full overflow-hidden p-1">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <button className="bg-[#0F7A55] text-white px-5 py-2 text-sm flex items-center gap-1 rounded-full">
                Subscribe
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-2xl font-semibold text-[#353535] mb-8">
              Company
            </h4>
            <div className="flex justify-between gap-18">
              <div>
                <ul className="space-y-3 text-[15px] text-[#353535]">
                <li className="hover:text-[#4AAB80] cursor-pointer tracking-wider">
                  Privacy Policy
                </li>
                <li className="hover:text-[#4AAB80] cursor-pointer tracking-wider">
                  How it works
                </li>
                <li className="hover:text-[#4AAB80] cursor-pointer tracking-wider">
                  Contact us
                </li>
              </ul>

              {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <span className="w-8 h-8 bg-black text-white rounded flex items-center justify-center text-xs cursor-pointer">
                <Instagram size={30} />
              </span>
              <span className="w-8 h-8 bg-black text-white rounded flex items-center justify-center text-xs cursor-pointer">
                TT
              </span>
              <span className="w-8 h-8 bg-black text-white rounded flex items-center justify-center text-xs cursor-pointer">
                X
              </span>
            </div>
              </div>

              <ul className="space-y-3 text-[15px] text-gray-600">
                <li className="hover:text-[#4AAB80] cursor-pointer tracking-wider">FAQs</li>
                <li className="hover:text-[#4AAB80] cursor-pointer tracking-wider">
                  Delete Account
                </li>
                <li className="text-[#4AAB80] font-medium cursor-pointer tracking-wider">
                  Download App
                </li>
              </ul>
            </div>
          </div>

          
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 bg-black text-white rounded px-6 py-4 flex flex-col md:flex-row items-center justify-between text-[16px]">
          <span>© 2026 &nbsp; All rights reserved</span>
          <span className="hover:underline cursor-pointer mt-2 md:mt-0">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
}

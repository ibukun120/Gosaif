import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-16">

        {/* CTA Card */}
        <div className="bg-gradient-to-br from-[#0F7A55] to-[#0A5A3F] rounded-2xl py-14 px-6 text-center shadow-lg">
          <h2 className="text-white text-2xl md:text-3xl font-semibold max-w-2xl mx-auto">
            Sit back and let us handle your security,
            <br /> for you.
          </h2>

          <p className="text-white/80 text-sm mt-4 max-w-xl mx-auto">
            GoSaif connects individuals, businesses to vetted protection officers,
            armed or unarmed through a simple mobile experience.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 bg-white text-[#0F7A55] px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition">
            Try it out
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-[#0F7A55]">
              <Image src="/images/foot.png" alt="Logo1" width={120} height={40} />
            </h3>
            <p className="text-sm text-gray-600 mt-4 max-w-sm">
              GoSaif connects individuals, businesses to vetted protection officers,
              armed or unarmed through a simple mobile experience.
            </p>

            {/* Subscribe */}
            <div className="mt-6 flex items-center max-w-sm border border-black rounded-full overflow-hidden p-1">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <button className="bg-[#0F7A55] text-white px-5 py-2 text-sm flex items-center gap-1 rounded-full">
                Subscribe
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-[#0F7A55] cursor-pointer">Privacy Policy</li>
              <li className="hover:text-[#0F7A55] cursor-pointer">How it works</li>
              <li className="hover:text-[#0F7A55] cursor-pointer">Contact us</li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-4">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-[#0F7A55] cursor-pointer">FAQs</li>
              <li className="hover:text-[#0F7A55] cursor-pointer">Delete Account</li>
              <li className="text-[#0F7A55] font-medium cursor-pointer">
                Download App
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <span className="w-8 h-8 bg-black text-white rounded flex items-center justify-center text-xs cursor-pointer">
                IG
              </span>
              <span className="w-8 h-8 bg-black text-white rounded flex items-center justify-center text-xs cursor-pointer">
                TT
              </span>
              <span className="w-8 h-8 bg-black text-white rounded flex items-center justify-center text-xs cursor-pointer">
                X
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 bg-black text-white rounded px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs">
          <span>© 2026 &nbsp; All rights reserved</span>
          <span className="hover:underline cursor-pointer mt-2 md:mt-0">
            Terms of Service
          </span>
        </div>

      </div>
    </footer>
  );
}

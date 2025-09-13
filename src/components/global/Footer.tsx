import React from "react";

const Footer = () => (
  <footer className="w-full bg-white flex items-center justify-center py-12">
    <div className="w-full max-w-[90vw] bg-black text-white rounded-[2.5rem] p-20 min-h-[40rem] flex flex-col gap-8 items-center justify-center border border-[#222] shadow-2xl">
      {/* Newsletter Signup */}
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex-1 flex flex-col gap-4 items-start">
          <div className="text-2xl font-semibold">Stay updated with ROI news</div>
          <form className="w-full flex gap-2">
            <input type="email" placeholder="Your Email Address" className="flex-1 rounded-full px-6 py-3 bg-[#222] text-white placeholder:text-gray-400 focus:outline-none" />
            <button type="submit" className="rounded-full bg-[#FF9933] text-black px-6 py-3 font-bold text-xl flex items-center justify-center">
              <i className="fas fa-arrow-right transform rotate-[-45deg]" aria-hidden="true"></i>
            </button>
          </form>
          {/* Social Icons */}
          <div className="flex gap-3 mt-2">
            {/* Replace with actual icons as needed */}
            <span className="bg-[#222] rounded-full p-2">F</span>
            <span className="bg-[#222] rounded-full p-2">X</span>
            <span className="bg-[#222] rounded-full p-2">in</span>
            <span className="bg-[#222] rounded-full p-2">Y</span>
            <span className="bg-[#222] rounded-full p-2">IG</span>
          </div>
        </div>
        {/* Footer Links */}
        <div className="flex-1 flex flex-row justify-center gap-16">
          <div className="flex flex-col gap-2 border-r border-white pr-8">
            <span>Services</span>
            <span>Work</span>
            <span>About</span>
            <span>Culture</span>
            <span>Meet The Risers</span>
          </div>
          <div className="flex flex-col gap-2 border-r border-white pr-8">
            <span>Testimonials</span>
            <span>Blog</span>
            <span>Webinars</span>
            <span>Careers</span>
          </div>
          <div className="flex flex-col gap-2 pr-8">
            <span>Sheffield</span>
            <span>Manchester</span>
            <span>London</span>
            <span>New York</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
      {/* Large Logo */}
      <div className="w-full text-center mt-8">
        <span className="text-[7vw] font-extrabold tracking-tight leading-none">ROI Makers</span>
      </div>
      {/* Legal & Credits */}
      <div className="w-full flex flex-wrap justify-between items-center text-xs mt-6 gap-2">
        <div>
          &copy; {new Date().getFullYear()} ROI Makers. All rights reserved &bull; Company Number 12345678 &bull; VAT Registered GB 123456789 &bull; <a href="#" className="underline">Privacy Policy</a> &bull; <a href="#" className="underline">Terms &amp; conditions</a>
        </div>
        <div className="text-right">Website MadeByROI</div>
      </div>
    </div>
  </footer>
);

export default Footer;

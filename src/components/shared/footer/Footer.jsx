import React from "react";
import insta from "../../../assets/instagram.png";
import fb from "../../../assets/facebook.png";
import x from "../../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#244d3f] text-primary-content px-5 py-10 md:px-10 lg:px-16 text-center">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          KeenKeeper
        </h2>
        <p className="text-sm sm:text-base md:max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div>
          <p className="mb-2 text-sm sm:text-base">Social Links</p>
          <div className="flex justify-center gap-4">
            <img
              className="w-5 sm:w-6 cursor-pointer hover:scale-110 transition"
              src={insta}
              alt=""
            />
            <img
              className="w-5 sm:w-6 cursor-pointer hover:scale-110 transition"
              src={fb}
              alt=""
            />
            <img
              className="w-5 sm:w-6 cursor-pointer hover:scale-110 transition"
              src={x}
              alt=""
            />
          </div>
        </div>
      </div>
      <hr className="w-full border-white/20 my-6" />
      <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between text-xs sm:text-sm">
        <p>© 2026 KeenKeeper. All rights reserved.Developed by MD Ratul</p>
        <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
          <li className="cursor-pointer hover:underline">Privacy Policy</li>
          <li className="cursor-pointer hover:underline">Terms of Service</li>
          <li className="cursor-pointer hover:underline">Cookies</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

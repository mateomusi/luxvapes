import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-[#9e9e9e]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 text-[#69b4ff] ">COMPANIA</p>
          <ul className="flex flex-col gap-1 text-[#9e9e9e]">
            <li>Home</li>
            <li>Acerca De</li>
            <li>Politica de privacidad</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 text-[#69b4ff]">CONTACTANOS</p>
          <ul className="flex flex-col gap-1 text-[#9e9e9e]">
            <li>+1-212-456-7890</li>
            <li>contact@luxvapes.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center text-[#9e9e9e]">
          Copyright 2024@ luxvapes.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

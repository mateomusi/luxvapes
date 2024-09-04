import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          src={assets.exchange_icon}
          className="w-12 m-auto mb-5 bg-[#69b4ff] rounded-xl p-1"
          alt=""
        />
        <p className=" text-[#e0ffff] font-semibold">
          Política de Cambio Fácil
        </p>
        <p className=" text-[#69b4ff]">
          Ofrecemos una política de cambio sin complicaciones
        </p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5 " alt="" />
        <p className=" text-[#e0ffff] font-semibold">
          Política de Devolución en 7 Días
        </p>
        <p className=" text-[#69b4ff]">
          Proveemos una política de devolución gratuita de 7 días
        </p>
      </div>
      <div>
        <img
          src={assets.support_img}
          className="w-12 m-auto mb-5 bg-[#69b4ff] rounded-xl p-1"
          alt=""
        />
        <p className=" text-[#e0ffff] font-semibold">
          Mejor Atención al Cliente
        </p>
        <p className=" text-[#69b4ff]">Proveemos atención al cliente 24/7</p>
      </div>
    </div>
  );
};

export default OurPolicy;

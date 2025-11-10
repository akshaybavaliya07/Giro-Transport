import React from "react";
import { INFO_SECTION } from "../constants";

const InfoSection = () => {
  return (
    <section className="py-14 md:py-20 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col gap-16 md:gap-24">
        {INFO_SECTION.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 md:gap-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 flex flex-col-reverse md:flex-col justify-start text-center md:text-left">
              <div className="max-w-[18rem] mx-auto md:mx-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4 leading-snug">
                  {section.title}
                </h2>
                <p className="mb-6 md:mb-8 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                  {section.description}
                </p>
                <button className="bg-[#4fa9db] hover:bg-[#3f91c1] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-4xl font-semibold cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                  {section.buttonText}
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-start items-center md:items-start">
              <img
                src={section.image}
                alt={section.title}
                className="w-[80%] rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;

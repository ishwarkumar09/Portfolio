import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";

import { useSelector } from "react-redux";

function Experiences() {
 const {loading , portfolioData} = useSelector((state) => state.root)
const {experiences} = portfolioData;
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <SectionTitle title="Experiences" />

      <div className="flex  py-10 sm:flex-col sm:gap-5">
        <div className="flex flex-col gap-10 border-l-4 border-[#135e4c82] w-1/3 sm:flex-row  sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
              key={index}
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-1 bg-[#1a7f5a44] rounded-lg py-3 "
                    : "text-white"
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10 px-10 text-center">
            <h1 className="text-secondary text-xl">
                 {experiences[selectedItemIndex].title}
            </h1>
            <h1 className="text-tertiary text-xl">
                 {experiences[selectedItemIndex].company}
            </h1>
            <p className="text-white">
          {experiences[selectedItemIndex].description} 
            </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;

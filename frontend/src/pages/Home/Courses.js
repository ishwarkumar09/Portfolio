import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";


function Courses() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
    <SectionTitle title="Courses" />

    <div className="flex  py-10  sm:flex-col sm:gap-5">
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
     <div className="flex items-center justify-center gap-10 px-10 sm:flex-col" >
       
     <div className="flex flex-col gap-10 sm:text-center ">
          <h1 className="text-secondary text-xl">
               {experiences[selectedItemIndex].title}
          </h1>
       
          <p className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p>
      </div>
      <img src="https://static.vecteezy.com/system/resources/previews/011/153/360/original/3d-web-developer-working-on-project-illustration-png.png" alt="" className="h-60 w-72"/>
     </div>
    </div>
  </div>
  )
}

export default Courses
import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";


function Projects() {
  const {loading ,portfolioData} = useSelector((state) => state.root)

  const {projects} = portfolioData ;
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
    <SectionTitle title="Projects" />

    <div className="flex  py-10 sm:flex-col sm:gap-5">
      <div className="flex flex-col gap-10 border-l-4 border-[#135e4c82] w-1/3 sm:flex-row  sm:overflow-x-scroll sm:w-full">
        {projects.map((project, index) => (
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
              {project.title}
            </h1>

          </div>
        ))}
      </div>
     <div className="flex items-center px-10 justify-center gap-10 sm:flex-col" >
        <img src={projects[selectedItemIndex].image} alt="" className="h-60 w-72"/>
     <div className="flex flex-col gap-10 sm:text-center ">
          <h1 className="text-secondary text-xl">
               {projects[selectedItemIndex].title}
          </h1>
         <p className="text-white">{projects[selectedItemIndex].description}</p>
          <p className="text-white">
         {projects[selectedItemIndex].technologies} 
          </p>
          <p className="text-white">
         {projects[selectedItemIndex].link} 
          </p>
      </div>
     </div>
    </div>
  </div>
  )
}

export default Projects
import React from "react";
import LeftSider from "./LeftSider";

function Footer() {
  return (
    <div className="py-10">
      <div className="h-[1px] w-full bg-gray-700"></div>
      <LeftSider />
      <div className="flex items-center justify-center flex-col mt-5">
         <p className="text-white">
           Designed and Developed By   
         </p>
         <p className="text-tertiary">
            Ishwar Kumar
         </p>
      </div>
    </div>
  );
}

export default Footer;

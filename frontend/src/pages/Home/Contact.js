import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "Ishwar Kumar",
    age: "22",
    gender: "male",
    email: "ishwarborana4600@gmail.com",
    mobile: "+91-9079880265",
    country: "India",
  };
  return (
    <div>
      <SectionTitle title={"Say Hello!"} />

     <div className="flex justify-between items-center sm:flex-col">

        <div className="flex flex-col gap-1 ">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(user).map((key,idx) => (
            <p className="ml-5" key={idx}>
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">{user[key]} ,</span>
            </p>
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <img src="https://cdn3.iconfinder.com/data/icons/web-development-168/512/Man_Web_Developer3.png" alt="#" className="h-[250px]" />

      </div>
    </div>
  );
}

export default Contact;

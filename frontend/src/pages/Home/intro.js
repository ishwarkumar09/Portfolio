import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full text-end">
        <button
          className="border-2 border-tertiary text-tertiary px-5 py-2 rounded"
          onClick={() => {
            navigate("/admin-login");
          }}
        >
          Admin
        </button>
      </div>
      <div className="h-[80vh] bg-primary flex flex-col items-start sm:mx-5 justify-center gap-7 py-5">
        <h1 className="text-white">{welcomeText || ""}</h1>
        <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
          {`${firstName} ${lastName}` || " "}
        </h1>
        <h1 className="text-7xl sm:text-3xl text-white font-semibold">
          {caption || ""}
        </h1>
        <p className="text-white ">{description || ""}</p>
      </div>
    </div>
  );
}

export default Intro;

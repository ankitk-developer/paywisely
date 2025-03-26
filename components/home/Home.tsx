import React from "react";

import Image from "next/image";
import ConcentricCircles from "@/shared/casuals/ConcentricCircles";
import GetStarted from "./GetStarted";

const Home = () => {
  return (
    <div className="font-nunito">
      <GetStarted />
      <div className=" text-4xl mt-2 font-extrabold text-main text-center">
        Spend Smarter <br /> Save More
      </div>
      <div className="absolute bottom-8 w-full">
        <div className="flex justify-center">
          <button
            className="w-[80%] border-[1px] font-semibold border-black rounded-full px-4 py-[14px] text-2xl shadow-2xl text-white"
            style={{
              background: "linear-gradient(145deg, #799c9c, #678c8c)",
            }}
          >
            Get Started
          </button>
        </div>
        <div className="flex justify-center mt-2">
          Already an existing user ? <span className="ml-1"> Login</span>
        </div>
      </div>
    </div>
  );
};

export default Home;

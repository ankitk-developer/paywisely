import ConcentricCircles from "@/shared/casuals/ConcentricCircles";
import Image from "next/image";
import React from "react";

const GetStarted = () => {
  return (
    <div className="">
      <div
        style={{ clipPath: "polygon(0 1%, 100% 0, 100% 100%, 0 90%)" }}
        className="w-screen h-[70vh] bg-[#d9f7f4]"
      ></div>
      <div className="absolute w-full -top-[20%]">
        <ConcentricCircles />
      </div>
      <div>
        <Image src="/images/get-started/man.png" alt="hero" width={500} height={500} className="absolute top-[15%]" />
      </div>
      <div>
        <Image
          src={"/images/get-started/Coint.png"}
          alt="hero"
          width={80}
          height={80}
          className="absolute top-[22%] right-[11%]"
        />
      </div>
      <div>
        <Image
          src={"/images/get-started/Donut.png"}
          alt="hero"
          width={70}
          height={70}
          className="absolute top-[17%] left-[12%]"
        />
      </div>
      {/* <GetStartedCarousel /> */}
    </div>
  );
};

export default GetStarted;

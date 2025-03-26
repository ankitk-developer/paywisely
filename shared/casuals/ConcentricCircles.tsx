import React from "react";

const ConcentricCircles = () => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      {/* Outer Circle */}
      <circle cx="100" cy="100" r="100" fill="none" stroke="white" strokeWidth="4" opacity={"0.3"} />

      {/* 2nd Circle */}
      <circle cx="100" cy="100" r="72" fill="none" stroke="white" strokeWidth="4" opacity={"0.3"} />

      {/* 3rd Circle */}
      <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="4" opacity={"0.3"} />

      {/* Inner Circle */}
      {/* <circle cx="100" cy="100" r="15" fill="black" /> */}
    </svg>
  );
};

export default ConcentricCircles;

import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-screen h-screen bg-secondary">{children}</div>;
};

export default HomeLayout;

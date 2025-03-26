"use client";
import React, { useEffect } from "react";
import SplashScreen from "./SplashScreen";
import Home from "./Home";

const Root = () => {
  // set state for splash screen
  const [splashScreen, setSplashScreen] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
  }, []);
  return <div>{splashScreen ? <SplashScreen /> : <Home />}</div>;
};

export default Root;

"use client";
import React, { useEffect } from "react";
import SplashScreen from "./SplashScreen";
import Home from "./Home";
import { useRouter } from "next/navigation";

const Root = () => {
  // set state for splash screen
  const [splashScreen, setSplashScreen] = React.useState(true);
  //next router
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
      router.replace("/home");
    }, 3000);
  }, []);
  return <div>{splashScreen && <SplashScreen />}</div>;
};

export default Root;

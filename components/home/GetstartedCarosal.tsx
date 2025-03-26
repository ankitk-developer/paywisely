"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GetStartedCarousel = () => {
  const slides = [
    {
      title: "Stay on Top of Your Finances",
      subtitle: "Easily track income and expenses with minimal effort.",
      image: "/images/get-started/stats.svg",
    },
    {
      title: "Budget Smarter with AI",
      subtitle: "Plan budgets tailored to your lifestyle and goals.",
      image: "/images/get-started/budget.svg",
    },
    {
      title: "Make Informed Financial Decisions",
      subtitle: "Visualize your finances with graphs and statistics.",
      image: "/images/get-started/money.svg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-sm p-6 rounded-2xl">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="text-center flex flex-col items-center justify-center p-4 h-full">
              <img src={slide.image} alt={slide.title} className="rounded-xl w-full h-full object-cover mb-4" />
              <h2 className="text-white text-2xl font-semibold mt-2">{slide.title}</h2>
              <p className="text-indigo-200 text-base mt-2">{slide.subtitle}</p>
            </div>
          ))}
        </Slider>
        <div className="absolute bottom-4 w-[100%] left-0">
          <div className="w-[80%] mx-auto">
            <button className="mt-6 w-full bg-white text-indigo-600 font-semibold py-3 rounded-xl shadow-md hover:bg-indigo-100 transition">
              Get Started
            </button>
          </div>
          <div className="flex justify-center mt-1">
            Already an existing user ? <span className="ml-1"> Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedCarousel;

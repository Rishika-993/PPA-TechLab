import { Carousel } from "@material-tailwind/react";
import Illustration from "../../assets/Illustration.svg";

export default function Hero() {
  return (
    <Carousel
    prevArrow={({ handlePrev }) => (
      <div
       onClick={handlePrev}
      >
      </div>
    )}
    nextArrow={({ handleNext }) => (
      <div       
        onClick={handleNext}
      >   
      </div>
    )}
    navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
              activeIndex === i ? "w-3 h-3 rounded-full bg-[#4CAF4F]" : "w-3 h-3 rounded-full bg-[#4CAF4F] bg-opacity-50"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )}
     autoplay='true' autoplayDelay={1500} loop='true' className="bg-[#F5F7FA] w-full lg:h-[85vh] h-[50vh] overflow-y-hidden  ">
      <div>
        <div className="flex flex-row p-10 pt-12 space-x-4 lg:space-x-0 md:p-20 lg:p-40">
          <div className="w-1/2 text-left md:py-28 lg:py-20">
            <div className="text-xl pt-20 md:pt-0 md:text-3xl lg:text-5xl font-inter font-semibold text-[#4D4D4D]">
              Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span>
            </div>
            <p className="mt-2 md:mt-4 text-[#717171] text-xs md:text-base">Where to grow your business as a photographer: site or social media?</p>
            <button className="bg-[#4CAF4F] text-white px-5 py-2 text-sm md:text-base md:px-8 md:py-3 rounded mt-5 max-w-32">Register</button>
          </div>
          <div className="w-1/2 flex justify-end items-center">
            <img src={Illustration} alt="illustration" className="h-100 w-100 object-cover " />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row p-10 pt-12 space-x-4 lg:space-x-0 md:p-20 lg:p-40">
          <div className="w-1/2 text-left md:py-28 lg:py-20">
            <div className="text-xl pt-20 md:pt-0 md:text-3xl lg:text-5xl font-inter font-semibold text-[#4D4D4D]">
              Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span>
            </div>
            <p className="mt-2 md:mt-4 text-[#717171] text-xs md:text-base">Where to grow your business as a photographer: site or social media?</p>
            <button className="bg-[#4CAF4F] text-white px-5 py-2 text-sm md:text-base md:px-8 md:py-3 rounded mt-5 max-w-32">Register</button>
          </div>
          <div className="w-1/2 flex justify-end items-center">
            <img src={Illustration} alt="illustration" className="h-100 w-100 object-cover " />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row p-10 pt-12 space-x-4 lg:space-x-0 md:p-20 lg:p-40">
          <div className="w-1/2 text-left md:py-28 lg:py-20">
            <div className="text-xl pt-20 md:pt-0 md:text-3xl lg:text-5xl font-inter font-semibold text-[#4D4D4D]">
              Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span>
            </div>
            <p className="mt-2 md:mt-4 text-[#717171] text-xs md:text-base">Where to grow your business as a photographer: site or social media?</p>
            <button className="bg-[#4CAF4F] text-white px-5 py-2 text-sm md:text-base md:px-8 md:py-3 rounded mt-5 max-w-32">Register</button>
          </div>
          <div className="w-1/2 flex justify-end items-center">
            <img src={Illustration} alt="illustration" className="h-100 w-100 object-cover " />
          </div>
        </div>
      </div>
    </Carousel>
  );
}
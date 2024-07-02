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
     autoplay='true' className="bg-[#F5F7FA] w-full sm:h-[85vh] h-[50vh] overflow-y-hidden  ">
      <div>
        <div className="flex flex-row p-40">
          <div className="w-1/2 text-left md:py-28 lg:py-20">
            <div className="text-2xl md:text-3xl lg:text-5xl font-inter font-semibold text-[#4D4D4D]">
              Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span>
            </div>
            <p className="mt-4 text-[#717171]">Where to grow your business as a photographer: site or social media?</p>
            <button className="bg-[#4CAF4F] text-white px-8 py-3 rounded mt-5 max-w-32">Register</button>
          </div>
          <div className="w-1/2 flex justify-end">
            <img src={Illustration} alt="illustration" className="h-100 w-100 object-cover " />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row p-40">
          <div className="w-1/2 text-left md:py-28 lg:py-20">
            <div className="text-2xl md:text-3xl lg:text-5xl font-inter font-semibold text-[#4D4D4D]">
              Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span>
            </div>
            <p className="mt-4 text-[#717171]">Where to grow your business as a photographer: site or social media?</p>
            <button className="bg-[#4CAF4F] text-white px-8 py-3 rounded mt-5 max-w-32">Register</button>
          </div>
          <div className="w-1/2 flex justify-end">
            <img src={Illustration} alt="illustration" className="h-100 w-100 object-cover " />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row p-40">
          <div className="w-1/2 text-left md:py-28 lg:py-20">
            <div className="text-2xl md:text-3xl lg:text-5xl font-inter font-semibold text-[#4D4D4D]">
              Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span>
            </div>
            <p className="mt-4 text-[#717171]">Where to grow your business as a photographer: site or social media?</p>
            <button className="bg-[#4CAF4F] text-white px-8 py-3 rounded mt-5 max-w-32">Register</button>
          </div>
          <div className="w-1/2 flex justify-end">
            <img src={Illustration} alt="illustration" className="h-100 w-100 object-cover " />
          </div>
        </div>
      </div>
    </Carousel>
  );
}
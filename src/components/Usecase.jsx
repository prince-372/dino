import React from "react";
import crocoWithGlasses from "../assets/image/diyno2.webp";
import crocoWithCycle from "../assets/image/dino-cycle.webp";
import utilityTree from "../assets/image/utility-tree.webp";
import utilityLayer from "../assets/image/utilitylayer.webp";
import TimelineLayer from "../assets/image/roadmaplayer.webp";

const Usecase = () => {
  return (
    <div className="relative overflow-x-clip ">
      <img
        src={utilityLayer}
        alt="utilityLayer"
        className=" -translate-y-2 w-full"
      />
      <div className="container mx-auto xl:max-w-[1038px] xl:px-3 px-6 relative z-10">
        <h2 className="font-chewy sm:text-[64px] text-[35px] font-normal text-white text-center leading-[132%]">
          Utility and Usecase
        </h2>
        <div className="relative z-10 xl:mt-[158px] max-lg:overflow-hidden lg:mt-[100px] md:mt-[70px] mt-[40px] rounded-[20px] border border-solid lg:h-[266px] border-white bg-[#09655A] lg:py-[62px] pt-[40px] lg:pl-[39px] lg:pr-[26px] px-[20px] flex lg:justify-between lg:flex-row flex-col items-center lg:items-start">
          <div data-aos="fade-down">
            <p className="max-w-[681px] xl:text-[32px] lg:text-[29px] sm:text-[32px] text-[23px] font-normal text-white leading-[119%] font-balsamiq text-center lg:text-start">
              We are going to work hard in otder to add{" "}
              <span className="text-[#8EC627]">$</span>
              <span className="text-[#FBA11D]">D</span>
              <span className="text-[#23AAAC]">I</span>
              <span className="text-[#D45B07]">N</span>
              <span className="text-[#FB5352]">O</span> to main platforms as a
              form of payment
            </p>
            <p className="max-w-[695px] xl:text-[32px] lg:text-[29px] sm:text-[32px] text-[23px] font-normal text-white mt-[28px] leading-[120%] font-balsamiq text-center lg:text-start">
              You will be able to buy a lot of things with{" "}
              <span className="text-[#8EC627]">$</span>
              <span className="text-[#FBA11D]">D</span>
              <span className="text-[#23AAAC]">I</span>
              <span className="text-[#D45B07]">N</span>
              <span className="text-[#FB5352]">O</span>
            </p>
          </div>
          <img
            src={crocoWithGlasses}
            alt="crocoWithGlasses"
            className="sm:max-w-[253px] max-w-[160px] myaeroplane lg:mt-[-132px] mt-6  lg:h-[332px] w-full"
          />
        </div>
        <div className="relative max-lg:overflow-hidden z-20 lg:mt-[125px] mt-[60px] rounded-[20px] border border-solid bg-[#09655A] lg:py-[95px] pt-[40px] lg:pr-[27px] lg:pl-0 px-5 lg:h-[266px] border-white flex lg:justify-between lg:flex-row flex-col-reverse lg:items-center items-center ">
          <img
            src={crocoWithCycle}
            alt="crocoWithCycle"
            className="sm:max-w-[267px] myaeroplane max-w-[160px] lg:h-[334px] lg:translate-y-[-35px] lg:mt-[-75px] mt-7 lg:ml-[-5px]"
          />
          <div data-aos="fade-down">
            <p className="sm:text-[32px] text-[25px] font-normal lg:text-end text-center text-white leading-[119%] font-balsamiq">
              We are going to have staking and buyback/ burning mechanism
            </p>
          </div>
        </div>
        <img
          src={utilityTree}
          alt="utilityTree"
          className="lg:max-w-[320px] max-w-[200px] w-full absolute lg:right-[-20%] right-[-14%] bottom-0"
        />
      </div>

      <img
        src={TimelineLayer}
        alt="TimelineLayer"
        className=" translate-y-5 sm:mt-[168px] mt-[70px] w-full"
      />
    </div>
  );
};

export default Usecase;

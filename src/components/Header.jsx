import React from "react";
import Aeroplane from "../assets/image/aeroplane.webp";
import CycleDino from "../assets/image/croco-with-cycle.webp";
import SmallCycle from "../assets/image/croco-with-glass.webp";
import Mynav from "./Mynav";

const Hero = () => {
  return (
    <div className="bg-bgheader bg-no-repeat bg-center bg-cover ">
      <div className=" relative sm:pb-[385px] pb-[270px] overflow-hidden">
        <Mynav />
        <div className="container mx-auto xl:max-w-[1157px] xl:px-3 px-6 lg:pt-[28px] pt-[20px]">
          <div className="flex flex-row flex-wrap lg:mt-[83px] mt-[45px] justify-between ">
            <div
              data-aos="fade-down-left"
              className="lg:w-5/12 w-full flex lg:items-end lg:justify-center"
            >
              <img
                src={Aeroplane}
                alt="Aeroplane"
                className="w-full utility_croco1 lg:max-w-[393px] max-w-[200px] helo-header"
              />
            </div>
            <div
              data-aos="fade-down-left"
              className="lg:w-7/12 w-full flex flex-col items-center justify-center lg:mt-0 mt-7 pb-[18px]"
            >
              <h2 className="lg:text-[175.636px] sm:text-[125px] text-[100px] font-dino font-normal text-center leading-[82%] text-[#FBA11D] drop-shadow-[2px_6px_0px_#000]">
                D<span className="text-[#23AAAC]">I</span>
                <span className="text-[#D45B07]">N</span>
                <span className="text-[#8EC627]">O</span>
              </h2>
              <h2 className="lg:text-[175.636px] sm:text-[125px] text-[100px] font-dino font-normal text-center leading-[82%] text-[#8EC627] drop-shadow-[2px_6px_0px_#000]">
                L<span className="text-[#FCCA2B]">F</span>
                <span className="text-[#8F78D2]">G</span>
              </h2>
            </div>
          </div>
        </div>
        <img
          src={CycleDino}
          alt="CycleDino"
          className=" animate-cycle2 sm:max-w-[132px] walking-img2 max-w-[94px] w-full absolute bottom-[18%] sm:right-[38%] right-[58%]"
        />
        <img
          src={SmallCycle}
          alt="SmallCycle"
          className=" animate-cycle xl:max-w-[211px] walking-img sm:max-w-[180px] max-w-[108px] w-full absolute xl:bottom-[10%] md:bottom-[9%] sm:bottom-[8%] bottom-[9%] sm:right-[9%] right-[4%]"
        />
      </div>
    </div>
  );
};

export default Hero;

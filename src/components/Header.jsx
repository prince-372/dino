import React from "react";
import Mynav from "./Mynav";
import aeroplane from "../assets/image/aeroplane.png";
import dinocycle from "../assets/image/header-dino-cycle.png";
import dinoscoter from "../assets/image/header-dino.png";

const Header = () => {
  return (
    <div className="bg-bgheader bg-center bg-cover bg-no-repeat min-h-[877px] relative">
      <img
        className=" absolute bottom-[17%] right-[39%]"
        src={dinocycle}
        alt="dinocycle"
      />
      <img
        className=" absolute bottom-[10%] right-[9%]"
        src={dinoscoter}
        alt="dinoscoter"
      />
      <div className="max-w-[1164px] px-3 mx-auto">
        <Mynav />
        <div className=" grid lg:grid-cols-2 grid-cols-1 pt-[83px]">
          <div className=" flex justify-center items-center">
            <div>
              <img src={aeroplane} alt="aeroplane" />
            </div>
          </div>
          <div>
            {" "}
            <h2 className="font-dino text-center  sm:text-[175px] text-[135px] mt-1 font-normal text-[#FBA11D] leading-[166px] drop-shadow-[2px_6px_0px_#000]">
              <span className=" text-[#FBA11D]">D</span>
              <span className="text-[#23AAAC]">I</span>
              <span className="text-[#D45B07]">N</span>
              <span className="text-[#8EC627]">O</span>
            </h2>
            <p className=" font-dino text-center sm:text-[175px] text-[135px] mt-1 font-normal text-[#FBA11D] leading-[166px] drop-shadow-[2px_6px_0px_#000]">
              <span className="text-[#FCCA2B]">L</span>
              <span className="text-[#8F78D2]">F</span>
              <span className="text-[#8EC627]">G</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

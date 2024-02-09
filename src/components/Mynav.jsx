import React, { useState } from "react";
import { Discord, Instagram, Twitter } from "./Icones";

const Mynav = () => {
  const [nav, setNav] = useState(true);
  if (nav === false) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <div  className="max-w-[1140px] mx-auto px-3 pt-7">
      <div className="flex justify-between items-center py-[10px] lg:pt-[4px] lg:pb-[5.50px] pl-[24px] pr-[7.42px] bg-white rounded-[61.102px] border-b-[4px] border-solid border-black">
        <h2 className="font-dino cursor-pointer lg:text-[39.125px] text-[35px] mt-1 font-normal text-[#FBA11D] leading-[94%] drop-shadow-[0px_1.337px_0px_#000]">
          <span className=" text-[#FBA11D]">D</span>
          <span className="text-[#23AAAC]">i</span>
          <span className="text-[#D45B07]">n</span>
          <span className="text-[#8EC627]">o</span>
          <span className="text-[#FCCA2B]">L</span>
          <span className="text-[#8F78D2]">F</span>
          <span className="text-[#8EC627]">G</span>
        </h2>
        <div className="flex gap-[136px] items-center">
          <ul
            className={`${
              nav ? "left-[-100%]" : "left-0"
            } flex max-lg:fixed gap-[28px] max-lg:z-50 items-center max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:bg-white max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen max-lg:flex-col max-lg:justify-center`}
          >
            <li>
              <a
                href="#About"
                onClick={() => setNav(!nav)}
                className="font-chewy text-[18px] font-normal text-black no-underline leading-[100%] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-black after:h-[3px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Tokenomic"
                onClick={() => setNav(!nav)}
                className="font-chewy text-[18px] font-normal text-black no-underline leading-[100%] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-black after:h-[3px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear"
              >
                Tokenomic
              </a>
            </li>
            <li>
              <a
                href="#Roadmap"
                onClick={() => setNav(!nav)}
                className="font-chewy text-[18px] font-normal text-black no-underline leading-[100%] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-black after:h-[3px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear"
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={() => setNav(!nav)}
                className="font-chewy text-[18px] font-normal text-black no-underline leading-[100%] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-black after:h-[3px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear"
              >
                FAQ
              </a>
            </li>
            <li className=" flex lg:hidden gap-2 items-center">
              <a
                className=" hover:-translate-y-1 duration-300 rounded-full hover:shadow-[0px_0px_12px_4px_rgba(30,31,31,0.36)]"
                href="https://twitter.com/i/flow/login"
                target="_blank"
              >
                <Twitter />
              </a>
              <a
                className=" hover:-translate-y-1 duration-300 rounded-full hover:shadow-[0px_0px_12px_4px_rgba(30,31,31,0.36)]"
                href="https://discord.com/"
                target="_blank"
              >
                <Discord />
              </a>
              <a
                className=" hover:-translate-y-1 duration-300 rounded-full hover:shadow-[0px_0px_12px_4px_rgba(30,31,31,0.36)]"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <Instagram />
              </a>
            </li>
            <li className="lg:hidden">
              <button className="bg-BgBtnJoin bg-Bgsize group bg-BgPositionCenter bg-no-repeat">
                <p className="pt-[11px] pb-[19.57px] px-[36px] text-[18px] group-hover:text-white transition-all duration-300 ease-linear font-normal text-black font-chewy leading-[131%]">
                  Join Now
                </p>
              </button>
            </li>
          </ul>
          <div className="flex items-center gap-[13px]">
            <div className="lg:flex py-1 hidden gap-2 items-center">
              <a
                className=" hover:-translate-y-1 duration-300 rounded-full hover:shadow-[0px_0px_12px_4px_rgba(30,31,31,0.36)]"
                href="https://twitter.com/i/flow/login"
                target="_blank"
              >
                <Twitter />
              </a>
              <a
                className=" hover:-translate-y-1 duration-300 rounded-full hover:shadow-[0px_0px_12px_4px_rgba(30,31,31,0.36)]"
                href="https://discord.com/"
                target="_blank"
              >
                <Discord />
              </a>
              <a
                className=" hover:-translate-y-1 duration-300 rounded-full hover:shadow-[0px_0px_12px_4px_rgba(30,31,31,0.36)]"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <Instagram />
              </a>
            </div>
            <button className="lg:block hidden bg-BgBtnJoin bg-Bgsize group bg-BgPositionCenter bg-no-repeat">
              <p className="pt-[11px] pb-[19.57px] px-[36px] text-[18px] group-hover:text-white transition-all duration-300 ease-linear font-normal text-black font-chewy leading-[131%]">
                Join Now
              </p>
            </button>
            <div
              onClick={() => setNav(!nav)}
              className="lg:hidden mr-[17px] w-[27px] h-[21px] z-50 relative flex justify-between flex-col"
            >
              <span
                className={`${
                  nav ? "" : "rotate-[50deg] translate-y-[15px]"
                } bg-black h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${
                  nav ? "" : "hidden"
                } bg-black h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${
                  nav ? "" : "rotate-[-50deg] translate-y-[-50%]"
                } bg-black h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mynav;

import React, { useEffect, useState } from "react";

const Loader = () => {
  const [loder, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 3500);
  }, []);
  {
    if (loder === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }
  return (
    <div>
      {loder ? (
        <section
          style={{ zIndex: "999999999" }}
          className="bg-[#09655A] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
        >
          <div className="flex justify-center items-center flex-col text-center animate-bounce">
            <h2 className="font-dino cursor-pointer text-[80px] md:text-[135px] mt-1 font-normal text-[#FBA11D] leading-[94%] drop-shadow-[0px_1.337px_0px_#000]">
              <span className=" text-[#FBA11D]">D</span>
              <span className="text-[#23AAAC]">i</span>
              <span className="text-[#D45B07]">n</span>
              <span className="text-[#8EC627]">o</span>
              <span className="text-[#FCCA2B]">L</span>
              <span className="text-[#8F78D2]">F</span>
              <span className="text-[#8EC627]">G</span>
            </h2>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default Loader;

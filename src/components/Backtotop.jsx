import React from "react";
import Backbtn from "../assets/image/up-arrow.webp";

const BackToTop = () => {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  React.useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });
  });
  const scrollTop = React.useRef();
  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 200
        ? (scrollTop.current.style.display = "inline-block")
        : (scrollTop.current.style.display = "none");
    });
  });
  return (
    <>
      <div className="container mx-auto px-3 max-w-[1150px]">
        <div
          onClick={() =>
            setPosition({ ...position, position: { top: 0, left: 0 } })
          }
          className="fixed hidden bottom-[1%] right-[1%] z-30 translate-y-[0%] animate-bounce"
          ref={scrollTop}
        >
          <div className=" rounded-[50%] border-[]  cursor-pointer scroll-smooth transform-[all] transform-[.3s] transform-[linear]  flex justify-center items-center">
            <img className=" w-[50px]" src={Backbtn} alt="back" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BackToTop;

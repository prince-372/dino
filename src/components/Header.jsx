import diyno from "../assets/image/diyno.webp";
import aeroplane from "../assets/image/aeroplane.webp";
import diyno2 from "../assets/image/diyno2.webp";
import headerbottombg from "../assets/image/headerbottombg.webp";
import bottomshadow from "../assets/image/bottomshadw.webp";
import skyleft from "../assets/image/skyheaderleft.webp";
import skyright from "../assets/image/skyheaderright.webp";
export const Header = () => {
  return (
    <header className="bg-[url(./assets/image/headerbg2.webp)] bg-cover bg-center w-full min-h-[730px] sm:min-h-[890px] 2xl:min-h-[100vh] relative overflow-hidden -top-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto px-3 container max-w-[1040px] z-[3] mt-[140px] sm:mt-[178px] relative gap-5">
        <div className="flex items-center md:items-end max-lg:justify-center">
          <img
            data-aos="fade-up"
            className="w-full myaeroplane max-w-[250px] md:max-w-[394px] max-h-[170px] md:max-h-[240px] animate-flip3"
            src={aeroplane}
            alt="aeroplane"
          />
        </div>
        <h1
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="200"
          className=" font-dino text-[100px] sm:text-[120px] md:text-[150px] lg:text-[175.64px] font-normal leading-[106.13px] sm:leading-[126.13px] md:leading-[146.13px] lg:leading-[166.13px]  ml-3 sm:ml-6 flex flex-col text-center uppercase drop-shadow-[0px_6px_0px_#000000]"
        >
          <span>
            <span className="text-[#FBA11D] ">
              D
            </span>
            <span className=" text-[#23AAAC] ">
              i
            </span>
            <span className=" text-[#D45B07] ">
              n
            </span>
            <span className="text-[#8EC627] ">
              o
            </span>
          </span>
          <span>
            <span className="text-[#8EC627] ">
              L
            </span>
            <span className="text-[#FCCA2B] ">
              F
            </span>
            <span className="text-[#8F78D2] ">
              G
            </span>
          </span>
        </h1>
      </div>
      <img
        className="absolute animate-cycle2 bottom-[12%] sm:bottom-[11%] md:bottom-[14%] lg:bottom-[20%] xl:bottom-[20%] right-[38%] z-[1] max-w-[60px] w-full  sm:max-w-[90px] md:max-w-[111px] lg:max-w-[131px] animate-flip3"
        src={diyno}
        alt=""
      />
      <img
        className="absolute animate-cycle bottom-[5%] sm:bottom-[9%] md:bottom-[11%] xl:bottom-[15%] z-[1] right-10 md:right-20 max-w-[80px] sm:max-w-[120px] w-full lg:max-w-[211px] lg:w-[14%] 2xl:w-full"
        src={diyno2}
        alt=""
      />
      <div className="absolute left-0 right-0 z-0 -bottom-6">
        <img
          className="w-full max-md:min-h-[260px]"
          src={headerbottombg}
          alt=""
        />
      </div>
      <div className="absolute bottom-0 -right-2 -left-10">
        <img
          className="w-full min-h-[40px] md:min-h-[66px] xl:min-h-[134px]"
          src={bottomshadow}
          alt=""
        />
      </div>
      <img
        className="absolute top-[26%] left-0 w-[13%] sm:w-[9%] max-w-[117px]"
        src={skyleft}
        alt="image"
      />
      <img
        className="absolute top-[16%] right-0 w-[20%] sm:w-[12%] max-w-[172px]"
        src={skyright}
        alt="image"
      />
    </header>
  );
};
export default Header;

import React from "react";

const Diverse = () => {
  return (
    <>
      <div className="max-w-[1280px] bg-white mx-auto w-full px-4">
        <div className="mb-[100px] flex flex-col">
          <section className="text-center my-[60px] md:my-[90px]">
            <p className="text-[32px] md:text-[51px] font-extrabold leading-tight mb-5 text-[#122231]">
              Diverse ways to Invest
            </p>
            <p className="text-[18px] md:text-[24px] leading-8 text-[rgb(61,79,96)]">
              Grow your money and invest for your future confidently.
            </p>
          </section>
          <div className="mx-auto w-full">
            <section
              className="
                rounded-[30px] flex flex-col md:flex-row relative mx-0 md:mx-[40px] py-10 md:py-16 px-4 md:px-12 gap-10
                bg-[#7913E5] h-auto md:h-[500px] w-full text-white border
              "
            >
              <div className="w-full md:w-1/2 max-md:w-full max-md:h-auto z-10">
                <h1 className="text-2xl md:text-4xl leading-[38px] md:leading-[50px] font-bold">
                  Earn Up to 35% returns
                </h1>
                <p className="text-base md:text-xl w-full md:w-[70%] text-[rgb(254,214,241)] leading-7 mt-4">
                  Invest securely and confidently on the go. Grow your money
                  confidently by investing in pre-vetted investment{" "}
                  <br className="hidden md:block" />
                  opportunities.
                </p>
                <a href="#">
                  <div className="flex gap-1 items-center mt-8 md:absolute md:bottom-[10%]">
                    <img src="/images/arrowrightwhite.svg" alt="" />
                    <p className="text-base md:text-xl leading-7">
                      Learn about investment
                    </p>
                  </div>
                </a>
              </div>
              <div className="flex justify-end items-end md:absolute md:bottom-0 md:right-0 md:mr-11 w-full md:w-auto h-[220px] md:h-[436px] mt-8 md:mt-0">
                <img
                  src="/images/myinvest.avif"
                  alt=""
                  className="w-full md:w-auto h-full object-contain rounded-[20px]"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diverse;

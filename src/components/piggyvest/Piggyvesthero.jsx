import React from "react";

const Piggyvesthero = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-[#0D60D8] px-[50px] pt-[160px]  max-md:flex-col max-md:gap-y-[50px]">
        <section className="max-w-[34em] max-md:w-[100%]">
          <h1 className="text-white font-bold text-[50px] py-2 max-md:text-center">
            Piggybank
          </h1>

          <main className="bg-white max-w-[180px] rounded-[20px] flex items-center  py-2.5 px-[12px] max-md:mx-auto ">
            <img src="" alt="" />
            <p className="text-[#2295F2] 9ext-[20px] py-0.5">
              Automated savings
            </p>
          </main>

          <p className="text-white text-[20px] leading-[32px] font-[400] py-4 max-md:text-center max-md:w-[100%]">
            Strict daily, weekly or monthly automatic savings. Earn up to 18%
            p.a.
          </p>

          <main className="flex border max-md:justify-between items-center">
            <div>
              <img src="" alt="" />
              <p className="text-white"> Get on iPhone</p>
            </div>

            <div>
              <img src="" alt="" />
              <p className="text-white"> Get on Android</p>
            </div>
          </main>
        </section>

        <section className="w-[500px] max-md:w-[80%] max-md:mx-auto">
          <img src="../../../public/piggybank.png" alt="" />
        </section>
      </div>
    </div>
  );
};

export default Piggyvesthero;

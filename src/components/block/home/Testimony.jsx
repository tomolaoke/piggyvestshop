import React from "react";

import { FaApple } from "react-icons/fa";
import Button from "../../reusable/Button";

const Testimony = () => {
  return (
    <>
      <div className="bg-[#F2F7F8] py-[80px]">
        <div className="max-w-[1280px] mx-auto">
          <section className="flex gap-[72px] p-20 max-md:flex-col-reverse">
            <main>
              <img
                src="/images/lastimage.png"
                alt="smile"
                className="h-auto w-[444px]"
              />
            </main>
            <main className="w-[50%] h-[150px] flex-col items-center my-auto max-md:w-[100%]">
              <p className="text-4xl text-[#122231] leading-10 font-bold ">
                Join 5+ million people who save and invest with us
              </p>
              <main className="flex gap-2 mt-[25px]">
                <Button
                  iconTitle={<FaApple />}
                  title="Get on Iphone"
                  color="#122231"
                  borderColor="#dddddd"
                />
                <Button
                  srcTitle="/images/go.png"
                  title="Get on Android"
                  color="#122231"
                  borderColor="#DDDDDD"
                />
              </main>
            </main>
          </section>
        </div>
      </div>
    </>
  );
};

export default Testimony;

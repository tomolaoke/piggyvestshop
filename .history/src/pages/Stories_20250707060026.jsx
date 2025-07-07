import React from "react";

import { FaHeart } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import Button from "../components/reusable/Button";

const Stories = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-[#f2f7f8] ">
        <section className="bg-[#F2F7F8] flex w-full max-tablet:flex-col">
          <main className="flex flex-col  justify-center w-[63%]">
            <div className=" flex flex-col justify-center p-[40px] h-[250px] gap-3">
              <p className="text-5xl text-[#122231] font-semibold leading-14 w-[400px]">
                Loved by our{" "}
                <span className="flex gap-1">
                  Customers{" "}
                  <p className="text-blue-500 ">
                    {" "}
                    <FaHeart className="heart" />
                  </p>{" "}
                </span>{" "}
              </p>
              <p className="text-[#42546400] text-xl w-[74%] leading-8">
                Stories of happy savers who Piggyvest has helped or is helping
                save for what truly matters to them.
              </p>
              <Button
                title="Add your story"
                bgColor="#122231"
                textColor="white"
              />
            </div>
          </main>
          <main className="w-[50%]">
            <img src="/images/image1.png" alt="logo" />
          </main>
        </section>
        <section className="flex gap-[72px] p-12 max-tablet:flex-col">
          <main>
            <img
              src="/images/lady_smile.png"
              alt="smile"
              className="border-2"
            />
          </main>
          <main className="w-[50%] h-[150px] flex-col items-center my-auto">
            <p className="text-4xl text-[#122231] leading-10 font-semibold">
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
    </>
  );
};

export default Stories;

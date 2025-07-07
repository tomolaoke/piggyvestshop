import React from "react";

const Saver = () => {
  return (
    <>
      <div className="bg-[#F2F7F8]">
        <div className="max-w-[1280px] mx-auto  ">
          <section className="flex flex-col justify-center items-center gap-10 py-[80px] max-md:w-[90%] max-md:mx-auto">
            <p className="text-5xl leading-16 font-bold text-[#2c3B48] max-md:text-center">
              Meet Our Saver of the Month
            </p>
            <p className="text-2xl leading-8 text-[rgb(61,79,96)] w-[65%] text-center max-md:w-[100%]">
              Every month, we shine a spotlight on one saver, asking them about
              their savings culture and how Piggyvest has helped them.
            </p>
          </section>
          <section className="px-[35px] py-0 flex justify-center">
            <iframe
              width="790"
              height="444"
              src="https://www.youtube.com/embed/2EnGMGxKuII?si=FheL7xtBxdsvMS0h"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </section>
        </div>
      </div>
    </>
  );
};

export default Saver;

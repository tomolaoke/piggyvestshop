import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../components/reusable/Button";

export default function MobileNav() {
  const [nav, setNav] = useState(false);
  const [save, setSave] = useState(false);
  const [resource, setResource] = useState(false);

  return (
    <div className="">
      <div className="w-[100%] flex justify-between items-center p-[20px] fixed bg-white   min-md:hidden ">
        <div>
          <img
            className="bg-transparent"
            src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/logo_08e6965627/logo_08e6965627.svg"
            alt=""
          />
        </div>

        <div
          onClick={() => {
            setNav(!nav);
          }}
        >
          {nav ? (
            <FaTimes className="w-[50px] h-[50px]" />
          ) : (
            <IoMenu className="w-[50px] h-[50px]" />
          )}
        </div>
      </div>
      <div
        className={
          !nav
            ? "hidden"
            : "w-[100%] h-screen space-y-[30px] px-[10px] bg-white "
        }
      >
        <div className=" flex flex-col items-center pt-[50px] gap-y-[30px] max-md:pt-[150px] ">
          <div className="  w-[100%] flex justify-center">
            <p
              onMouseEnter={() => {
                setSave(true);
              }}
              onMouseLeave={() => {
                setSave(false);
              }}
              className="flex place-items-center "
            >
              Save <MdKeyboardArrowDown />
            </p>

            {/* DROPDOWN */}

            <div
              onMouseEnter={() => {
                setSave(true);
              }}
              onMouseLeave={() => {
                setSave(false);
              }}
              className={
                !save
                  ? "hidden"
                  : "w-[80%] h-auto p-[20px] rounded-[10px]  mx-auto fixed mt-[20px] flex flex-col gap-y-[20px] bg-white shadow shadow-gray-600"
              }
            >
              <Link to={"/piggybank"}>
                <div
                  onClick={() => {
                    setNav(!nav);
                  }}
                  className="flex items-center gap-x-[10px]"
                >
                  <img
                    className="w-[40px]"
                    src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/piggybank_icon_bd14f39497_7ef36812cd/piggybank_icon_bd14f39497_7ef36812cd.png"
                    alt=""
                  />

                  <div>
                    <p className="font-[600] text-[16px]">PiggyBank</p>
                    <p className="font-[400] text-[14px]">Automated Savings</p>
                  </div>
                </div>
              </Link>

              <Link to={"/safelock"}>
                <div
                  onClick={() => {
                    setNav(!nav);
                  }}
                  className="flex items-center gap-x-[10px]"
                >
                  <img
                    className="w-[40px]"
                    src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/safelock_icon_7595628576_b010a4fee8/safelock_icon_7595628576_b010a4fee8.png"
                    alt=""
                  />

                  <div>
                    <p className="font-[600] text-[16px]">Safelock</p>
                    <p className="font-[400] text-[14px]">Fixed Savings</p>
                  </div>
                </div>
              </Link>

              <Link to={"/targets"}>
                <div
                  onClick={() => {
                    setNav(!nav);
                  }}
                  className="flex items-center gap-x-[10px]"
                >
                  <img
                    className="w-[40px]"
                    src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/targets_icon_a382a2df4f_10353cd31e/targets_icon_a382a2df4f_10353cd31e.png"
                    alt=""
                  />

                  <div>
                    <p className="font-[600] text-[16px]">Target</p>
                    <p className="font-[400] text-[14px]">
                      Goal-Savings Savings
                    </p>
                  </div>
                </div>
              </Link>

              <Link to={"/flexnaira"}>
                <div
                  onClick={() => {
                    setNav(!nav);
                  }}
                  className="flex items-center gap-x-[10px]"
                >
                  <img
                    className="w-[40px]"
                    src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/flex_naira_icon_1c37272848_635abfe249/flex_naira_icon_1c37272848_635abfe249.png"
                    alt=""
                  />

                  <div>
                    <p className="font-[600] text-[16px]">Flex Naira</p>
                    <p className="font-[400] text-[14px]">Flexible Savings</p>
                  </div>
                </div>
              </Link>

              <Link to={"/flex-dollar"}>
                <div
                  onClick={() => {
                    setNav(!nav);
                  }}
                  className="flex items-center gap-x-[10px]"
                >
                  <img
                    className="w-[40px]"
                    src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/piggybank_icon_bd14f39497_7ef36812cd/piggybank_icon_bd14f39497_7ef36812cd.png"
                    alt=""
                  />

                  <div>
                    <p className="font-[600] text-[16px]">Flex Dollar</p>
                    <p className="font-[400] text-[14px]">Dollar Savings</p>
                  </div>
                </div>
              </Link>

              <Link to={"/housemoney"}>
                <div
                  onClick={() => {
                    setNav(!nav);
                  }}
                  className="flex items-center gap-x-[10px]"
                >
                  <img
                    className="w-[40px]"
                    src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/piggybank_icon_bd14f39497_7ef36812cd/piggybank_icon_bd14f39497_7ef36812cd.png"
                    alt=""
                  />

                  <div>
                    <p className="font-[600] text-[16px]">House Money</p>
                    <p className="font-[400] text-[14px]">Semi Strict Wallet</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Link to={"/invest"}>
            <span
              onClick={() => {
                setNav(!nav);
              }}
            >
              Invest
            </span>
          </Link>
          <Link to={"/stories"}>
            <span
              onClick={() => {
                setNav(!nav);
              }}
            >
              Stories
            </span>
          </Link>

          <Link to={"/faqs"}>
            <span
              onClick={() => {
                setNav(!nav);
              }}
            >
              FAQS
            </span>{" "}
          </Link>
          <div className="w-[100%]  flex justify-center">
            <span
              onClick={() => {
                setNav(!nav);
              }}
              onMouseEnter={() => {
                setResource(true);
              }}
              onMouseLeave={() => {
                setResource(false);
              }}
              className="flex items-center gap-x-[2px]"
            >
              Resources <MdKeyboardArrowDown />
            </span>

            {/* DROPDOWN */}
            <div
              onMouseEnter={() => {
                setResource(true);
              }}
              onMouseLeave={() => {
                setResource(false);
              }}
              className={
                !resource
                  ? "hidden"
                  : "w-[80%] h-auto p-[20px] rounded-[10px] shadow shadow-gray-500  fixed mt-[20px] bg-white"
              }
            >
              <Link to={"/housemoney"}>
                <div
                  onClick={() => {
                    setNav(!nav);
                  }}
                  className="flex items-center gap-x-[10px]"
                >
                  <img
                    className="w-[40px]"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjAuMzg0NkMwIDkuMTI2NSA5LjEyNjUgMCAyMC4zODQ2IDBIMzIuNjE1NEM0My44NzM1IDAgNTMgOS4xMjY1IDUzIDIwLjM4NDZWMzIuNjE1NEM1MyA0My44NzM1IDQzLjg3MzUgNTMgMzIuNjE1NCA1M0gwVjIwLjM4NDZaIiBmaWxsPSIjRTBFRkZGIi8+CjxwYXRoIGQ9Ik0yMC41IDIyLjc1VjI5LjI1QzIwLjUgMzEuNDE2NyAyMS41ODMzIDMyLjUgMjMuNzUgMzIuNUgzMC4yNUMzMi40MTY3IDMyLjUgMzMuNSAzMS40MTY3IDMzLjUgMjkuMjVWMjZDMzMuNSAyNS4zNSAzMy4wNjY3IDI0LjkxNjcgMzIuNDE2NyAyNC45MTY3QzMxLjc2NjcgMjQuOTE2NyAzMS4zMzMzIDI0LjQ4MzMgMzEuMzMzMyAyMy44MzMzVjIyLjc1QzMxLjMzMzMgMjAuNTgzMyAzMC4yNSAxOS41IDI4LjA4MzMgMTkuNUgyMy43NUMyMS41ODMzIDE5LjUgMjAuNSAyMC41ODMzIDIwLjUgMjIuNzVaIiBzdHJva2U9IiMwRDYwRDgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTI0LjgzMzQgMjMuODMzM0gyN00yNC44MzM0IDI4LjE2NjZIMjkuMTY2NyIgc3Ryb2tlPSIjMEQ2MEQ4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMwLjI1IDM2LjgzMzRIMjMuNzVDMTguMzMzMyAzNi44MzM0IDE2LjE2NjYgMzQuNjY2NyAxNi4xNjY2IDI5LjI1MDFWMjIuNzUwMUMxNi4xNjY2IDE3LjMzMzQgMTguMzMzMyAxNS4xNjY3IDIzLjc1IDE1LjE2NjdIMzAuMjVDMzUuNjY2NiAxNS4xNjY3IDM3LjgzMzMgMTcuMzMzNCAzNy44MzMzIDIyLjc1MDFWMjkuMjUwMUMzNy44MzMzIDM0LjY2NjcgMzUuNjY2NiAzNi44MzM0IDMwLjI1IDM2LjgzMzRaIiBzdHJva2U9IiMwRDYwRDgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                    alt=""
                  />
                  <Link to={"/blog"}>
                    <div>
                      <p className="font-[600] text-[16px]">Blog</p>
                    </div>
                  </Link>
                </div>
              </Link>
            </div>
          </div>

          <Link to={"/shop"}>
            <span
              onClick={() => {
                setNav(!nav);
              }}
            >
              Shop
            </span>
          </Link>
        </div>
        <div className="w-[100%]   space-y-[20px] ">
          <Button
            title="Sign In"
            className="  w-full flex justify-center border"
          />
          <Button
            title="create free account"
            className="  w-full flex justify-center bg-[#122231] text-white"
          />
        </div>
      </div>
    </div>
  );
}

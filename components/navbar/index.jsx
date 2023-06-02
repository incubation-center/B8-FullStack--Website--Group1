import React from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";
import logo from "public/logo.png";
import profile from "public/profile.svg";
import CategoriseOption from "./CategoriseOption";
const index = () => {
  return (
    <nav className="w-full bg-transparent bg-slate-400 ">
      <div className="flex items-center lg:justify-between md:justify-center sm:justify-center mx-auto w-full h-16 bg-transparent">
        <div className="">
          <a href="#" className="flex items-center">
            <Image src={logo} width={235} height={56} alt="PromoKH" />
          </a>
        </div>

        <div className="flex md:pl-5 lg:pl-10 items-center">
          <div className="flex w-auto md:flex md:w-auto hidden sm:hidden md:flex">
            <CategoriseOption />
            <button className="bg-transparent md:pr-3 md:pl-3 lg:pr-10 lg:pl-20 text-sub_font_color font-sans text-sm">
              <span className="flex-1">What New</span>
            </button>
          </div>
          <div>
            <SearchBar />
          </div>
          <div className="flex">
            <Image src={profile} width={33} height={33} alt="Profile" />
            <button className="flex text-secondary font-sans text-sm bg-primary p-3 rounded-md lg:m-10 md:m-3 sm:mx-2 md:h-11 md:w-28 lg:h-11 lg:w-28">
              <span className="flex-1">+ Create</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default index;

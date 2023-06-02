import Link from "next/link";
import React from "react";
import Login from "./Login";

const UnauthorizeComponent = () => {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className=" text-black font-bold">
        Oops! you need to login first 🙏
      </div>
      <div className=" items-center justify-center flex flex-col  ">
        <Link href="/components/Login">
          <button class=" bg-primary hover:bg-blue-700 text-white  py-3 px-5 rounded-lg mt-5 font-medium ">
            Login
          </button>
        </Link>
        <div className=" text-gray-500 text-sm mt-3 ">
          Dont have an account? Sign up
        </div>
      </div>
    </div>
  );
};

export default UnauthorizeComponent;

import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import SignUpModal from "../modal/SignUp";
import Login from "../modal/Login";
import logoutSVG from "public/logout.svg";
import accountOutline from "public/account-outline.svg";
import useComponentVisible from "../../utils/hooks";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { profileCardAtom } from "@/state/recoilAtoms";
const NabarCard = ({ handleClickOutside }) => {
  const { push } = useRouter();
  const ref = useComponentVisible(handleClickOutside);
  const isAuth = !!localStorage.getItem("accessToken");
  const [isProfileOpen, setIsProfileOpen] = useRecoilState(profileCardAtom);
  function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    push("/");
  }

  return (
    <div
      ref={ref}
      className="absolute right-0 z-10 w-[173px] mt-2 mr-2 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none "
    >
      <ul>
        {!isAuth ? (
          <div>
            <Login />
            <SignUpModal />
          </div>
        ) : (
          <div>
            <Link href="/userprofile">
              <button
                className="flex w-full justify-start items-center p-2"
                type="button"
                onClick={() => setIsProfileOpen(false)}
              >
                <Image src={accountOutline} className="w-4 h-4" alt="Love" />
                <p className="text-primary font-sans font-thin text-sm pl-2">
                  My profile
                </p>
              </button>
            </Link>
            <button
              className="flex w-full justify-start items-center p-2"
              type="button"
              onClick={() => logout()}
            >
              <Image src={logoutSVG} className="w-4 h-4" alt="Love" />
              <p className="text-primary font-sans font-thin text-sm pl-2">
                Logout
              </p>
            </button>
          </div>
        )}
      </ul>
    </div>
  );
};

export default NabarCard;

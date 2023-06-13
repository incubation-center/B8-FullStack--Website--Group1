import { stringify } from "postcss";
import { useState } from "react";

const upload = require("../../public/Upload.svg");
const PromotionForm = () => {
  const [category, setCategory] = useState("");
  const categoryPress = () => {
    setShowCategory((prev) => !prev);
  };
  const [showCategory, setShowCategory] = useState(false);
  const categories = [
    { name: "Travel" },
    { name: "Food" },
    { name: "Tech" },
    { name: "Fashion" },
    { name: "Grocery" },
    { name: "Others" },
  ];
  const changeCategory = ({ item }) => {
    setCategory(item.name);
    setShowCategory(false);
  };
  return (
    <div className="flex h-max w-full p-10 flex-col  self-center">
      <div className=" text-font_color text-2xl font-bold self-start py-10 w-full ">
        Post a new Promotion 🎉
      </div>
      <form className=" flex justify-between w-full h-full flex-col ">
        {/* first row */}
        <div className="flex">
          <input
            className="  border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-3/6 "
            type="text"
            placeholder="Promotion title or Shop name"
          />
          <div className="w-5" />
          <input
            className=" border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-3/6  "
            type="text"
            placeholder="Promotion title or Shop name"
          />
        </div>
        {/* second row */}
        <div className=" flex pt-3">
          <input
            className="  border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-3/6 "
            type="text"
            placeholder="Promotion Start Date"
          />
          <div className="w-5" />
          <input
            className=" border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-3/6  "
            type="text"
            placeholder="Promotion End Date"
          />
        </div>
        {/* third row */}
        <div className=" flex pt-3">
          <input
            className="  border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-2/6 "
            type="text"
            placeholder="Discount Offer"
          />
          <div className="w-5" />

          <input
            className=" border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-2/6  "
            type="text"
            placeholder="Full Price"
          />
          <div className="w-5" />

          <input
            className=" border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-2/6  "
            type="text"
            placeholder="Price after Discount"
          />
        </div>
        {/* row */}
        <div className="w-full relative cursor-pointer   ">
          <div
            type="button"
            onClick={categoryPress}
            className={
              showCategory
                ? " flex border-b-0 mt-3 h-10 content-start border flex-row justify-between items-start border-gray-400 rounded-b-none  shadow-inner rounded-md p-2 px-4 w-full"
                : " flex mt-3 h-10 content-start border  flex-row justify-between border-gray-400  shadow-inner rounded-md p-2 px-4 w-full"
            }
          >
            <p
              className={
                category === ""
                  ? "  dark:text-gray-400 text-sm"
                  : "  dark:text-gray-500 text-sm"
              }
            >
              {category === "" ? "Category" : category}
            </p>
            <div className=" self-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 124 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_346_1307)">
                  <path
                    d="M117.979 28.0171H5.97922C0.679216 28.0171 -2.02078 34.4171 1.77922 38.2171L57.7792 94.2171C60.0792 96.5171 63.8792 96.5171 66.1802 94.2171L122.18 38.2171C125.979 34.4171 123.279 28.0171 117.979 28.0171Z"
                    fill="grey"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_346_1307">
                    <rect width="123.959" height="123.958" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          {showCategory ? (
            <div className=" absolute w-full shadow-xl bg-white rounded-b-lg px-5 py-2 border-gray-400 border border-t-0">
              {categories.map((item) => (
                <div
                  onClick={() => changeCategory({ item })}
                  key={item.name}
                  className=" dark:text-gray-500 text-sm pb-2"
                >
                  {item.name}
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        {/* fourth row */}

        <div className=" flex pt-3 ">
          <div class="flex items-center justify-center w-3/6">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64  border-gray-400 border  rounded-lg cursor-pointer dark:hover:bg-gray-100"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  class="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p class=" text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold text-gray-500">Click</span> to
                  upload featured
                </p>
                <p class=" text-sm  dark:text-gray-400">photo</p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>

          <div className="w-5" />

          <div class="flex items-center justify-center w-3/6">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64  border-gray-400 border  rounded-lg cursor-pointer dark:hover:bg-gray-100"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  class="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="/"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p class=" text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold text-gray-500">Clicks</span> to
                  upload photos
                </p>
                <p class=" text-sm  dark:text-gray-400">for promotion</p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>

        {/* fifth row */}

        <textarea
          className=" mt-3 border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4  w-full h-20  "
          type="text"
          placeholder="Detail"
          rows="4"
          cols="50"
        ></textarea>
        {/* sixth row */}
        <input
          className="mt-3 border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-full  "
          type="text"
          placeholder="Referral Link or deep link"
        />
        {/* seventh row */}
        <div className="flex pt-3">
          <input
            className="  border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-3/6 "
            type="text"
            placeholder="Contact Number"
          />
          <div className="w-5" />
          <input
            className="border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-3/6  "
            type="text"
            placeholder="Facebook Page"
          />
        </div>
      </form>
      <div className="flex h-50 pt-5 ">
        <button className="h-full bg-primary hover:bg-blue-700 mt-3 py-2 px-5 rounded-lg font-medium  ">
          Post
        </button>
      </div>
    </div>
  );
};
export default PromotionForm;

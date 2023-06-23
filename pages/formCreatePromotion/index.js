import clientApiClient from "@/utils/clientApiClient";
import axios from "axios";
import { stringify } from "postcss";
import { useState } from "react";

const upload = require("../../public/Upload.svg");
const PromotionForm = () => {
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const categoryPress = () => {
    setShowCategory((prev) => !prev);
  };
  const [showCategory, setShowCategory] = useState(false);
  const categories = [
    { id: "1", name: "Travel" },
    { id: "2", name: "Food" },
    { id: "3", name: "Tech" },
    { id: "4", name: "Fashion" },
    { id: "5", name: "Grocery" },
    { id: "6", name: "Others" },
  ];
  const [isLoading, setIsLoading] = useState(false);

  // Features
  const [filesFeature, setFileFeature] = useState([]);
  const [message, setMessage] = useState();
  // Promotions
  const [filesPromotion, setPromotionFile] = useState([]);
  const [promotionMessage, setPromotionMessage] = useState();

  const changeCategory = ({ item }) => {
    setCategory(item.name);
    setShowCategory(false);
    setCategoryId(item.id);
  };

  const handleSubmitForm = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const old_price = form.old_price.value;
    const discount_percentage = form.discount_percentage.value;
    const discount_price = form.discount_price.value;
    const start_date = form.start_date.value;
    const end_date = form.end_date.value;
    const location = form.location.value;
    const promotion_detail = form.promotion_detail.value;
    const contact_number = form.contact_number.value;
    const promotion_url = form.promotion_url.value;

    const url = "promotion/add";

    const body = {
      title,
      category_id: categoryId.toString(),
      old_price,
      discount_price,
      discount_percentage,
      start_date: new Date(start_date),
      end_date: new Date(end_date),
      location,
      promotion_detail,
      contact_number,
      promotion_url,
    };

    let config = {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("accessToken"),
        "Api-Token": "scbnsk289248nscsndk298km",
      },
    };

    try {
      const response = await axios.post(
        "https://promo-kh-dev-api.onrender.com/promo_kh/promotion/add",
        body,
        config
      );

      console.log(response);

      if (response.data.status === 200 && response.data.message === "success") {
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFeatureFile = (e) => {
    setMessage("");
    const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    let file = e.target.files;
    if (validImageTypes.includes(file[0]["type"])) {
      setFileFeature([file[0]]);
    } else {
      setMessage("Only images accepted!");
    }

    // for (let i = 0; i < file.length; i++) {
    //   const fileType = file[i]["type"];
    //   const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    //   if (validImageTypes.includes(fileType)) {
    //     setFileFeature([...filesFeature, file[i]]);
    //   } else {
    //     setMessage("only images accepted");
    //   }
    // }
  };
  const removeImage = (i) => {
    setFileFeature(filesFeature.filter((x) => x.name !== i));
  };

  const handlePromotionFile = (e) => {
    setPromotionMessage("");
    let file = e.target.files;
    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setPromotionFile([...filesPromotion, file[i]]);
      } else {
        setMessage("Only images accepted");
      }
    }
  };
  const removePromotionImage = (i) => {
    setPromotionFile(filesPromotion.filter((x) => x.name !== i));
  };

  const onDateFocus = (e) => (e.target.type = "date");

  return (
    <div className="flex h-max w-full p-10 flex-col self-center">
      <div className=" text-font_color text-2xl font-bold self-start py-10 w-full max-sm:mt-12">
        Post a new Promotion 🎉
      </div>
      <form
        className="flex justify-between w-full h-full flex-col max-sm:-mt-9"
        onSubmit={handleSubmitForm}
      >
        {/* first row */}
        <div className="flex max-sm:block">
          <input
            required
            className="border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-3/6 max-sm:w-full mt-3"
            type="text"
            id="title"
            placeholder="Promotion title or Shop name"
            // value={form.title}
            // onChange={(e) => setTitle(e.target.form.title.value)}
          />
          <div className="w-5" />
          <input
            required
            className=" border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-3/6 max-sm:w-full mt-3"
            type="text"
            id="location"
            placeholder="Shop Location"
            // onChange={(e) => setLocation(e.target.form.location.value)}
          />
        </div>
        {/* second row */}
        <div className=" flex max-sm:block">
          <input
            required
            className="  border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-3/6 max-sm:w-full mt-3"
            type="text"
            id="start_date"
            // value={form.start_date}
            placeholder="Promotion Start Date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}

            // onChange={(e) => setStart_date(e.target.form.start_date.value)}
          />
          <div className="w-5" />

          <input
            required
            className=" border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-3/6 max-sm:w-full mt-3 "
            type="date"
            id="end_date"
            placeholder="Promotion End Date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            // value={form.end_date}
            // onChange={(e) => setEnd_date(e.target.form.end_date.value)}
          />
        </div>
        {/* third row */}
        <div className=" flex max-sm:block">
          <input
            required
            className="  border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-2/6 max-sm:w-full mt-3"
            type="text"
            id="discount_percentage"
            placeholder="Discount Offer"
            // value={form.discount_percentage}
            // onChange={(e) =>
            //   setDiscount_percentage(e.target.form.discount_percentage.value)
            // }
          />
          <div className="w-5" />

          <input
            className=" border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-2/6 max-sm:w-full mt-3 "
            type="text"
            id="old_price"
            required
            // value={form.old_price}
            // onChange={(e) => setOld_price(e.target.form.old_price.value)}
            placeholder="Full Price"
          />
          <div className="w-5" />

          <input
            className=" border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-2/6 max-sm:w-full mt-3 "
            type="text"
            id="discount_price"
            required
            // value={form.discount_price}
            // onChange={(e) =>
            //   setDiscount_price(e.target.form.discount_price.value)
            // }
            placeholder="Price after Discount"
          />
        </div>
        {/* row */}
        <div className="w-full relative cursor-pointer ">
          <div
            type="button"
            required
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
                <g clipPath="url(#clip0_346_1307)">
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

        <div className=" flex pt-3 items-start max-sm:block ">
          <div class="flex flex-col items-center justify-center w-3/6 max-sm:w-full mt-3">
            <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
              {message}
            </span>
            <label
              for="dropzone-file-feature"
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
              <input
                required
                id="dropzone-file-feature"
                onChange={handleFeatureFile}
                type="file"
                class="hidden"
              />
            </label>

            <div className="flex flex-wrap gap-2 mt-2">
              {filesFeature.map((file, key) => {
                return (
                  <div key={key} className="overflow-hidden relative">
                    <i
                      onClick={() => {
                        removeImage(file.name);
                      }}
                      className="mdi pt-2 mdi-close absolute right-1 hover:text-white cursor-pointer"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 492 492"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_9517_117)">
                          <path
                            d="M300.188 246L484.14 62.0396C489.2 56.9756 491.992 50.2196 492 43.0156C492 35.8076 489.208 29.0436 484.14 23.9876L468.02 7.87163C462.952 2.79563 456.196 0.015625 448.984 0.015625C441.784 0.015625 435.028 2.79563 429.96 7.87163L246.008 191.82L62.048 7.87163C56.988 2.79563 50.228 0.015625 43.02 0.015625C35.82 0.015625 29.06 2.79563 24 7.87163L7.872 23.9876C-2.624 34.4836 -2.624 51.5556 7.872 62.0396L191.828 246L7.872 429.952C2.808 435.024 0.02 441.78 0.02 448.984C0.02 456.188 2.808 462.944 7.872 468.012L23.996 484.128C29.056 489.2 35.82 491.984 43.016 491.984C50.224 491.984 56.984 489.2 62.044 484.128L246.004 300.176L429.956 484.128C435.024 489.2 441.78 491.984 448.98 491.984H448.988C456.192 491.984 462.948 489.2 468.016 484.128L484.136 468.012C489.196 462.948 491.988 456.188 491.988 448.984C491.988 441.78 489.196 435.024 484.136 429.956L300.188 246Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_9517_117">
                            <rect width="492" height="492" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </i>
                    <img
                      className="h-20 w-20 rounded-md"
                      src={URL.createObjectURL(file)}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-5" />

          <div class="flex flex-col items-center justify-center w-3/6  max-sm:w-full mt-3">
            <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
              {message}
            </span>
            <label
              for="dropzone-file-promotion"
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
                  upload photos
                </p>
                <p class=" text-sm  dark:text-gray-400">for promotion</p>
              </div>
              <input
                required
                id="dropzone-file-promotion"
                onChange={handlePromotionFile}
                type="file"
                class="hidden"
              />
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {filesPromotion.map((file, key) => {
                return (
                  <div key={key} className="overflow-hidden relative">
                    <i
                      onClick={() => {
                        removePromotionImage(file.name);
                      }}
                      className="mdi pt-2 mdi-close absolute right-1 hover:text-white cursor-pointer"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 492 492"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_9517_117)">
                          <path
                            d="M300.188 246L484.14 62.0396C489.2 56.9756 491.992 50.2196 492 43.0156C492 35.8076 489.208 29.0436 484.14 23.9876L468.02 7.87163C462.952 2.79563 456.196 0.015625 448.984 0.015625C441.784 0.015625 435.028 2.79563 429.96 7.87163L246.008 191.82L62.048 7.87163C56.988 2.79563 50.228 0.015625 43.02 0.015625C35.82 0.015625 29.06 2.79563 24 7.87163L7.872 23.9876C-2.624 34.4836 -2.624 51.5556 7.872 62.0396L191.828 246L7.872 429.952C2.808 435.024 0.02 441.78 0.02 448.984C0.02 456.188 2.808 462.944 7.872 468.012L23.996 484.128C29.056 489.2 35.82 491.984 43.016 491.984C50.224 491.984 56.984 489.2 62.044 484.128L246.004 300.176L429.956 484.128C435.024 489.2 441.78 491.984 448.98 491.984H448.988C456.192 491.984 462.948 489.2 468.016 484.128L484.136 468.012C489.196 462.948 491.988 456.188 491.988 448.984C491.988 441.78 489.196 435.024 484.136 429.956L300.188 246Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_9517_117">
                            <rect width="492" height="492" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </i>
                    <img
                      className="h-20 w-20 rounded-md"
                      src={URL.createObjectURL(file)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* fifth row */}

        <textarea
          className=" mt-3 border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4  w-full h-20  "
          type="text"
          placeholder="Detail"
          id="promotion_detail"
          // value={form.promotion_detail}
          // onChange={(e) =>
          //   setPromotion_detail(e.target.form.promotion_detail.value)
          // }
          required
          rows="4"
          cols="50"
        ></textarea>
        {/* sixth row */}
        <input
          className="mt-3 border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-full  "
          type="text"
          required
          id="promotion_url"
          // value={form.promotion_url}
          // onChange={(e) => setPromotion_url(e.target.form.promotion_url.value)}
          placeholder="Referral Link or deep link"
        />
        {/* seventh row */}
        <div className="flex max-sm:block">
          <input
            required
            className="  border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-3/6 max-sm:w-full mt-3"
            type="text"
            id="contact_number"
            placeholder="Contact Number"
            // onChange={(e) =>
            //   setContact_number(e.target.form.contact_number.value)
            // }
            // value={form.contact_number}
          />
          <div className="w-5" />
          <input
            required
            className="border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4 w-3/6 max-sm:w-full mt-3 "
            type="text"
            // value={form.promotion_url}
            // onChange={(e) =>
            //   setPromotion_url(e.target.form.promotion_url.value)
            // }
            placeholder="Facebook Page"
          />
        </div>
        <div className="flex h-50 pt-5 ">
          <button
            required
            type="submit"
            className="h-full bg-primary hover:bg-blue-700 mt-3 py-2 px-5 rounded-lg font-medium  "
            // onClick={handleSubmitForm}
            // onSubmit={}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};
export default PromotionForm;
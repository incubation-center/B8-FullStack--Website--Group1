const upload = require("../../public/Upload.svg");
const PromotionForm = () => {
  return (
    <div className="flex h-max w-full p-10 flex-col  self-center">
      <div className=" text-font_color text-2xl font-bold self-start py-10 ">
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
        {/* fourth row */}

        <div className=" flex pt-3 ">
          <div class="flex items-center justify-center w-3/6">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click</span> or drag and
                  <br />
                  <span class="flex text-center">photo</span>
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>

          <div className="w-5" />

          <div class="flex items-center justify-center w-3/6">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
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
        <textarea
          className=" mt-3 border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4  w-full h-20  "
          type="text"
          rows="4"
          cols="50"
          placeholder="Referral Link or Deep Link"
        ></textarea>
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
        {/* test  */}
        {/* <div className=" items-center justify-center w-full h-full">
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
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
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div> */}
      </form>
      <div className="flex h-50 ">
        <button className="h-full bg-primary hover:bg-blue-700 mt-3 py-2 px-5 rounded-lg font-medium  ">
          Post
        </button>
      </div>
    </div>
  );
};
export default PromotionForm;

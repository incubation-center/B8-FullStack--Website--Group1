const PromotionForm = () => {
  return (
    <div className=" flex p-10 flex-col  w-screen ">
      <div className=" text-font_color text-2xl font-bold self-start py-10 ">
        Post a new Promotion 🎉
      </div>
      <form className=" flex justify-between w-full flex-col ">
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
        <div></div>
        {/* fifth row */}
        <input
          className=" mt-3 border border-gray-400 text-font_color text-sm  shadow-inner rounded-md p-2 px-4  w-full h-20  "
          type="text"
          placeholder="Price after Discount"
        />
      </form>
    </div>
  );
};
export default PromotionForm;

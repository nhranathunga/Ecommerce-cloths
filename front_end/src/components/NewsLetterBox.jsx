import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center py-15">
      <p className="flex flex-col justify-center items-center text-2xl text-gray-800 font-semibold">
        Subscribe Now & get 20% OFF
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illum
        eaque nobis quia nemo.
      </p>
      <form
        action=""
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-600 pl-3  "
        onSubmit={onSubmitHandler}
      >
        <input
          required
          type="email"
          className="w-full outline-none sm:flex-1"
          placeholder="Enter Your Email"
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;

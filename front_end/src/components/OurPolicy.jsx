import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center my-15 ">
      <div>
        <img src={assets.exchange} className="w-12 m-auto mb-5" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We Offer hassel free Exchange policy</p>
      </div>
      <div>
        <img src={assets.quality} className="w-12 m-auto mb-5" />
        <p className="font-semibold">7 Day Return Policy</p>
        <p className="text-gray-400">We Offer hassel free Exchange policy</p>
      </div>
      <div>
        <img src={assets.service} className="w-12 m-auto mb-5" />
        <p className="font-semibold">24/7 Service</p>
        <p className="text-gray-400">We Offer hassel free Exchange policy</p>
      </div>
    </div>
  );
};

export default OurPolicy;

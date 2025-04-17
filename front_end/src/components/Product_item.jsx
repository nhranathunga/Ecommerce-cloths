import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ image, name, price, id }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      key={id}
      className="text-gray-700 cursor-pointer"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 test-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;

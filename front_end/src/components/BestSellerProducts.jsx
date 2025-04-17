import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./Product_item";

const BestSellerProducts = ({ id, image, name, price }) => {
  const { products } = useContext(ShopContext);
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestProducts(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="py-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto  text-xs ms:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          impedit assumenda eum reprehenderit ratione recusandae.
        </p>
      </div>
      {/* Best Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-4 ">
        {bestProducts.map((item) => {
          return (
            <ProductItem
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSellerProducts;

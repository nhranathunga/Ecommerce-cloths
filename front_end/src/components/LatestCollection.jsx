import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./Product_item";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestCollection, setLatestCollection] = useState([]);
  console.log(latestCollection);
  useEffect(() => {
    setLatestCollection(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10 ">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestCollection.map((product) => {
          return (
            <ProductItem
              key={product._id}
              image={product.image}
              price={product.price}
              name={product.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestCollection;

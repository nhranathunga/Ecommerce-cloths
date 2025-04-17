import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSellerProducts from "../components/BestSellerProducts";
import OurPolicy from "../components/OurPolicy";
import NewsLetterBox from "../components/NewsLetterBox";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestCollection />
      <BestSellerProducts />
      <OurPolicy />
      <NewsLetterBox />
    </>
  );
};

export default Home;

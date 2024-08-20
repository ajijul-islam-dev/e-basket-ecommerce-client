import React, { useEffect, useState } from "react";
import SideBar from "../../Components/Sidebar/Sidebar";
import BannerSlider from "../../Components/BannerSlider/BannerSlider";
import QuickSale from "../../Components/QuickSale/QuickSale";
import ProductSlide from "../../Components/OfferSlide/ProductSlide";
import { AiOutlineShopping } from "react-icons/ai";
import { FaFire } from "react-icons/fa";
import { MdFlashOn, MdOutlineCategory } from "react-icons/md";
import axios from "axios";

import productData  from "../../assets/data/products.json"
import categories  from "../../assets/data/categories.json"
import CategorySlide from "../../Components/CategorySlide/CategorySlide";
import ReviewSlide from "../../Components/ReviewSlide/ReviewSlide";
import DownloadAppSection from "../../Components/DownloadAppSection/DownloadAppSection";
import Footer from "../../Components/Footer/Footer";

function Home() {

  console.log(productData);
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-10 w-full overflow-x-hidden">
        <div className="md:col-span-2 hidden md:block">
          <SideBar />
        </div>
        <div className="md:col-span-8 ">
          <div className="">
            <BannerSlider />
          </div>
          <div className="my-10">
            <QuickSale />
          </div>
          <div className="my-12">
            <ProductSlide title="Offers" icon={<AiOutlineShopping className="text-3xl"/>} data={productData}/>
          </div>
          <div className="">
            <CategorySlide title="Top Categories" icon={<MdOutlineCategory className="text-3xl" />} data={categories}/>
          </div>
          <div className="my-12">
            <ProductSlide title="Hot Sales" icon={<FaFire className="text-3xl"/>} data={productData}/>
          </div>
          <div className="my-12">
            <ProductSlide title="Flash Sales" icon={<MdFlashOn className="text-3xl"/>} data={productData}/>
          </div>
          <div className="my-20">
            <ReviewSlide/>
          </div>
          <div className="mt-32">
            <DownloadAppSection/>
          </div>
          <div className="mt-20">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

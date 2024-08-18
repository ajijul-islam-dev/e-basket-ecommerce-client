import React from "react";
import SideBar from "../../Components/Sidebar/Sidebar";
import BannerSlider from "../../Components/BannerSlider/BannerSlider";
import QuickSale from "../../Components/QuickSale/QuickSale";

function Home() {
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
        </div>
      </div>
    </div>
  );
}

export default Home;

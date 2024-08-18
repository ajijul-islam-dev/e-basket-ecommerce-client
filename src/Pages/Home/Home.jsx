import React from "react";
import SideBar from "../../Components/Sidebar/Sidebar";
import BannerSlider from "../../Components/BannerSlider/BannerSlider";

function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-10 border w-full overflow-x-hidden">
        <div className="md:col-span-2 hidden md:block">
          <SideBar />
        </div>
        <div className="md:col-span-8 ">
          <BannerSlider />
        </div>
      </div>
      
    </div>
  );
}

export default Home;

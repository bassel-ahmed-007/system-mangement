import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="w-full h-[50px] bg-white flex items-center justify-between pl-[330px] pr-[160px] shadow-xl">
      <div className="flex items-center justify-between gap-6">
        <div className="w-[214px] h-[40px] flex items-center justify-between  bg-secondaryColor text-white rounded-[15px] p-[10px] hover:bg-secondaryColor/80 hover:cursor-pointer">
          <i class="ri-planet-line text-[25px]"></i>
          <p>All Factories</p>
          <i class="ri-arrow-down-s-line text-[25px]"></i>
        </div>
        <div
          onClick={() => navigate("/Line")}
          className="w-[40px]  bg-secondaryColor rounded-[15px] p-[6px] hover:bg-secondaryColor/80 hover:cursor-pointer"
        >
          <img src="../assets/line.png" alt="" />
        </div>
        <i class="ri-rocket-2-line rotate-45 text-secondaryColor text-[25px]"></i>
      </div>
      <div className="flex items-center justify-between gap-8 text-gray-400 font-semibold">
        <button className="w-[90px] h-[40px] text-white bg-secondaryColor rounded-[15px] hover:bg-secondaryColor/80">
          Today
        </button>
        <button>Yesterday</button>
        <button>Last Week</button>
        <i class="ri-calendar-line text-[26px]"></i>
      </div>
    </header>
  );
}

export default Header;

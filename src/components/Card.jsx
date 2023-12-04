import React from "react";
import Donut from "./Donut";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  const navigate = useNavigate();
  return (
    <div className="w-[350px] h-[490px] rounded-lg bg-white font-[500] text-secondaryColor shadow-xl">
      <div
        onClick={() => navigate("/factory")}
        className="w-full h-[50px] bg-secondaryColor text-white p-[14px] rounded-tr-lg rounded-tl-lg font-semibold hover:cursor-pointer"
      >
        {data.name}
      </div>
      {/* ////////////////////////// */}
      <div className="flex flex-col gap-5 my-[30px]">
        <div className="flex items-center justify-between px-[20px]">
          <div className="flex gap-3">
            <i class="ri-dashboard-3-line"></i> <span>Actual speed</span>
          </div>
          <div className="text-left text-slate-400">
            <span className="mr-[5px]">
              <CountUp start={0} end={5000} duration={3} />
            </span>
            L/S
          </div>
        </div>
        <div className="flex items-center justify-between px-[20px]">
          <div className="flex gap-3">
            <i class="ri-settings-5-line"></i> <span>Actual production</span>
          </div>
          <div className="text-left text-slate-400">
            <span className="text-left">
              <CountUp start={0} end={20000} duration={3} />
            </span>{" "}
            L
          </div>
        </div>
        <div className="flex items-center justify-between px-[20px]">
          <div className="flex gap-3">
            <i class="ri-edit-circle-line"></i>{" "}
            <span>Last hour cycle time</span>
          </div>
          <div className="text-left text-slate-400">
            <span className="text-left">
              <CountUp start={0} end={20} duration={3} />
            </span>
            s
          </div>
        </div>
        <div className="flex items-center justify-between px-[20px]">
          <div className="flex gap-3">
            <i class="ri-line-chart-line"></i>{" "}
            <span>Ration of active lines</span>
          </div>
          <div className="text-left text-slate-400">
            <span className="text-left">5:2</span>
          </div>
        </div>
      </div>
      {/* //////////////////////// */}
      <div className="h-[1px] w-full bg-secondaryColor relative my-[20px]">
        <div className="w-[90px] h-[38px] bg-white text-black absolute top-[-20px] right-[80px] flex items-center justify-center font-semibold rounded-lg">
          Last Shift
        </div>
      </div>
      {/* /////////////////////////// */}
      <div className="flex items-center justify-around my-[25px]">
        <div className="flex flex-col gap-2 items-center justify-between font-semibold">
          <Donut />
          <div>OEE</div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-between font-semibold">
          <Donut />
          <div>SLE</div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-between font-semibold">
          <Donut />
          <div>USLE</div>
        </div>
      </div>
      {/* /////////////////////////// */}
      <div className="flex flex-col justify-between gap-5">
        <div className="flex items-center justify-between px-[20px]">
          <div className="flex gap-3 items-center">
            <i class="ri-bar-chart-line"></i>
            <span>Production volume</span>
          </div>
          <div className="text-left text-slate-400">
            <span>
              <CountUp start={0} end={500} duration={3} />
            </span>{" "}
            L
          </div>
        </div>
        <div className="flex items-center justify-between px-[20px]">
          <div className="flex gap-3 items-center">
            <i class="ri-medal-line"></i>
            <span>Production quality</span>
          </div>
          <div className="text-left text-slate-400">
            <span>
              <CountUp start={0} end={5000} duration={3} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

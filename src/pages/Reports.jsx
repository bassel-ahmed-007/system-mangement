import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Donut from "../components/Donut";
import CountUp from "react-countup";

function Reports() {
  return (
    <section className="bg-[#F4F7FE] h-screen">
      <Header />
      <Nav />
      {/* section =============== */}
      <div className="h-[38px] w-[1540px] mt-[65px] mr-[57px] mb-[20px] ml-[315px]  flex items-center justify-between px-[20px] ">
        <div className="text-secondaryColor font-semibold">Reports</div>
      </div>
      {/* section =============== */}

      {/* section =============== */}
      <div className="h-[740px] w-[1560px] mr-[57px] ml-[315px]  rounded-xl p-[10px]  flex ">
        <div className="h-full w-full flex flex-col gap-5">
          {/* ////////////========  report Of  ==========/////////// */}
          <div className="w-full h-[225px]  bg-white shadow-xl rounded-lg">
            <div className="flex items-center gap-3 border-b-[1px] my-[5px] pl-[20px] pb-[5px] text-secondaryColor font-semibold">
              <i class="ri-draft-line"></i>
              <p className="text-[25px]">report</p>
            </div>
            <div className="flex items-center justify-between gap-5 px-[80px] mt-[20px] text-secondaryColor font-semibold">
              <div className="flex flex-col gap-4 items-center">
                <p>Total Prodction</p>
                <CountUp start={0} end={50000} duration={3} />
                <Donut />
              </div>
              <div className="flex flex-col gap-5 items-center">
                <p>Actual Prodction</p>
                <CountUp start={0} end={50000} duration={3} />
                <Donut />
              </div>
              <div className="flex flex-col gap-5 items-center">
                <p>Target Prodction</p>
                <CountUp start={0} end={50000} duration={3} />
                <Donut />
              </div>
              <div className="flex flex-col gap-5 items-center">
                <p>Final Prodction</p>
                <CountUp start={0} end={50000} duration={3} />
                <Donut />
              </div>
              <div className="flex flex-col gap-5 items-center">
                <p>loses Prodction</p>
                <CountUp start={0} end={50000} duration={3} />
                <Donut />
              </div>
            </div>
          </div>
          {/* ////////////========  report Of  ==========/////////// */}
          <div className="w-full h-[225px]  bg-white shadow-xl rounded-lg">
            <div className="flex items-center gap-3 border-b-[1px] my-[5px] pl-[20px] pb-[5px] text-secondaryColor font-semibold">
              <i class="ri-draft-line"></i>
              <p className="text-[25px]">report</p>
            </div>
            <div className="flex items-center justify-between gap-5 px-[80px] mt-[20px] text-secondaryColor font-semibold">
              <div className="flex flex-col gap-4 items-center">
                <p>Total Prodction</p>
                <CountUp start={0} end={50000} duration={3} />
                <Donut />
              </div>
              <div className="flex flex-col gap-5 items-center">
                <p>Actual Prodction</p>
                <CountUp start={0} end={50000} duration={3} />
                <Donut />
              </div>
              <div className="flex flex-col gap-5 items-center">
                <p>Target Prodction</p>
                <CountUp start={0} end={50000} duration={3} />
                <Donut />
              </div>
              <div className="flex flex-col gap-5 items-center">
                <p>Final Prodction</p>
                <CountUp start={0} end={50000} duration={3} />
                <Donut />
              </div>
              <div className="flex flex-col gap-5 items-center">
                <p>loses Prodction</p>
                <CountUp start={0} end={50000} duration={3} />
                <Donut />
              </div>
            </div>
          </div>
          {/* ////////////========  report Of  ==========/////////// */}
          <div className="w-full h-[225px]  bg-white shadow-xl rounded-lg">
            <div className="flex items-center gap-3 border-b-[1px] my-[5px] pl-[20px] pb-[5px] text-secondaryColor font-semibold">
              <i class="ri-draft-line"></i>
              <p className="text-[25px]">report</p>
            </div>
            <div className="flex items-center justify-between gap-5 px-[80px] mt-[20px] text-secondaryColor font-semibold">
              <div className="flex flex-col gap-4 items-center">
                <p>Total Prodction</p>
                <CountUp start={0} end={50000} duration={3} />
                <Donut />
              </div>
              <div className="flex flex-col gap-5 items-center">
                <p>Actual Prodction</p>
                <CountUp start={0} end={50000} duration={3} />
                <Donut />
              </div>
              <div className="flex flex-col gap-5 items-center">
                <p>Target Prodction</p>
                <CountUp start={0} end={50000} duration={3} />
                <Donut />
              </div>
              <div className="flex flex-col gap-5 items-center">
                <p>Final Prodction</p>
                <CountUp start={0} end={50000} duration={3} />
                <Donut />
              </div>
              <div className="flex flex-col gap-5 items-center">
                <p>loses Prodction</p>
                <CountUp start={0} end={50000} duration={3} />
                <Donut />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section =============== */}
    </section>
  );
}

export default Reports;

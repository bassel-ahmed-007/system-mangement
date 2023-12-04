import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Donut from "../components/Donut";
import CountUp from "react-countup";
import BarChart from "../components/BarChart";

function Factory() {
  return (
    <main className="bg-[#F4F7FE] h-screen">
      <Header />
      <Nav />

      {/* section //////////////////////////// */}
      <section className="h-[38px] w-[1540px] mt-[65px] mr-[57px] mb-[20px] ml-[315px]  flex items-center justify-between px-[20px] ">
        <div className="text-secondaryColor font-semibold">Factory Name</div>
      </section>
      {/* section //////////////////////////// */}
      <section className="h-[740px] w-[1560px] mr-[57px] ml-[315px]  rounded-xl p-[10px] -300 flex gap-5">
        <div className="h-full w-[1115px] flex flex-col gap-5">
          <div className="flex gap-8">
            {/* ////////////   total production /////////// */}
            <div className="w-[280px] h-[210px] bg-white rounded-lg shadow-xl font-[500] text-secondaryColor">
              <div className="flex items-center gap-3 border-b-[1px] my-[15px] pl-[20px] pb-[15px] font-semibold">
                <i class="ri-todo-line"></i>
                <p>Total Production</p>
              </div>
              <div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between px-[25px]">
                    <div>
                      <i class="ri-ink-bottle-line mr-[10px]"></i>{" "}
                      <span>Bottle</span>
                    </div>
                    <p className="text-slate-400">
                      <CountUp start={0} end={500} duration={3} /> K
                    </p>
                  </div>
                  <div className="flex items-center justify-between px-[25px]">
                    <div>
                      <i class="ri-box-3-line mr-[10px]"></i> <span>Pack</span>
                    </div>
                    <p className="text-slate-400">
                      <CountUp start={0} end={50} duration={3} /> K
                    </p>
                  </div>
                  <div className="flex items-center justify-between px-[25px]">
                    <div>
                      <i class="ri-bar-chart-2-line mr-[10px]"></i>{" "}
                      <span>Pallete</span>
                    </div>
                    <p className="text-slate-400">
                      <CountUp start={0} end={10} duration={3} /> K
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////=  Performance Indicator KPI  =/////////// */}
            <div className="w-[515px] h-[210px] bg-white rounded-lg shadow-xl">
              <div className="flex items-center gap-3 border-b-[1px] my-[15px] pl-[20px] pb-[15px] text-secondaryColor font-semibold">
                <i class="ri-equalizer-line"></i>
                <p>Performance Indicator KPI</p>
              </div>
              <div className="flex">
                <div className="flex items-center justify-between px-[10px] border-r-[1px] h-full w-[60%]">
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
                <div className=" w-[40%] px-[10px] mt-[10px] flex flex-col gap-2 justify-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-full h-[8px] rounded-lg  bg-[#d4f4d4]">
                        <div className="w-[75px] h-[8px] rounded-lg bg-secondaryColor"></div>
                      </div>
                      <div className="font-bold">
                        <CountUp start={0} end={30} duration={3} />%
                      </div>
                    </div>
                    <div className="text-[12px] font-[500] text-slate-400">
                      Performance
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-full h-[8px] rounded-lg  bg-[#dfe6df]">
                        <div className="w-[105px] h-[8px] rounded-lg bg-mainColor"></div>
                      </div>
                      <div className="font-bold">
                        <CountUp start={0} end={70} duration={3} />%
                      </div>
                    </div>
                    <div className="text-[12px] font-[500] text-slate-400">
                      Quality
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////===   Usage KPI    ====/////////// */}
            <div className="w-[280px] h-[210px] bg-white rounded-lg shadow-xl">
              <div className="flex items-center gap-3 border-b-[1px] my-[15px] pl-[20px] pb-[15px] text-secondaryColor font-semibold">
                <i class="ri-arrow-up-down-line"></i>
                <p>Usage KPI</p>
              </div>
              <div className="flex flex-col gap-4 mt-[30px] text-secondaryColor">
                <div className="flex items-self-center justify-between px-[10px]">
                  <div className="font-[500]">
                    <i class="ri-flashlight-line"></i> <span>Energy</span>
                  </div>
                  <div>
                    <p className="text-[12px] font-[500]">Per liter</p>
                    <p className="text-slate-400">
                      <CountUp start={0} end={500} duration={3} /> J
                    </p>
                  </div>
                  <div>
                    <p className="text-[12px] font-[500]">Per Bottle</p>
                    <p className="text-slate-400">
                      <CountUp start={0} end={500} duration={3} /> J
                    </p>
                  </div>
                </div>
                <div className="flex items-self-center justify-between px-[10px]">
                  <div className="font-[500]">
                    <i class="ri-contrast-drop-line"></i> <span>Water</span>
                  </div>
                  <div>
                    <p className="text-[12px] font-[500]">Per liter</p>
                    <p className="text-slate-400">
                      <CountUp start={0} end={500} duration={3} /> L
                    </p>
                  </div>
                  <div>
                    <p className="text-[12px] font-[500]">Per Bottle</p>
                    <p className="text-slate-400">
                      <CountUp start={0} end={500} duration={3} /> L
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ////////////====   Bar chart   ======/////////// */}
          <div className="w-full h-[390px] bg-white rounded-lg ">
            <div className="flex items-center gap-3 border-b-[1px] my-[15px] pl-[20px] pb-[15px] text-secondaryColor font-semibold">
              <i class="ri-arrow-down-fill"></i>
              <p>Loss tree</p>
            </div>
            <div className="w-full h-[240px] pt-4 px-6 ">
              <BarChart />
            </div>
          </div>
          {/* ////////////======  Time Line   =====/////////// */}
          <div className="w-full h-[145px]  bg-white shadow-xl rounded-lg">
            <div className="flex items-center gap-3 border-b-[1px] my-[5px] pl-[20px] pb-[5px] text-secondaryColor font-semibold">
              <i class="ri-pulse-fill"></i>
              <p>Time Line</p>
            </div>
            <div className="flex items-center justify-between gap-5 px-[80px] mt-[20px]">
              <p className="font-semibold text-secondaryColor">
                Line <br />
                Name
              </p>
              <div>
                <img src="../assets/line-1.png" alt="" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        {/* ////////////======  side charts   =====/////////// */}
        <div className="h-full w-[405px] bg-white rounded-lg shadow-xl px-4">
          <div>
            <div className="flex items-center gap-6 border-b-[1px] py-[10px]">
              <i class="ri-circle-fill text-[#FF9F1C]"></i>
              <p className="font-bold">CYCLE TIME</p>
              <p className="text-slate-400">seconds</p>
            </div>
            <div>
              <img
                src="../assets/chart-orange.png"
                alt=""
                className="py-[5px] w-full h-[118px]"
              />
            </div>
            <div className="flex items-center justify-between py-[20px] px-[20px] border-b-[1px]">
              <p className="font-[400]">
                Avg. <span className="text-[20px] font-bold">1.0</span>
              </p>
              <div className="flex">
                <i class="ri-arrow-down-s-line"></i>
                <p className="font-[400]">
                  Min. <span className="font-semibold">0.5</span>
                </p>
              </div>
              <div className="flex">
                <i class="ri-arrow-up-s-line"></i>
                <p className="font-[400]">
                  Max. <span className="font-semibold">2.0</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-6 border-b-[1px] py-[10px]">
              <i class="ri-circle-fill text-[#CA4E82]"></i>
              <p className="font-bold">SPEED</p>
              <p className="text-slate-400">pbh</p>
            </div>
            <div className="py-[5px]">
              <img
                src="../assets/chart-red.png"
                alt=""
                className="py-[5px] w-full h-[118px]"
              />
            </div>
            <div className="flex items-center justify-between py-[20px] px-[20px] border-b-[1px]">
              <p className="font-[400]">
                Avg. <span className="text-[20px] font-bold">1.0</span>
              </p>
              <div className="flex">
                <i class="ri-arrow-down-s-line"></i>
                <p className="font-[400]">
                  Min. <span className="font-semibold">0.5</span>
                </p>
              </div>
              <div className="flex">
                <i class="ri-arrow-up-s-line"></i>
                <p className="font-[400]">
                  Max. <span className="font-semibold">2.0</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-6 border-b-[1px] py-[10px]">
              <i class="ri-circle-fill text-[#00D1DE]"></i>
              <p className="font-bold">UPTIME</p>
              <p className="text-slate-400">bottle</p>
            </div>
            <div className="py-[5px]">
              <img
                src="../assets/chart-green.png"
                alt=""
                className="py-[5px] w-full h-[118px]"
              />
            </div>
            <div className="flex items-center justify-between py-[20px] px-[20px] ">
              <p className="font-[400]">
                Avg. <span className="text-[20px] font-bold">1.0</span>
              </p>
              <div className="flex">
                <i class="ri-arrow-down-s-line"></i>
                <p className="font-[400]">
                  Min. <span className="font-semibold">0.5</span>
                </p>
              </div>
              <div className="flex">
                <i class="ri-arrow-up-s-line"></i>
                <p className="font-[400]">
                  Max. <span className="font-semibold">2.0</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Factory;

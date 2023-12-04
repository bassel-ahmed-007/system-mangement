import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Donut from "../components/Donut";
import Linechart from "../components/Linechart";
import CountUp from "react-countup";

function Line() {
  return (
    <main className="bg-[#F4F7FE] h-screen">
      <Header />
      <Nav />

      {/* section //////////////////////////// */}
      <section className="h-[38px] w-[1540px] mt-[65px] mr-[57px] mb-[20px] ml-[315px]  flex items-center justify-between px-[20px] ">
        <div className="text-secondaryColor font-semibold">
          Factory Name / Line Name
        </div>
      </section>
      {/* section //////////////////////////// */}
      <section className="h-[740px] w-[1560px] mr-[57px] ml-[315px]  rounded-xl p-[10px] -300 flex gap-5">
        <div className="h-full w-[1115px] flex flex-col gap-5">
          <div className="flex gap-8">
            {/* ////////////======== Total Production ==========/////////// */}
            <div className="w-[280px] h-[210px] bg-white rounded-lg shadow-xl font-[500] text-secondaryColor">
              <div className="flex items-center gap-3 border-b-[1px] my-[15px] pl-[20px] pb-[15px] font-semibold">
                <i class="ri-todo-line"></i>
                <p>Total Production</p>
              </div>
              <div className="flex flex-col gap-5 px-[25px] mt-[20px]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-[20px] font-semibold">
                        <CountUp start={0} end={5000} duration={3} />
                      </p>
                      <p className="text-[12px] text-slate-400">bph</p>
                    </div>
                    <p className="text-[12px] text-slate-400">production /h</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-[20px] font-semibold">
                        <CountUp start={0} end={7000} duration={3} />
                      </p>
                      <p className="text-[12px] text-slate-400">KM</p>
                    </div>
                    <p className="text-[12px] text-slate-400">
                      Actual Production
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-full h-[8px] rounded-lg  bg-[#d4f4d4]">
                      <div className="w-[75px] h-[8px] rounded-lg bg-mainColor"></div>
                    </div>
                    <div className="font-bold">
                      <CountUp start={0} end={30} duration={3} />%
                    </div>
                  </div>
                  <div className="text-[12px] font-[500] text-slate-400">
                    Production Yeild
                  </div>
                </div>
              </div>
            </div>
            {/* ///////////  Performance Indicator KPI ===========/////////// */}
            <div className="w-[515px] h-[210px] bg-white rounded-lg shadow-xl">
              <div className="flex items-center gap-3 border-b-[1px] my-[15px] pl-[20px] pb-[15px] text-secondaryColor font-semibold">
                <i class="ri-equalizer-line"></i>
                <p>Performance Indicator KPI</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center px-[10px]  h-full w-[30%]">
                  <div className="flex flex-col gap-2 items-center justify-between font-semibold">
                    <Donut />
                    <div>OEE</div>
                  </div>
                </div>
                <div className=" w-[70%] px-[10px]  flex flex-col gap-1 justify-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-full h-[8px] rounded-lg  bg-[#d4f4d4]">
                        <div className="w-[195px] h-[8px] rounded-lg bg-yellow-400"></div>
                      </div>
                      <div className="font-bold">
                        <CountUp start={0} end={70} duration={3} />%
                      </div>
                    </div>
                    <div className="text-[12px] font-[500]">Avalibilty</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-full h-[8px] rounded-lg  bg-[#d4f4d4]">
                        <div className="w-[250px] h-[8px] rounded-lg bg-green-600"></div>
                      </div>
                      <div className="font-bold">
                        <CountUp start={0} end={95} duration={3} />%
                      </div>
                    </div>
                    <div className="text-[12px] font-[500]">Performance</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-full h-[8px] rounded-lg  bg-[#dfe6df]">
                        <div className="w-[105px] h-[8px] rounded-lg bg-mainColor"></div>
                      </div>
                      <div className="font-bold">
                        <CountUp start={0} end={30} duration={3} />%
                      </div>
                    </div>
                    <div className="text-[12px] font-[500]">Quality</div>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////======= Power KPI ===========/////////// */}
            <div className="w-[280px] h-[210px] bg-white rounded-lg shadow-xl">
              <div className="flex items-center gap-3 border-b-[1px] my-[15px] pl-[20px] pb-[15px] text-secondaryColor font-semibold">
                <i class="ri-flashlight-line"></i>
                <p>Power KPI</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pl-[20px]">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-[20px] font-semibold">
                      <CountUp start={0} end={5000} duration={3} />
                    </p>
                    <p className="text-[12px] text-slate-400">KWH</p>
                  </div>
                  <p className="text-[12px] text-slate-400">Energy Used</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-[20px] font-semibold">
                      <CountUp start={0} end={7000} duration={3} />
                    </p>
                  </div>
                  <p className="text-[12px] text-slate-400">Power Factor</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-[20px] font-semibold">
                      <CountUp start={0} end={5000} duration={3} />
                    </p>
                    <p className="text-[12px] text-slate-400">KWH</p>
                  </div>
                  <p className="text-[12px] text-slate-400">Energy Used</p>
                </div>
              </div>
            </div>
          </div>
          {/* ////////////======= line chart===========/////////// */}
          <div className="w-[1115px] h-[390px] bg-white rounded-lg shadow-xl flex flex-col">
            <div className="flex items-center gap-3 border-b-[1px] my-[15px] pl-[20px] pb-[15px] text-secondaryColor font-semibold">
              <i class="ri-pulse-fill"></i>
              <p>Current Activity</p>
            </div>
            <div className="w-full h-[240px] pt-4 px-6 ">
              <Linechart />
            </div>
          </div>
          {/* ////////////========  Time Line  ==========/////////// */}
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
        {/* ////////////========  side charts  ==========/////////// */}
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

export default Line;

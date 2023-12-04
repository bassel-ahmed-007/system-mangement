import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import CountUp from "react-countup";
import Linechart from "../components/Linechart";

function Machines() {
  return (
    <section className="bg-[#F4F7FE] h-screen">
      <Header />
      <Nav />
      {/* section =============== */}
      <div className="h-[38px] w-[1540px] mt-[65px] mr-[57px] mb-[20px] ml-[315px]  flex items-center justify-between px-[20px] ">
        <div className="text-secondaryColor font-semibold">
          Machines Of The Factory
        </div>
      </div>
      {/* section =============== */}

      {/* section =============== */}
      <div className="h-[740px] w-[1560px] mr-[57px] ml-[315px]  rounded-xl p-[10px]  flex ">
        <div className="h-full w-full flex flex-col gap-5">
          <div className="flex gap-8">
            {/* ///////////  Machine Name ===========/////////// */}
            <div className="w-[515px] h-[210px] bg-white rounded-lg shadow-xl">
              <div className="flex items-center gap-3 border-b-[1px] my-[15px] pl-[20px] pb-[15px] text-secondaryColor font-semibold">
                <i class="ri-tools-fill"></i>
                <p>Machine Name</p>
              </div>
              <div className="flex items-center justify-center">
                <div className=" w-[70%] px-[10px]  flex flex-col gap-1 justify-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-full h-[8px] rounded-lg  bg-[#d4f4d4]">
                        <div className="w-[195px] h-[8px] rounded-lg bg-violet-600"></div>
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
                        <div className="w-[250px] h-[8px] rounded-lg bg-blue-700"></div>
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
            {/* ///////////  Machine Name ===========/////////// */}
            <div className="w-[515px] h-[210px] bg-white rounded-lg shadow-xl">
              <div className="flex items-center gap-3 border-b-[1px] my-[15px] pl-[20px] pb-[15px] text-secondaryColor font-semibold">
                <i class="ri-tools-fill"></i>
                <p>Machine Name</p>
              </div>
              <div className="flex items-center justify-center">
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
                        <div className="w-[250px] h-[8px] rounded-lg bg-orange-900"></div>
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
            {/* ///////////  Machine Name ===========/////////// */}
            <div className="w-[515px] h-[210px] bg-white rounded-lg shadow-xl">
              <div className="flex items-center gap-3 border-b-[1px] my-[15px] pl-[20px] pb-[15px] text-secondaryColor font-semibold">
                <i class="ri-tools-fill"></i>
                <p>Machine Name</p>
              </div>
              <div className="flex items-center justify-center">
                <div className=" w-[70%] px-[10px]  flex flex-col gap-1 justify-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-full h-[8px] rounded-lg  bg-[#d4f4d4]">
                        <div className="w-[195px] h-[8px] rounded-lg bg-fuchsia-600"></div>
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
                        <div className="w-[105px] h-[8px] rounded-lg bg-sky-950"></div>
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
          </div>
          {/* ////////////========  Time Line  ==========/////////// */}
          <div className="w-full h-[145px]  bg-white shadow-xl rounded-lg">
            <div className="flex items-center gap-3 border-b-[1px] my-[5px] pl-[20px] pb-[5px] text-secondaryColor font-semibold">
              <i class="ri-pulse-fill"></i>
              <p>Time Line</p>
            </div>
            <div className="flex items-center justify-between gap-5 px-[80px] mt-[20px]">
              <p className="font-semibold text-secondaryColor">
                Machine <br />
                Name
              </p>
              <div>
                <img src="../assets/line-1.png" alt="" className="rounded-lg" />
              </div>
            </div>
          </div>
          <div className="flex gap-14">
            {/* ////////////======= line chart===========/////////// */}
            <div className="w-[1115px] h-[350px]  rounded-lg shadow-xl flex flex-col bg-sky-200">
              <div className="flex items-center gap-3 border-b-[1px] my-[15px] pl-[20px] pb-[15px] text-secondaryColor font-semibold">
                <i class="ri-pulse-fill"></i>
                <p>Machine Activity</p>
              </div>
              <div className="w-full h-[240px] pt-4 px-6 ">
                <Linechart />
              </div>
            </div>
            {/* ////////////======== Total Production ==========/////////// */}
            <div className="w-[380px] h-[350px] bg-white rounded-lg shadow-xl font-[500] text-secondaryColor">
              <div className="flex items-center gap-3 border-b-[1px] my-[15px] pl-[20px] pb-[15px] font-semibold">
                <i class="ri-todo-line"></i>
                <p>Machine Production</p>
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
          </div>
        </div>
      </div>
      {/* section =============== */}
    </section>
  );
}

export default Machines;

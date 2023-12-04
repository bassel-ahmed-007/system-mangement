import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Settings() {
  return (
    <section>
      <Header />
      <Nav />
      {/* section =============== */}
      <section className="h-[38px] w-[1540px] mt-[65px] mr-[57px] mb-[20px] ml-[315px]  flex items-center justify-between px-[20px] ">
        <div className="text-secondaryColor font-semibold">Settings</div>
      </section>
      {/* section =============== */}
    </section>
  );
}

export default Settings;

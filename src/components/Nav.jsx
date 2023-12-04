import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <nav className="w-[280px] h-screen bg-mainColor absolute top-0 left-0 flex flex-col items-center justify-between text-[22px] text-slate-300">
      <div className="mt-[40px] mx-auto text-white   flex items-center gap-5">
        <i class="ri-building-3-fill"></i>
        <span>MES</span>
      </div>
      <div className="flex flex-col items-start justify-between gap-8 ">
        <div
          onClick={() => navigate("/all")}
          className="w-[200px] h-[50px] flex items-center justify-start gap-4 pl-[20px]  hover:text-white hover:cursor-pointer hover:bg-black/40 rounded-[30px]"
        >
          <i class="ri-apps-2-line"></i> <span>Dashboard</span>
        </div>
        <div
          onClick={() => navigate("/machines")}
          className="w-[200px] h-[50px] flex items-center justify-start gap-4 pl-[20px]  hover:text-white hover:cursor-pointer hover:bg-black/40 rounded-[30px]"
        >
          <i class="ri-tools-fill"></i> <span>Machines</span>
        </div>
        <div
          onClick={() => navigate("/planning")}
          className="w-[200px] h-[50px] flex items-center justify-start gap-4 pl-[20px]  hover:text-white hover:cursor-pointer hover:bg-black/40 rounded-[30px]"
        >
          <i class="ri-git-merge-fill"></i> <span>Planning</span>
        </div>
        <div
          onClick={() => navigate("/reports")}
          className="w-[200px] h-[50px] flex items-center justify-start gap-4 pl-[20px]  hover:text-white hover:cursor-pointer hover:bg-black/40 rounded-[30px]"
        >
          <i class="ri-file-chart-fill"></i> <span>Reports</span>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-6 ">
        <div
          onClick={() => navigate("/settings")}
          className="w-[200px] h-[50px] flex items-center justify-start gap-4 pl-[20px]  hover:text-white hover:cursor-pointer hover:bg-black/40 rounded-[30px]"
        >
          <i class="ri-settings-2-fill"></i> <span>Settings</span>
        </div>
        <div
          onClick={() => navigate("/")}
          className="w-[200px] h-[50px] flex items-center justify-start gap-4 pl-[20px]  hover:text-white hover:cursor-pointer hover:bg-black/40 rounded-[30px]"
        >
          <i class="ri-logout-box-r-fill"></i> <span>Logout</span>
        </div>
      </div>
      <div>
        <img src="../assets/coca-cola.png" alt="" />
      </div>
    </nav>
  );
}

export default Nav;

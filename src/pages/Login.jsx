import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <section className="w-full h-screen bg-mainColor flex">
      <div className="w-[1406px] h-full bg-transparent flex items-center justify-center">
        <div className="w-[717px] h-[717px]">
          <img src="../assets/platform.png" alt="pic" />
        </div>
      </div>

      <div className="w-[514px] h-full bg-white flex flex-col">
        <div className="mb-[226px] mt-[162px] mx-auto text-mainColor text-[40px] flex items-center gap-5">
          <i class="ri-building-3-fill"></i>
          <span>MES</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <form action="#" className="flex flex-col gap-6 relative">
            <input
              type="email"
              placeholder="e.mail"
              className="w-[300px] h-[60px] border-[2px] rounded-[40px] pl-[80px] focus:border-mainColor focus:outline-none"
            />

            <i class="ri-mail-line text-[30px] text-secondaryColor absolute top-[9px] left-[20px]"></i>

            <input
              type="password"
              placeholder="password"
              className="w-[300px] h-[60px] border-[2px] rounded-[40px] pl-[80px] focus:border-mainColor focus:outline-none"
            />

            <i class="ri-lock-line text-[30px] text-secondaryColor absolute top-[90px] left-[20px]"></i>
          </form>
          <button
            onClick={() => navigate("/all")}
            className="w-[300px] h-[60px]  rounded-[40px] bg-mainColor text-white font-bold hover:bg-mainColor/70 transition-all duration-300"
          >
            LOGIN
          </button>
          <div className="w-[200px] h-[66px]">
            <img src="../assets/coca.png" alt="pic" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

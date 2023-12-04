import Header from "../components/Header";
import Nav from "../components/Nav";
import Card from "../components/Card";

const data = [
  {
    id: 1,
    name: "Cairo Factory",
  },
  {
    id: 2,
    name: "Giza Factory",
  },
  {
    id: 3,
    name: "Sohag Factory",
  },
  {
    id: 4,
    name: "USA Factory",
  },
  {
    id: 5,
    name: "UK Factory",
  },
  {
    id: 6,
    name: "Turkey Factory",
  },
  {
    id: 7,
    name: "Brazil Factory",
  },
  {
    id: 8,
    name: "Spain Factory",
  },
];

function All() {
  return (
    <main className="w-full h-screen bg-[#F4F7FE] relative">
      <Header />
      <Nav />

      {/* ============ section ======== */}
      <section className="h-[38px] w-[1540px] mt-[65px] mr-[57px] mb-[20px] ml-[315px]  flex items-center justify-between px-[20px] ">
        <div className="text-secondaryColor font-semibold">
          Dashboard / Production
        </div>
        <div className="w-[235px] h-[38px] flex items-center justify-between bg-white rounded-lg pr-[2px] font-[500]">
          <button className="w-[50%] h-full text-secondaryColor">SKU</button>
          <button className="w-[50%] h-[90%] bg-mainColor rounded-lg text-white">
            Production
          </button>
        </div>
      </section>
      {/* ============ section ======== */}
      <section className="h-[730px] w-[1540px] mr-[57px] ml-[315px]  rounded-xl p-[10px] grid grid-cols-4 gap-6 overflow-y-scroll">
        {data.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </section>
      {/* ============ section ======== */}
    </main>
  );
}

export default All;

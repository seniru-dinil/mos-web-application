import hero_img1 from "./assets/hero_img1.png";

function Home() {
  return (
    <>
      <section className="custom-grid  h-screen px-20 py-8">
        <div className=" bg-[#1f1b24]   rounded-3xl col-start-1 col-end-2 row-start-1 row-end-3 ">
          <h1 className="text-[5rem] font-bold  mt-5 ml-9">
            Making People Happy Through Food
          </h1>
          <div className="flex">
            <div className="flex-1/2 ">
              <button className="py-3 px-5 rounded-full bg-[#BB86FC] mt-10 ml-10 text-[#121212] font-bold cursor-pointer">
                order now
              </button>
            </div>
            <div className="flex-1/2">
              <img
                src={hero_img1}
                alt=""
                className=" object-contain ml-33  w-[330px] brightness-80"
              />
            </div>
          </div>
        </div>
        <div className=" bg-[#1A1A1D]/70 rounded-3xl">
          <h2 className="text-2xl font-bold text-center mt-4">
            Your MOS Moment
          </h2>
        </div>
        <div className="bg-[#BB86FC] rounded-3xl"></div>
      </section>
    </>
  );
}

export default Home;

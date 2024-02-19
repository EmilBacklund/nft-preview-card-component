function App() {
  return (
    <main className="h-screen bg-darkBlue">
      <section className="grid place-items-center h-full px-6">
        <div className="bg-cardBlue max-w-[350px] w-full px-6 pt-6 pb-8 rounded-[15px]">
          <div className="relative rounded-lg overflow-hidden cursor-pointer">
            <img src="/images/image-equilibrium.jpg" alt="equilibrium" />
            <div className="opacity-0 hover:opacity-[50.3%] bg-cyan w-full h-full absolute left-0 top-0 duration-200"></div>
          </div>
          <div className="py-6 border-b border-dividerBlue">
            <h1 className="text-white text-[22px] font-semibold leading-[28px] mb-4 hover:text-cyan cursor-pointer duration-200">
              Equilibrium #3429
            </h1>
            <p className="text-softBlue font-light text-lg leading-[26px] mb-6">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div className="flex justify-between items-center gap-2 flex-wrap">
              <div className="flex gap-[6.48px] items-center">
                <img src="/images/icon-ethereum.svg" alt="ethereum" />
                <p className="text-cyan font-semibold leading-5">0.041 ETH</p>
              </div>
              <div className="flex items-center gap-[7.7px]">
                <img src="/images/icon-clock.svg" alt="" />
                <p className="leading-5 text-softBlue">3 days left</p>
              </div>
            </div>
          </div>
          <div className="pt-4 flex items-center gap-4 ">
            <div className="w-[33px] h-[33px] ring-1 ring-white rounded-full">
              <img src="/images/image-avatar.png" alt="" />
            </div>
            <p className="text-white leading-5">
              <span className="text-softBlue">Creation of</span>{" "}
              <span className="hover:text-cyan cursor-pointer duration-200 truncate">
                Jules Wyvern
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

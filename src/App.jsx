function App() {
  return (
    <main className="h-screen bg-darkBlue">
      <section className="grid place-items-center h-full px-6">
        <div className="bg-cardBlue max-w-[327px] sm:max-w-[350px] w-full px-6 pt-6 pb-6 sm:pb-8 rounded-[15px]">
          <div className="relative rounded-lg overflow-hidden cursor-pointer sm:max-w-max max-w-[278px] group">
            <img src="/images/image-equilibrium.jpg" alt="equilibrium" />
            <div className="opacity-0 group-hover:opacity-[50.3%] bg-cyan w-full h-full absolute left-0 top-0 duration-200"></div>
            <img
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-200"
              src="/images/icon-view.svg"
              alt=""
            />
          </div>
          <div className="pt-6 sm:pb-6 pb-4 border-b border-dividerBlue">
            <h1 className="text-white text-[22px] font-semibold leading-[28px] mb-3 sm:mb-4 hover:text-cyan cursor-pointer transition-colors duration-200">
              Equilibrium #3429
            </h1>
            <p className="text-softBlue font-light text-lg leading-[26px] mb-4 sm:mb-6">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div className="flex justify-between items-center gap-2 flex-wrap">
              <div className="flex gap-[6.48px] items-center">
                <img src="/images/icon-ethereum.svg" alt="ethereum" />
                <p className="text-cyan font-semibold leading-[19px] sm:text-base text-[15px] sm:leading-5">
                  0.041 ETH
                </p>
              </div>
              <div className="flex items-center gap-[7.7px]">
                <img src="/images/icon-clock.svg" alt="" />
                <p className="leading-[19px] sm:text-base text-[15px] sm:leading-5 text-softBlue">
                  3 days left
                </p>
              </div>
            </div>
          </div>
          <div className="pt-4 flex items-center gap-4 ">
            <div className="w-[33px] h-[33px] ring-1 ring-white rounded-full">
              <img src="/images/image-avatar.png" alt="" />
            </div>
            <p className="text-white text-[15px] sm:text-base leading-[19px] sm:leading-5">
              <span className="text-softBlue">Creation of </span>
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

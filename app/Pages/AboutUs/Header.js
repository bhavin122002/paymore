import React from "react";

function Header() {
  return (
    <div className="fixed top-0 w-full z-10">
      <header className="bg-black">
        <nav
          className="max-w-[1500px] mx-auto sm:flex flex-wrap justify-center   flex  items-center md:justify-between p-1 lg:px-8 "
          aria-label="Global"
        >
          <div className="sm:justify-center lg:flex item-center flex lg:gap-x-2">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <img
                src="Images/facebook.png"
                alt="Facebook"
                className="m-[10px]"
              />
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <img
                src="Images/instagram.png"
                alt="Instagram"
                className="m-[10px]"
              />
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <img
                src="Images/twitter.png"
                alt="Twitter"
                className="m-[10px]"
              />
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <img src="Images/google.png" alt="Google" className="m-[10px]" />
            </a>
          </div>
          <div className=" sm:block item-center  lg:flex lg:flex-1 lg:justify-end md:block">
            <div className="sm:items-center mt-2  md:block mr-4 lg:flex lg:gap-x-6 ">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white border-r-2 border-[#3A3A3A] mr-4"
              >
                <span className="mr-5">Buy</span>
              </a>

              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white border-r-2 border-[#3A3A3A]  mr-4"
              >
                <span className="mr-5">Trade</span>
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white border-r-2 border-[#3A3A3A] mr-4"
              >
                <span className="mr-5">Sell</span>
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white  mr-4"
              >
                <span className="">locations</span>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;

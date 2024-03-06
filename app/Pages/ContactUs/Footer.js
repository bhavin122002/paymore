import React from "react";

export default function Testing() {
  return (
    <div>
      <footer className=" bg-[#282828]" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-[1500px] mx-auto px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-12">
          <div className="xl:flex lg:flex-row md:flex-row mb-8 md:flex flex-col flex mt-8 md:mt-0">
            <div
              className="xl:w-1/2 lg:w-1/2 md:w-1/2 text-left 
            md:text-left
            "
            >
              <h1 className="text-3xl text-white">Subscribe Now </h1>
              <p className="mt-5 text-1xl text-white">
                Subscribe for getting our latest items update regularly
              </p>
            </div>
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 my-5 ">
              <form className="mx-auto">
                <div className="flex justify-start">
                  <div className="relative w-full overflow-hidden">
                    <input
                      type="search"
                      id="location-search"
                      className="block p-4 w-full h-[57px] z-20 text-sm text-gray-900 bg-gray-50  border-s-gray-50 border-s-2 border border-gray-300 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 rounded-full"
                      placeholder="Your email address"
                    />
                    <button
                      type="submit"
                      className="absolute top-0 end-0 h-[57px] w-[145px] px-5 text-[18px] font-[600px] font-sans text-white bg-[#64BC46] hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#64BC46] dark:hover:bg-[#64BC46] = rounded-full"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="xl:grid xl:grid-cols-3 xl:gap-8  border-t border-[#3A3A3A]">
            <div className="space-y-8 mt-10 mr-3 xl:border-r-2 border-[#3A3A3A]">
              <img className="h-10" src="/Images/footer.png" alt="Paymore" />
              <p className="text-sm leading-6 text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s...
              </p>
              <div className="flex mt-5">
                <div className="mr-3">
                  <img src="/Images/bage.png" />
                </div>
                <div>
                  <img src="/Images/user.png" />
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-[#3A3A3A] xl:border-none grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-10">
              <div className="md:grid md:grid-cols-2 md:gap-8 ">
                <div className="mt-7  border-r-2 border-[#3A3A3A] ">
                  <h3 className="text-sm font-semibold uppercase leading-6 text-white">
                    Quick Links
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-white ">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-white ">
                        Warranty
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-white ">
                        Site Map
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-white ">
                        News
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-white ">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-7 border-r-2 border-[#3A3A3A] ">
                  <h3 className="text-sm font-semibold uppercase leading-6 text-white">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-white ">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-white ">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-white ">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-white ">
                        Press & Media
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-white ">
                        Franchise
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8 ">
                <div className="mt-7">
                  <h3 className="text-sm font-semibold uppercase leading-6 text-white">
                    Contact Us
                  </h3>
                  <ul className="text-white dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <p className="text-white text-xs flex items-center mt-5">
                        <img
                          src="/Images/Vector3.png"
                          className="m-[5px] w-4 mr-2"
                        />{" "}
                        +01 234XX XXXXX
                      </p>
                    </li>
                    <li>
                      <p className="text-white text-xs flex items-center mt-5">
                        <img
                          src="/Images/Vector2.png"
                          className="m-[5px] w-4 mr-2"
                        />{" "}
                        Loremipsum@email.com
                      </p>
                    </li>
                  </ul>
                  <div className="lg:flex flex lg:gap-x-2 mt-4">
                    <a
                      href="#"
                      className="mr-3 text-sm font-semibold leading-6 text-gray-900"
                    >
                      <img
                        src="/Images/footerF.png"
                        alt="Facebook"
                        className="m-[10px]"
                      />
                    </a>
                    <a
                      href="#"
                      className="mr-3 text-sm font-semibold leading-6 text-gray-900"
                    >
                      <img
                        src="/Images/footerI.png"
                        alt="Instagram"
                        className="m-[10px]"
                      />
                    </a>
                    <a
                      href="#"
                      className="mr-3 text-sm font-semibold leading-6 text-gray-900"
                    >
                      <img
                        src="/Images/footerT.png"
                        alt="Twitter"
                        className="m-[10px]"
                      />
                    </a>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      <img
                        src="/Images/footerG.png"
                        alt="Google"
                        className="m-[10px]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:flex justify-between items-center mt-16 border-t border-[#3A3A3A] pt-4 sm:mt-20 lg:mt-8 lg:justify-between">
            <p className="flex justify-center text-2xl leading-10 text-center lg:text-base text-white  md:text-base">
             &#x24B8; Copyright 2012 – 2024 | All Right Reserved
            </p>
            <div className="flex justify-center sm:items-center mt-2  md:block mr-4 lg:flex lg:gap-x-6 ">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white  border-r-2 border-[#3A3A3A] mr-4"
              >
                <span className="mr-2 md:mr-5">Privacy</span>
              </a>

              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white  border-r-2 border-[#3A3A3A]  mr-4"
              >
                <span className="mr-2 md:mr-5">Terms</span>
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white "
              >
                <span className="mr-2 md:mr-5">ID Verification</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

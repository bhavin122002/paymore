import React from "react";

export default function RecentNews() {
  return (
    <div className="bg-[#F4F4F4] shadow-inner">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col items-center pt-7">
          <h2 className="text-4xl text-[#282828] mb-6 ">Recent News</h2>
        </div>
        <div>
          <div className="justify-center items-center sm:block md:flex p-6">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  sm:mt-6 md:m-1 lg:mt-6 xl:mr-6">
              <a href="#">
                <img className="rounded-t-lg" src="Images/img1.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <p className="mb-2 text-xs text-center flex font-bold tracking-tight text-lime-500">
                    <img src="Images/clander.png" className="size-3.5 mr-2" />
                    Jan 17, 2024
                  </p>
                </a>
                <a href="#">
                  <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    Lorem Ipsum Simply
                  </h4>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati vero perspiciatis ullam ea? Nihil accusamus
                  similique debitis tempore...
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-0 py-2 text-sm font-medium text-center text-lime-500  focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Read more <img src="Images/right.png" className="ml-2" />
                </a>
              </div>
            </div>
            <div className="mt-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow sm:mt-6 md:m-1 lg:mt-6 xl:mr-6">
              <a href="#">
                <img className="rounded-t-lg" src="Images/img2.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <p className="mb-2 text-xs text-center flex font-bold tracking-tight text-lime-500">
                    <img src="Images/clander.png" className="size-3.5 mr-2" />
                    Jan 17, 2024
                  </p>
                </a>
                <a href="#">
                  <h4 className="mb-2 text-2xl font-bold tracking-tight ">
                    Lorem Ipsum Simply
                  </h4>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati vero perspiciatis ullam ea? Nihil accusamus
                  similique debitis tempore...
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-0 py-2 text-sm font-medium text-center text-lime-500  focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Read more <img src="Images/right.png" className="ml-2" />
                </a>
              </div>
            </div>
            <div className="mt-4 max-w-sm  bg-white border border-gray-200 rounded-lg shadow sm:mt-6 md:m-1 lg:mt-6 xl:mr-6">
              <a href="#">
                <img className="rounded-t-lg" src="Images/img3.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <p className="mb-2 text-xs text-center flex font-bold tracking-tight text-lime-500">
                    <img src="Images/clander.png" className="size-3.5 mr-2" />
                    Jan 17, 2024
                  </p>
                </a>
                <a href="#">
                  <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    Lorem Ipsum Simply
                  </h4>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati vero perspiciatis ullam ea? Nihil accusamus
                  similique debitis tempore...
                </p>
                <a
                  href="#"
                  className="inline-flex items-center py-2 text-sm font-medium text-center text-lime-500  focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more <img src="Images/right.png" className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-center">
        <a
          href="#"
          className="text-sm font-semibold leading-6 text-black p-[0, 10px]"
        >
          <button className="rounded-full mb-10 bg-lime-600 px-4 py-2 text-white text-sm items-center justify-center">
            View More
          </button>
        </a>
      </div>
    </div>
  );
}

import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="max-w-[1500px]  mx-auto p-8 h-[219dvh] md:h-[102vh] lg:h-[108svh] xl:h-svh 2xl:h-[52lvh]">
        <div className="flex justify-center items-center ">
          <div className="w-2/3 my-8 h-24">
            <h1 className="text-lg text-[#282828] text-center md:text-2xl lg:text-3xl">
              Contact PayMore Stores
            </h1>
            <p className="text-justify text-[#666666] text-sm leading-6 md:text-center mt-5 text-1xl text-wrap ">
              We appreciate your interest in PayMore Stores. By actively
              listening to our customers, partners, and community, we are able
              to consistently expand and enhance our company.
            </p>
          </div>
        </div>
        <div className="items-center relative md:top-12 2xl:top-8 bg-white shadow-xl border-2 rounded-3xl sm:block md:flex w-full px-6 block lg:flex xl:flex">
          <div className=" mt-9 top-12 sm:w-full md:w-full md:top-8 lg:w-full lg:mr-12">
            <section className="bg-white">
              <div className="mx-auto max-w-screen-md">
                <form action="#" className="space-y-8">
                  <div>
                    <input
                      type="name"
                      id="name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5  dark:border-gray-600 dark:placeholder-black dark:text-black "
                      placeholder="Enter first and last name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5  dark:border-gray-600 dark:placeholder-black dark:text-black "
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      id="phone number"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5  dark:border-gray-600 dark:placeholder-black dark:text-black "
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div>
                    <select
                      id="countries"
                      value=""
                      className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-full block w-full p-2.5  dark:border-gray-600 dark:placeholder-black text-black "
                    >
                      <option selected>Your nearest PayMore Store®</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div>
                    <select
                      id="countries"
                      value=""
                      className="bg-gray-50 border border-gray-300 text-sm rounded-full  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black "
                    >
                      <option selected>Please select a subject</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <textarea
                      id="message"
                      rows="6"
                      className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300  dark:border-gray-600 dark:placeholder-black dark:text-black "
                      placeholder="Write Message"
                    ></textarea>
                  </div>
                  <div className="">
                    <p className="text-[#000000]">
                      How do you prefer to be contacted back?
                    </p>
                    <div>
                      <ul className="items-center w-full text-sm font-medium text-gray-900 sm:flex   dark:text-black">
                        <li className="w-full">
                          <div className="flex items-center ps-3">
                            <input
                              id="horizontal-list-radio-license"
                              type="radio"
                              value=""
                              name="list-radio"
                              className="w-6 h-6 accent-[#50d71e] bg-gray-100 border-gray-300  "
                            />
                            <label
                              htmlFor="horizontal-list-radio-license"
                              className="w-full py-3 ms-2 text-sm font-medium text-black dark:text-black"
                            >
                              Email
                            </label>
                          </div>
                        </li>
                        <li className="w-full">
                          <div className="flex items-center ps-3">
                            <input
                              id="horizontal-list-radio-id"
                              type="radio"
                              value=""
                              name="list-radio"
                              className="w-6 h-6 accent-[#64BC46]  bg-gray-100 border-gray-300  "
                            />
                            <label
                              htmlFor="horizontal-list-radio-id"
                              className="w-full py-3 ms-2 text-sm font-medium text-black dark:text-black"
                            >
                              Call
                            </label>
                          </div>
                        </li>
                        <li className="w-full">
                          <div className="flex items-center ps-3">
                            <input
                              id="horizontal-list-radio-military"
                              type="radio"
                              value=""
                              name="list-radio"
                              className="w-6 h-6 accent-[#64BC46] bg-gray-100 border-gray-300 "
                            />
                            <label
                              htmlFor="horizontal-list-radio-military"
                              className="w-full py-3 ms-2 text-sm font-medium text-black dark:text-black"
                            >
                              Text
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
                <div className="py-5">
                  <button
                    type="submit"
                    className=" py-3 px-5 text-sm font-medium text-center text-white rounded-full bg-[#64BC46] sm:w-fit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className="sm:w-full hidden md:w-full md:block lg:w-full ">
            <img src="/Images/conteactus.png" className="h-5/6 md:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

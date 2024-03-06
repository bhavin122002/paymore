import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="max-w-[1500px]  mx-auto p-8 h-[219dvh] md:h-[102vh] lg:h-[108svh] xl:h-svh 2xl:h-[52lvh]">
        <div className="flex items-center relative md:top-12 2xl:top-8 bg-white shadow-xl border-2 rounded-3xl sm:block md:flex w-full px-6 lg:flex xl:flex">
          <div className=" mt-9 top-12 sm:w-full md:w-full md:top-8 lg:w-full lg:mr-12">
            <div>
              <h1 className="text-lg text-[#282828] text-center md:text-2xl lg:text-3xl">
                Request a quote
              </h1>
            </div>
            <section className="bg-white">
              <div className="grid-cols-12 mx-auto max-w-screen-md">
                <form action="#" className="space-y-8">
                  <div className="grid-cols-6">
                    <input
                      type="name"
                      id="name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5  dark:border-gray-600 dark:placeholder-black dark:text-black "
                      placeholder="Enter first and last name"
                      required
                    />
                  </div>
                  <div className="grid-cols-6">
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5  dark:border-gray-600 dark:placeholder-black dark:text-black "
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div className="grid-cols-6">
                    <input
                      type="number"
                      id="phone number"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5  dark:border-gray-600 dark:placeholder-black dark:text-black "
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="grid-cols-6">
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
                  <div className="grid-cols-6">
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
        </div>
      </div>
    </div>
  );
}

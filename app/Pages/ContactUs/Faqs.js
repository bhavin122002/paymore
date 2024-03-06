import React from "react";

export default function Questions() {
  const faqs = [
    {
      question: "How much can I get for my device(s)?",
      answer:
        "We cannot offer our cash prices without first seeing, testing and inspecting your device(s). To get the best price, please bring your device to our store.",
    },
    {
      question: "Do you accept mailed in devices? I am not close to one of your stores.",
      answer:
        "Do you accept mailed in devices? I am not close to one of your stores.",
    },
    {
      question:
        "Restricted devices that we do not purchase.",
      answer:
        "Restricted devices that we do not purchase.",
    }
  ];
  return (
    <div className=" text-black p-8 bg-[#F4F4F4] shadow-inner">
      <div className="bg-[#F4F4F4] max-w-[1500px] mx-auto mt-8">
        <div className="flex flex-col items-left">
          <h2 className="text-4xl md:mt-72 lg:mt-52 xl:mt-56 2xl:mt-72 mb-6 tracking-tight">Frequently Asked Questions</h2>
        </div>
        {faqs.map((faq, index) => (
          <div key={index} className="py-5">
            <details className="group border-b border-[#C2C2C2]">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="mb-3">{faq.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 my-4 group-open:animate-fadeIn">
                {faq.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}

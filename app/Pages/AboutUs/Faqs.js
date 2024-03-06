import React from "react";

export default function Questions() {
  const faqs = [
    {
      question: "Walk into a PayMore Store, walk out with top cash today.",
      answer:
        "Sell your old electronics for cash at our PayMore Stores today. Skip the worries of dealing with strangers or selling online, and forget about getting gift cards in return. We give you instant cash today that you can use however you want, and we make sure you get the most money for your electronics. Our industry leading trade-in software instantly calculates devices values in real time like a stock-market for electronics, always ensuring top dollar paid to you.",
    },
    {
      question: "We are licensed, insured, and a part of your local community.",
      answer:
        "We offer a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
    },
    {
      question:
        "Turn old electronics into cash by recycling, reusing, and reducing.",
      answer:
        "We offer a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.",
    },
    {
      question: "We wipe your devices so you're always data safe.",
      answer:
        "To cancel your We subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing.",
    },
  ];
  return (
    <div className=" text-black pt-10 p-8 bg-[#F4F4F4] shadow-inner">
      <div className="bg-[#F4F4F4] max-w-[1500px] mx-auto mt-8">
        <div className="flex flex-col items-left">
          <h2 className="text-4xl mb-6 tracking-tight">Paymore FAQ’s</h2>
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

import React from "react";

const awardsData = [
  { id: 1, imageSrc: "Images/logo.png" },
  { id: 2, imageSrc: "Images/logo.png" },
  { id: 3, imageSrc: "Images/logo.png" },
  { id: 4, imageSrc: "Images/logo.png" },
  { id: 5, imageSrc: "Images/logo.png" },
  { id: 6, imageSrc: "Images/logo.png" },
  { id: 7, imageSrc: "Images/logo.png" },
  { id: 8, imageSrc: "Images/logo.png" },
];

export default function AwardsAndCertifications() {
  return (
    <div className="my-12">
      <div className="text-center flex flex-col items-center">
        <h2 className="text-4xl text-[#282828] py-8 tracking-tight">
          {" "}
          Awards and Certification
        </h2>
      </div>
      <div className="sm:flex p-6 grid gap-4 grid-cols-2 md:p-0 w-full overflow-x-auto scroll-snap-type-x: mandatory">
        {awardsData.map((award) => (
          <div
            key={award.id}
            className="w-full p-3 scroll-snap-align: start border-solid border-2 divide-slate-500 md:w-full rounded-md"
          >
            <img
              src={award.imageSrc}
              className="w-36 items-center"
              alt={`Award ${award.id}`}
            />
          </div>
        ))}

      </div>
    </div>
  );
}

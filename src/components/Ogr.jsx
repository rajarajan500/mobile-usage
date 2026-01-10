import React from "react";

function Ogr() {
  return (
    <div className="p-3">
      <div className="bg-[#778da9] w-full rounded p-1">
        <h1 className="font-semibold">
          Recommended Usage Limits by Age Health organizations like the American
          Academy of Pediatrics (AAP) and the Indian Academy of Pediatrics (IAP)
          provide specific guidelines to safeguard development:
        </h1>
        <div className="">
          <ul  className="list-disc px-5 pt-2 font-semibold">
            <li data-aos='fade-in'>
              <h1 className="font-bold">0 - 18 months:</h1>
              <h1>No screen time, except for occasional video chatting.</h1>
            </li>
            <li data-aos='fade-in'>
              <h1 className="font-bold">18 - 24 months:</h1>
              <h1>Only high-quality programming viewed with a parent.</h1>
            </li>

            <li data-aos='fade-in'>
              <h1 className="font-bold">2 - 5 Years:</h1>
              <h1>Maximum 1 hour per day of educational content.</h1>
            </li>
            <li data-aos='fade-in'>
              <h1 className="font-bold">6 - 12 Years:</h1>
              <h1>Up to 2 hours per day, prioritized for education and social bonding.</h1>
            </li>
            <li data-aos='fade-in'>
              <h1 className="font-bold">13+ Years:</h1>
              <h1>No more than 2 hours per day for recreational use. </h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Ogr;

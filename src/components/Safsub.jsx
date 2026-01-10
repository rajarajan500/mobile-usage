import React from "react";

function Safsub({Title,Sub}) {
  return (
    <div data-aos='fade-up' className="my-4 p-2  mx-2 flex flex-col justify-center items-center rounded bg-[#f9dbbd]">
      <h1 className="font-bold">{Title}</h1>
      <h1 className="text-center font-semibold">{Sub}</h1>
    </div>
  );
}

export default Safsub;

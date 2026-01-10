import React from "react";

function Caspo({ Title, Sub , sub1, sub2 , sub3 }) {
  return (
    <div>
      <div className="px-1 font-bold flex flex-row items-center gap-3 pt-2">
        <i class="fa-solid fa-circle-dot" />
        <h1 className="text-xl">{Title}</h1>
      </div>
      <div className=" px-9 font-semibold">
        <h1>{Sub}</h1>
      </div>
      <div className="text-center pt-3 px-10 flex flex-row justify-between">
        <h1 className="font-bold">{sub1}</h1>
        <h1 className="font-bold">{sub2}</h1>
        <h1 className="font-bold">{sub3}</h1>
      </div>
    </div>
  );
}

export default Caspo;

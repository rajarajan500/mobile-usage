import React from "react";
import img1 from "../assets/head.png";
import { use, useState } from 'react'

function Header() {
  
  return (
    
    <div className="w-full h-[170px] bg-[#b0c4b1] flex justify-center">
        <div className="flex flex-row justify-center items-center">
      <img
        src={img1}
        alt="Header"
        className="h-[100px] w-[100px]  object-cover"
      />
      <div>
        <h1 data-aos="fade-in"  className="text-xl font-bold ">HEALTHY MOBILE USAGE</h1>
      </div>
    </div></div>
  );
}

export default Header;

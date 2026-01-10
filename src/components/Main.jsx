import React from "react";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Causes from "./Causes.jsx";
import Ogr from "./Ogr.jsx";
import Beni from "./Beni.jsx";
import Saf from "./Saf.jsx";
import Closer from "./Closer.jsx";

function Main() {
  return (
    <div className="bg-[#e5e5e5]">
      <div>
        <Header />
      </div>
      <div className="home">
        {" "}
        <Home />
      </div>
      <div className="causes">
        {" "}
        <Causes />
      </div>
      <div>
        {" "}
        <Ogr />
      </div>
      <div>
        {" "}
        <Beni />
      </div>
      <div className="measures">
        {" "}
        <Saf />
      </div>
      <div>
        {" "}
        <Closer />
      </div>
    </div>
  );
}

export default Main;

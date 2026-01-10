import React from "react";
import { Link } from "react-scroll";

function Closer() {
  return (
    <div>
      <div className="px-2 pt-8">
        <h1>
          This website is an awareness initiative created for a school app
          development competition. Its aim is to educate students and parents
          about responsible mobile phone usage and to promote a healthy digital
          lifestyle for children.
        </h1>
      </div>
      <div className="px-2 font-bold pt-8">
        <h1>SCHOOL: BRINDHAVAN</h1>
        <h1>CLASS: XII</h1>
        <h1>NAME: RAJARAJAN</h1>
      </div>
      <div className="flex text-white justify-between px-10 flex-row bg-black">
        <Link
          className="hover:underline"
          smooth={true}
          duration={1000}
          href=""
          to="home"
        >
          HOME
        </Link>
        <Link
          className="hover:underline"
          smooth={true}
          duration={1000}
          href=""
          to="causes"
        >
          CAUSES
        </Link>
        <Link
          className="hover:underline"
          smooth={true}
          duration={1000}
          href=""
          to="measures"
        >
          MEASURES
        </Link>
      </div>
    </div>
  );
}

export default Closer;

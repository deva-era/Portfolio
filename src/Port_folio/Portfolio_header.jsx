import React, { useState, useEffect } from "react";

function Portfolio_header() {

  const [side_bar, setside_bar] = useState(false);
  var update = () => {
    setside_bar(!side_bar);
  };

  return (
    <header id="header">
      <div className="max-md:flex-col  shadow-inner shadow-white/30 poppins_font flex justify-between w-full px-14 py-3 bg-white/5 max-md:w-auto    text-slate-100">
        <div className="max-md:flex max-md:justify-between max-md:w-11/12 max-md:mx-auto ">
          <div>
            <span className="font-bold text-xl">Portfolio</span>
          </div>
          <button className="md:hidden hover:text-cyan-500" onClick={update}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className={`md:block max-md:pt-4 ${side_bar ? "block " : "hidden"}`}>
          <ul className="flex gap-5 font-poppins max-md:flex-col max-md:items-center">
            <li className="header_menu text-teal-200 border-b-2 border-teal-200 ">
              <a href="#header">Home</a>
            </li>
            <li className="header_menu">
              <a href="#about">About</a>
            </li>
            <li className="header_menu ">
              <a href="#skills">Technology</a>
            </li>
            <li className="header_menu">
              <a href="#project">Project</a>
            </li>
            <li className="header_menu">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Portfolio_header;

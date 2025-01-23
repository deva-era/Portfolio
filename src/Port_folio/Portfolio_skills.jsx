import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

import { FaJava } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { IoMdSave } from "react-icons/io";

function Portfolio_skills() {
  return (
    <section id="skills" className="flex md:justify-around my-14 max-md:flex-col max-md:items-center max-md:space-y-10">
      <div className="flex flex-col gap-y-3 ">
        <div className="relative md:left-24 mb-6">
          <span
            className="text-5xl font-semibold red_shadow text-transparent bg-clip-text bg-gradient-to-r from-red-700  to-yellow-500  "
            // style={{ color: "red" }}
          >
            Technologies
            <span className="skills_shadow" style={{ color: "cyan" }}></span>
          </span>
        </div>
        <div className="flex md:justify-between md:gap-x-32 max-md:flex-col max-md:items-center max-md:space-y-10">
          {/* front */}
          <div>
            <span
              className="font-poppins font-thin text-4xl"
              style={{ color: "red" }}
            >
              Front End:
            </span>
            <div className="flex flex-col space-y-6 font-extralight text-lg ml-3 mt-2">
              {/* skills */}
              <span className="flex items-center">
                <span className="mr-2 tags_red">
                  <TiHtml5 />
                </span>
                HTML
              </span>
              <span className="flex items-center">
                <span className="mr-2 tags_red">
                  <RiTailwindCssFill />
                </span>
                CSS & Tailwind css
              </span>
              <span className="flex items-center">
                <span className="mr-2 tags_red">
                  <RiJavascriptFill />
                </span>
                Java Script{" "}
              </span>
              <span className="flex items-center">
                <span className="mr-2 tags_red">
                  <FaReact />
                </span>
                React Js
              </span>
            </div>
          </div>

          {/* back    */}
          <div className="max-md:flex max-md:flex-col max-md:items-center">
            <span
              className="font-poppins font-thin text-4xl"
              style={{ color: "cyan" }}
            >
              Back End:
            </span>
            <div className="flex flex-col space-y-6 max-md:ml-20 ml-3 mt-2 md:flex-wrap font-extralight text-lg">
              {/* skills */}
              <span className="flex items-center">
                <span className="mr-2 tags_blue">
                  <FaJava />
                </span>
                Java
              </span>
              <span className="flex items-center">
                <span className="mr-2 tags_blue">
                  <FaDatabase />
                </span>
                SQL
              </span>
              <span className="flex items-center">
                <span className="mr-2 tags_blue">
                  <IoMdSave />
                </span>
                Data structure Algorithms
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <img
        src="./port_folio_images/5.jpg"
        className="w-3/6 h-4/6 object-cover md:my-auto funny"
        alt=""
      />
    </section>
  );
}

export default Portfolio_skills;

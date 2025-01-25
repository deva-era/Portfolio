import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Portfolio_intro() {
  return (
    <section
      id="intro"
      className=" flex md:justify-around items-center
      max-md:flex-col  max-md:space-y-9  p-5 mb-20 "
    >
      {/* details */}
      <div className="flex flex-col gap-y-1 text-4xl w-2/5 text-white mt-40 max-md:order-2 max-md:mt-20 flex-wrap">
        <div className="flex flex-col">
          <span className="font-bold">
            Hi,it's
            <span
              style={{ color: "#0ff" }}
              className="text-5xl blue_footer_shadow "
            >
              {" "}
              Devanathan
            </span>
          </span>
          <span className=" font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-yellow-500 to-65%">
            I'm a Web Developer
          </span>
          <span className="font-thin text-lg">
            Passionate front-end developer skilled in creating responsive and
            user-friendly web interfaces using HTML, CSS, Tailwind CSS, and
            React.js. Dedicated to crafting intuitive designs and seamless user
            experiences with a focus on clean code and modern UI/UX
            principles.Enthusiastic back-end developer with expertise in Java,
            SQL, and database management.
          </span>
        </div>

        {/* icons */}
        <div className="flex gap-x-4 mt-2 text-lg ">
          <span className="intro_icons transform hover:scale-110 duration-110">
            <a
              className="header_menu"
              href="https://github.com/deva-era"
              target="_blank"
            >
              {" "}
              <FaGithub />{" "}
            </a>
          </span>
          <span className="intro_icons transform hover:scale-110 duration-110">
            <a
              href="http://www.linkedin.com/in/devanathan-v-4a811931b"
              target="_blank"
            >
              {" "}
              <FaLinkedin />
            </a>
          </span>
          <span className="intro_icons transform hover:scale-110 duration-110">
            <a href="#" target="_blank">
              {" "}
              <FaTwitter />
            </a>
          </span>
        </div>

        <div>
          <button className=" button_setup">
            <a
              href="https://docs.google.com/document/d/1le8G_W3MVJV8MpD0xbK1RndpjGC-ZEWg29vZ-IVeEas/export?format=pdf"
              download="Resume.pdf"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>

      {/* profile */}
      <div className="intro_profile max-md:order-1  ">
        <img
          src="./port_folio_images/deva.jpg"
          className=" object-cover "
          alt=""
        />
      </div>
    </section>
  );
}

export default Portfolio_intro;

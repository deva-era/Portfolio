import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Portfolio_footer() {
  return (
    <footer class="bg-dark w-full pt-8 pb-6 bg-white/10">
      <div class="max-w-screen-xl px-4 mx-auto">
        <div className="flex gap-x-4 mt-2 text-lg justify-center">
          <span className="intro_icons transform hover:scale-110 duration-110 ">
            <a
              className="header_menu"
              href="https://github.com/deva-era"
              target="_blank"
            >
              <FaGithub />
            </a>
          </span>
          <span className="intro_icons transform hover:scale-110 duration-110">
            <a
              href="http://www.linkedin.com/in/devanathan-v-4a811931b"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </span>
          <span
            className="intro_icons transform hover:scale-110 duration-110"
            target="_blank"
          >
            <a href="#">
              <FaTwitter />
            </a>
          </span>
        </div>
        <ul class="flex  flex-wrap justify-center max-w-screen-md mx-auto text-lg font-light gap-9">
          <li class="my-2 ">
            <a class="header_menu text-gray-400 " href="#header">
              Home
            </a>
          </li>
          <li class="my-2">
            <a class="header_menu text-gray-400 " href="#about">
              About
            </a>
          </li>
          <li class="my-2">
            <a class="header_menu text-gray-400 " href="#project">
              Project
            </a>
          </li>
          <li class="my-2">
            <a
              class="header_menu text-gray-400 "
              href="http://www.linkedin.com/in/devanathan-v-4a811931b"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <div className="flex justify-center text-sm space-x-1 mt-3">
          <div class="text-center text-white red_footer_shadow">©Dev 2025</div>
          <div class="text-center text-white blue_footer_shadow">
            | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Portfolio_footer;

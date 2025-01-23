import React, { useState } from "react";
import About_card from "./About_card";

function Portfolio_about() {
  const [data, setdata] = useState([
    { id: 1, no: 5, name: "Projects" },
    { id: 2, no: 6, name: "Months" },
  ]);

  return (
    <section id="about" className="max-md:py-10 flex md:justify-between bg-white/10 max-md:flex-col max-md:space-y-10 max-md:items-center">
      <img
        className=" w-3/6 h-4/6 object-cover my-auto ml-10 pic_shadow"
        src="./port_folio_images/4.jpeg "
        alt=""
      />

      <div className="flex flex-col w-2/5 flex-wrap md:p-10 mr-10 gap-y-2 ">
        <span className="text-5xl font-semibold">
          About
          <span className="" style={{ color: "cyan" }}>
            Me
          </span>
        </span>
        <span className="text-2xl font-semibold">Full Stack Developer</span>
        <p>
          Passionate software engineering graduate skilled in Java, SQL, and web
          development with experience in building dynamic projects like a Bus
          Reservation System and a responsive Fruit Shop website. Proficient in
          React.js, Tailwind CSS, and problem-solving, with a keen interest in
          coding challenges on platforms like HackerRank and Leetcode. Always
          eager to innovate and solve complex problems with clean, efficient
          code.
        </p>
        {/* <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-700'>hi</h1> */}

        {/*card section  */}
        <div className="grid grid-cols-3 max-md:grid-cols-1">
          {data.map((data) => {
            return <About_card key={data.id} card={data} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio_about;

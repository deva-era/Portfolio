import React, { useState } from "react";
import Project_card from "./Project_card";

function Portfolio_project() {
  const [project, setproject] = useState([
    {
      id: 1,
      title: "Fruit Shop",
      img: "fruit_shop.png",
      link: "https://deva-era.github.io/Fruit_shop/",
    },
    {
      id: 2,
      title: "To-do List",
      img: "todo_list.png",
      link: "https://deva-era.github.io/To-do-lists/",
    },
    {
      id: 3,
      title: "Bus simulation System",
      img: "9.png",
      link: "https://github.com/deva-era/java-backend-project.git",
    },
  ]);

  return (
    <section id="project">
      <div className="bg-white/10 flex flex-col gap-y-14 max-md:items-center">
        <span className="font-cinzel text-5xl font-semibold md:w-full md:text-center mt-10 ">
          LATEST{" "}
          <span className="blue_footer_shadow max-md:block max-md:relative max-md:right-7" style={{ color: "cyan" }}>
            PROJECTS
          </span>
        </span>
        <section className="grid grid-cols-3 max-md:grid-cols-1 w-11/12 mx-auto gap-10 mb-16 max-md:p-8">
          {project.map((data) => {
            return <Project_card key={data.id} datas={data} />;
          })}
        </section>
      </div>
    </section>
  );
}

export default Portfolio_project;

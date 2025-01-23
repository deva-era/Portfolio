import React from "react";

function Project_card({ datas }) {
  return (
    <div className="bg-green-600 project_box_shadow hover:scale-105 duration-150 border-2 border-cyan-400 rounded-md  ">
      <a href={`${datas.link}`} target="_blank">
        <img
          src={`./port_folio_images/${datas.img}`}
          className="object-cover md:w-96 h-96 max-md:w-full max-md:h-full"
          alt={`${datas.title}`}
        />
      </a>
    </div>
  );
}

export default Project_card;

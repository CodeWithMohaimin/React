import React from "react";
import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-gray-300 duration-500 ease-in transition">
      <p
        onClick={() => {
          setToggle(!toggle);
        }}
        className="bg-red-400 p-2 cursor-pointer"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi,
        iusto exercitationem blanditiis error ullam asperiores cupiditate
        aperiam illum at neque magnam nesciunt, temporibus magni architecto
        consequuntur eligendi et recusandae!
      </p>
      {toggle && (
        <p className="duration-500 ease-in transition">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          tempore cum accusamus aliquam dolor nesciunt aspernatur officia omnis,
          nihil quo incidunt fugit illum perferendis rerum voluptate molestias
          magnam natus voluptates. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Dolores tempore cum accusamus aliquam dolor nesciunt
          aspernatur officia omnis, nihil quo incidunt fugit illum perferendis
          rerum voluptate molestias magnam natus voluptates. magnam natus
          voluptates. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dolores tempore cum accusamus aliquam dolor nesciunt aspernatur
          officia omnis, nihil quo incidunt fugit illum perferendis rerum
          voluptate molestias magnam natus voluptates.
        </p>
      )}
    </div>
  );
};

export default Toggle;

import React from "react";
import { FaUsers } from "react-icons/fa6";
import { GrNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";
const DashCards = ({ heading, numbers, nexPage,nav, icons }) => {
  return (
    <>
      <div className="border-2 px-4 py-2 rounded-md flex md:gap-10 gap-7 flex-col md:w-[400px] w-[250px] md:flex-wrap ">
        <div className="flex items-center justify-between ">
          <div>
            <h1 className="font-bold text-xl"> {heading}</h1>
            <p className=" text-green-500"> {numbers}</p>
          </div>
          <div>{icons}</div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1> {nexPage}</h1>
          </div>
          <div>
            <NavLink to={nav}>
              <GrNext className="text-3xl" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCards;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../routes";
const SideNav = () => {
  const navigate = useNavigate();
  const { context, setContext } = useContext(ThemeContext);

  return (
    <div className={`w-[70%] flex-col border-r-[0.2px] border-slate-400 bg-gray-100 fixed transition duration-300 ease-out z-[100] h-[100vh] ${context ? "translate-x-[0%]" : "translate-x-[-100%]"}`}>
      <div className=" py-7  hover:ease-in">
        <p className=" px-4 font-bold text-xl border-b-[0.2px] border-slate-400">Mini-Project</p>
        <div className=" flex flex-col pt-4">
          <span
            className=" p-3 transition duration-300 bg  hover:bg-blue-500 hover:text-white font-semibold cursor-pointer"
            onClick={() => {
              navigate("/");
              setContext(false);
            }}
          >
            Home
          </span>
          <span
            className=" p-3 transition duration-300 bg  hover:bg-blue-500 hover:text-white font-semibold cursor-pointer"
            onClick={() => {
              navigate("/about");
              setContext(false);
            }}
          >
            About
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

import React, { useContext } from "react";
import { ThemeContext } from "../routes";
const Header = () => {
  const { context, setContext } = useContext(ThemeContext);
  return (
    <div className="fixed z-[99] flex w-full border-b-[0.2px] border-slate-400 bg-gray-100 drop-shadow-xl px-5 py-2 justify-between items-center">
      <p className=" font-bold text-xl">Mini-Project</p>

      <button onClick={() => (context ? setContext(false) : setContext(true))}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  );
};

export default Header;

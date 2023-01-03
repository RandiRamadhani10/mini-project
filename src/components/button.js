import React from "react";

const Button = ({ text = "Select", onClick, bgColor = "bg-blue-500", bgColorHover = "hover:bg-blue-400" }) => {
  return (
    <button className={`px-5 py-2  rounded-lg w-full ${bgColor} ${bgColorHover}`} onClick={() => onClick()}>
      <p className="font-semibold text-white">{text}</p>
    </button>
  );
};

export default Button;

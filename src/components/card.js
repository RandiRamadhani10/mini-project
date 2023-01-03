import React, { useState } from "react";
import Button from "./button";
import Loader from "./loader";
import { useNavigate } from "react-router-dom";
const Card = ({ id, name, description, image, price }) => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  return (
    <div className="sm:w-[24rem]  rounded-lg overflow-hidden m-4 border-gray-300 border-[0.2px] drop-shadow-xl bg-white">
      <div className="sm:w-[24rem] bg-gray-100  h-[16rem] ">
        {!state && <Loader fill="#a3a3a3" />}
        <img className="w-full h-[16rem] " src={image} onLoad={() => setState(true)}></img>
      </div>
      <div className="px-2 py-5">
        <p className="text-xl font-bold mb-4">{name}</p>
        <p className="text-sm font-bold mb-2">$ {price}</p>
        <p className="text-sm">{description}</p>
        <div className="flex justify-center mt-5">
          <Button text="View" onClick={() => navigate(`/product/${id}`)} />
        </div>
      </div>
    </div>
  );
};

export default Card;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api";
import { Loader, SideNav } from "../components";
const Product = () => {
  const { id } = useParams();
  const [state, setState] = useState(false);
  const { data } = useQuery({
    queryKey: [`product`],
    queryFn: () => getProduct(id),
  });
  const render = () => {
    return (
      <>
        <SideNav />
        <div className="flex justify-center pt-[60px] ">
          <div className="flex md:w-1/2 px-2 flex-col items-center">
            <div className="md:w-[60%] w-full h-72 bg-gray-100">
              {!state && <Loader fill="#a3a3a3" />}
              <img className="w-full h-72" src={data.images[0].imageUrl} onLoad={() => setState(true)}></img>
            </div>
            <div className="px-2 py-5">
              <p className="text-xl font-bold mb-4">{data.name}</p>
              <p className="text-sm font-bold mb-2">$ {data.price}</p>
              <p className="text-sm">{data.description}</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  return <div>{data === undefined ? <Loader full="h-[100vh]" /> : render()}</div>;
};

export default Product;

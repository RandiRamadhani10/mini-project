import React from "react";
import { Card } from "../components";
import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../api";
import { Loader, SideNav } from "../components";
const Home = () => {
  const { isLoading, data } = useQuery({
    queryKey: [`products`],
    queryFn: getAllProduct,
  });
  return (
    <>
      <SideNav />
      <div className="p-4 flex flex-wrap justify-center pt-[60px]">
        {isLoading ? <Loader full="h-[100vh]" /> : <></>}
        {data?.map((dat) => {
          return <Card description={dat.description} name={dat.name} price={dat.price} id={dat.id} image={dat.images[0].imageUrl} />;
        })}
      </div>
    </>
  );
};

export default Home;

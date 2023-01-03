import React from "react";
import { SideNav } from "../components";
const About = () => {
  return (
    <>
      <SideNav />
      <div className="flex pt-[60px] justify-center flex-col items-center">
        <div className="sm:w-1/2 flex px-4 mt-4  flex-col">
          <p className="text-xl font-bold">About us</p>
          <p className="text-sm font-semibold mt-4">Perkenalkan nama saya Dwi Randi Ramadhani umur 22 tahun dan berdomisili di Jombang Jawa Timur</p>
        </div>
      </div>
    </>
  );
};

export default About;

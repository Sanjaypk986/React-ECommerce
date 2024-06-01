import React from "react";
import "./Banner.css";
import Button from "../../../common/Button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bgImage container my-7 w-full h-auto flex flex-col justify-center items-center text-center relative">
      <div className="overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-4">
        <h3 className="font-bold mb-4 text-2xl md:text-3xl lg:text-5xl text-white">
          20% Off Select Styles
        </h3>
        <p className="font-bold mb-8 md:mb-12 text-base md:text-lg lg:text-xl text-white">
          Save big on summer-ready shoes during our Memorial Day Sale.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to={"/products"}>
            <Button className=" bg-white-500 text-black  px-4 py-2 rounded">
              Shop Men
            </Button>
          </Link>
          <Link to={"/products"}>
            <Button className="bg-white-500 text-black  px-4 py-2 rounded">
              Shop Women
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;

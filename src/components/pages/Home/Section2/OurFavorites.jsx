import React from "react";
import "./OurFavorites.css";
import Button from "../../../common/Button";
import { Link } from "react-router-dom";

const OurFavorites = () => {
  return (
    <section className="container my-5">
      <h3 className="font-semibold text-xl md:text-2xl text-center pb-3">
        Our Favorites
      </h3>
      <div className="grid place-items-center gap-1 grid-cols-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 sm:mx-4 my-3 p-3">
        <div className="card col-span-1 mx-4 sm:mx-0 border rounded-md p-2 bg-white my-2 text-center">
          <div className="image-container">
            <img
              className="resized-image"
              src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_400,b_rgb:f5f5f5/cms/6I45u9C8G1X3MZrPu1TPZ3/dcb063558ac1a16b51fadffc762e20bd/24Q2-Core-Site-Category_Category_Card_TF2_1110x1110.jpg"
              alt="shoe image"
            />
            <Link to={"/products"}>
              <Button className="shop-now bg-white-500 text-black  p-2 rounded">
                Shop Now
              </Button>
            </Link>
          </div>
          <h4 className="px-4 text-xl md:text-2xl font-semibold my-2 ">
            Tree Flyer 2
          </h4>
          <p className="px-4 text-sm my-2 ">Springy Active Shoe</p>
        </div>
        <div className="card col-span-1 mx-4 sm:mx-0 border p-2 bg-white my-2 ">
          <div className="image-container">
            <img
              className="resized-image"
              src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_667,b_rgb:f5f5f5/cms/iR2LEYOAk773JeuQk1dk4/4e784c618a3c5bc6a24db26d112f967b/24Q2-Core-Site-Category_Category_Card_TR_1110x1110.jpg"
              alt="shoe image"
            />
            <Link to={"/products"}>
              <Button className="shop-now bg-white-500 text-black  p-2 rounded">
                Shop Now
              </Button>
            </Link>
          </div>
          <h4 className="px-4 text-xl md:text-2xl font-semibold my-2">
            Tree Runner
          </h4>
          <p className="px-4 text-sm my-2">Comfortable shoes</p>
        </div>
        <div className="card col-span-1 mx-4 sm:mx-0 border p-2 bg-white my-2">
          <div className="image-container">
            <img
              className="resized-image"
              src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_667,b_rgb:f5f5f5/cms/49OwJyYkvaPuT2UBaVPtKU/d4b7d2a5a5bf018faee3b50f019e07ce/24Q2-TreeRunnerGO-Site-Category_Category_Card-1110x1110-02.jpg"
              alt="shoe image"
            />
            <Link to={"/products"}>
              <Button className="shop-now bg-white-500 text-black  p-2 rounded">
                Shop Now
              </Button>
            </Link>
          </div>
          <h4 className="px-4 text-xl md:text-2xl font-semibold my-2">
            Tree Runner 1
          </h4>
          <p className="px-4 text-sm my-2 ">breathable trainers</p>
        </div>
        <div className="card col-span-1 mx-4 sm:mx-0 border p-2 bg-white my-2">
          <div className="image-container">
            <img
              className="resized-image"
              src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_400,b_rgb:f5f5f5/cms/1geZVpnyXElBM1DJgjqZzj/cb2a42ebc69e65ff99d0af0a0715d2a7/PDP-Grid-Imagery_Men-Relay.jpg"
              alt="shoe image"
            />
            <Link to={"/products"}>
              <Button className="shop-now bg-white-500 text-black  p-2 rounded">
                Shop Now
              </Button>
            </Link>
          </div>
          <h4 className="px-4 text-xl md:text-2xl font-semibold my-2">
            Tree Dasher Go
          </h4>
          <p className="px-4 text-sm my-2 ">lightweight runners</p>
        </div>
      </div>
    </section>
  );
};

export default OurFavorites;

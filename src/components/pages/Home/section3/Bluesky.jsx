import React from "react";
import "./Bluesky.css";
import Button from "../../../common/Button";
const Bluesky = () => {
  return (
    <section className="container my-7 w-full h-auto flex flex-col justify-center items-center text-center relative">
      <h3 className="font-semibold text-xl md:text-2xl text-center pb-3">
        Elevate Your Style: Twilight Treasures
      </h3>
      <p className=" text-center text-sm my-1">
        Discover the magic of twilight with our curated treasures.
      </p>
      <div className="image-container relative">
        <img
          className=""
          src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="shoe banner"
        />
        <div class="overlay"></div>
        <Button className="shop-now bg-white-500 text-black  p-2 rounded">
          Shop Now
        </Button>
        <h4 className="shoe-bannerText w-full absolute  sm:inline lg:bottom-20 font-bold mb-4 text-2xl md:text-3xl lg:text-5xl text-white">
          Unveil Your Elegance Today!
        </h4>
      </div>
    </section>
  );
};

export default Bluesky;

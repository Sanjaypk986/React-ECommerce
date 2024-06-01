import React, { useEffect, useState } from "react";
import Button from "../../../common/Button";
import "./Allproducts.css";
import { getAllProducts } from "../../../ApiService/Api";
import { Link } from "react-router-dom";

const Allproducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <section className="container my-5 mx-auto">
      <h3 className="font-semibold text-xl md:text-2xl text-center pb-3">
        All Products
      </h3>
      <div className="grid product-grid place-items-center gap-1 grid-cols-2 sm:grid-cols-4 sm:gap-4 md:grid-cols-4 sm:mx-4 my-3 p-3">
        {products.map((product) => (
          <div
            className="card product my-1 col-span-1 mx-4 sm:mx-0 border rounded-md p-2 bg-white text-center h-52 w-36 lg:h-80 lg:w-60"
            key={product.id}
          >
            <div className="image-container">
              <img
                className="resized-image product-img"
                src={product.image}
                alt="shoe image"
              />
              <Link to={`/products/${product.id}`}>
                <Button  className="shop-now bg-white-500 text-black  p-2 rounded">
                  Shop Now
                </Button>
              </Link>
            </div>
            <h4
              className="px-4 text-xl md:text-2xl font-semibold my-2"
              style={{
                height: "40px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {product.title}
            </h4>
            <p>
              <span className="price p-1">${product.price}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Allproducts;

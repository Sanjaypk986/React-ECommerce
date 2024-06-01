import React, { useEffect, useState } from "react";
import Button from "../../../common/Button";
import { Link, useParams } from "react-router-dom";
import { getProductByID } from "../../../ApiService/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = ({ addToCart }) => {
  // use state for store product details

  const [productCard, setProductCard] = useState({});
  const { productId } = useParams();

  // api call and pass product id from params

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await getProductByID(productId);
        setProductCard(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    // call function
    fetchProductDetails();
  }, [productId]);

  // Function for add to cart

  const HandleCart = () => {
    alert("Item Added to Cart");
  };

  return (
    <div className="container productContainer min-h-screen my-2 grid place-items-center gap-1 grid-cols-1 sm:grid-cols-2 sm:gap-4 sm:mx-4 my-3 p-3">
      {productCard ? (
        <>
          <div>
            <Link to="/products">
              <button className="px-4 py-2 my-2 bg-gray-200">
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </Link>
            <img
              className="h-46 w-full md:h-96"
              src={productCard.image}
              alt="product"
            />
          </div>
          <div className="productDetails flex flex-col justify-center items-center gap-3 md:gap-5 my-3">
            <h3 className="px-4 text-xl md:text-2xl lg:text-4xl font-semibold ">
              {productCard.title}
            </h3>
            <p>{productCard.description}</p>
            <span className="px-4 text-xl md:text-2xl lg:text-4xl font-bold  text-red-700">
              ${productCard.price}
            </span>
            <Button className="w-80 bg-blue-600 text-white ">Buy Now</Button>
            <Button
              onClick={HandleCart}
              className="w-80 bg-neutral-500 text-white "
            >
              Add To Cart
            </Button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;

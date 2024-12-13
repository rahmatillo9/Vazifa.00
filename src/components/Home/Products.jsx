import React, { useContext, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { MyContext } from "../../Context";
import ProductCard from "../Product-Card";

const Products = () => {
  const { data, error, loading } = useFetch("https://fakestoreapi.com/products");
  const { state, dispatch } = useContext(MyContext);

  useEffect(() => {
    if (!error) {
      dispatch({ type: "SET_PRODUCTS", payload: data });
    }
  }, [data]);

  return (
    <div className="container px-6 lg:px-20 mt-20">

      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-10 text-gray-800">
        Our Products
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <i className="fa fa-circle-notch fa-spin text-5xl text-gray-400"></i>
        </div>
      ) : error ? (
        <div className="text-center text-red-500">
          <p>Error fetching products. Please try again later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {state.products &&
            state.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Products;

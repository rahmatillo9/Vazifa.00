import { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context";
import CartsCard from "./Carts-Card";
import { useLocation } from "react-router-dom";

const Carts = () => {
  const { state } = useContext(MyContext);
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setProducts(state.carts);
  }, [state.carts]);

  return (
    <div className="container px-6 md:px-10 mt-10">

      <p className="text-sm text-gray-500">{location.pathname}</p>


      <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-8 text-gray-800">
        Корзина
      </h2>

      {/* Cart Container */}
      <div className="bg-first p-8 md:p-10 rounded-3xl shadow-md">

        <div className="flex items-center mb-5 border-b pb-3 text-slate-400 text-sm md:text-base">
          <span className="w-[13%]">Фото</span>
          <span className="w-[20.5%]">Товары</span>
          <span className="w-[34%]">Описание</span>
          <span className="w-[14%]">Артикул</span>
          <span className="w-[14%]">Количество</span>
          <span className="w-[4%]"></span>
        </div>


        <div className="flex flex-col gap-5">
          {products && products.length > 0 ? (
            products.map((product) => (
              <CartsCard key={product.id} product={product} />
            ))
          ) : (

            <div className="w-full text-center mt-10">
              <h2 className="text-gray-500 text-xl md:text-2xl opacity-70">
                Ваша корзина пуста{" :("}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carts;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import WishItems from "../components/WishItems";


const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wish);

  return (
    <div>
      {wishlist.length > 0 ? (
        <div
          className="max-w-[1200px] mx-auto flex flex-col
          md:flex-row justify-center"
        >
          <div
            className="
            w-[100%] p-2 md:w-[60%] flex flex-col"
          >
            {wishlist.map((item, index) => {
              return <WishItems key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
        </div>
      ) : (
        <div
          className="min-h-[80vh] flex flex-col items-center 
          justify-center"
        >
          <h1
            className="text-gray-700 font-semibold
            text-xl mb-2"
          >
            WishList is Empty
          </h1>
          <NavLink to="/">
            <button
              className="uppercase bg-green-600
              border-2 border-green-600 rounded-lg text-white p-3
              mt-5 hover:text-green-700 hover:bg-purple-50 transition duration-300 ease-linear text-xl
              font-semibold"
            >
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Wishlist;

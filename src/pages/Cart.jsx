import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
 
  const total=cart.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <div>
      {cart.length > 0 ? (
        <div
          className="max-w-[1200px] mx-auto flex flex-col
          md:flex-row justify-center"
        >
          <div
            className="
            w-[100%] p-2 md:w-[60%] flex flex-col"
          >
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div className="w-[100%] md:w-[40%] mt-5 flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14  justify-between">
              <div className="flex flex-col gap-5">
                <div className="text-xl text-green-800 font-semibold uppercase">
                  Your Cart
                </div>
                <div className="font-semibold text-5xl text-green-700 mt-5 uppercase">
                  Summary
                </div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold text-xl ">
                    Total Items: {cart.length}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col ml-5">
              <p className="text-xl font-bold">
                <span className="text-gray-700 font-semibold">
                  Total Amount:
                </span>{" "}
                ${total}
              </p>
              <NavLink to={"/checkout"}>
                <button
                  className="bg-green-700 hover:bg-purple-50 rounded-lg
                      text-white transition duration-300 ease-linear
                      mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl"
                >
                  CheckOut Now
                </button>
              </NavLink>
            </div>
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
            Cart is Empty
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

export default Cart;

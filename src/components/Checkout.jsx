import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slice/CartSlice";
import { NavLink } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear the cart when the checkout page is visited
    dispatch(clearCart());
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Checkout</h2>
        <div className="text-center text-xl font-semibold text-gray-500">
          <p>Your cart is empty. Please add items to your cart before proceeding.</p>
          <NavLink to="/" className="text-blue-500 hover:text-blue-700 mt-3 block">
            Go back to shopping
          </NavLink>
        </div>
    </div>
  );
};

export default Checkout;

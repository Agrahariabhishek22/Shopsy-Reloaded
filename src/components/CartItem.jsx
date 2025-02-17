import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  remove,
  incrementQuantity,
  decreaseQuantity,
} from "../redux/slice/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item is removed from Cart");
  };

  const incrementQuantityHandler = () => {
    dispatch(incrementQuantity(item.id));
  };
  const decrementQuantityHandler = () => {
    dispatch(decreaseQuantity(item.id));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 md:p-6 mb-4">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
    {/* Product Image */}
    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover rounded-md"
      />
    </div>

    {/* Product Details */}
    <div className="flex-1 space-y-3">
      <h1 className="text-lg md:text-xl font-semibold text-slate-800">
        {item.title}
      </h1>
      <p className="text-sm md:text-base text-gray-600">
        {item.description.split(" ").slice(0, 20).join(" ") + "..."}
      </p>

      {/* Price and Quantity Controls */}
      <div className="flex justify-between items-center">
        <p className="text-green-600 font-bold text-lg md:text-xl">
          $ {item.price * item.quantity}
        </p>

        {/* Quantity Buttons */}
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <button
            onClick={decrementQuantityHandler}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 transition"
          >
            -
          </button>
          <span className="px-4 text-lg font-medium">{item.quantity}</span>
          <button
            onClick={incrementQuantityHandler}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 transition"
          >
            +
          </button>
        </div>

        {/* Remove Button */}
        <button
          onClick={removeFromCart}
          className="p-2 md:p-3 bg-red-200 text-red-800 rounded-full hover:bg-red-400 transition duration-300"
        >
          <MdDelete className="text-lg md:text-xl" />
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default CartItem;

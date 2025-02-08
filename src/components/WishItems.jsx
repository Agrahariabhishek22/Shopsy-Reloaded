import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/slice/WishlistSlice";
import { MdDelete } from "react-icons/md";
import {add} from"../redux/slice/CartSlice"

const WishItems = ({ item }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wish);

  function addToCart() {
    dispatch(add(item));
    dispatch(removeFromWishlist(item.id));
    toast.success("Item added to cart successfully");
  }
  function removeWishlistItem() {
    dispatch(removeFromWishlist(item.id));
  }

  return (
    <div>
      <div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
        <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
          <div className="w-[30%]">
            <img src={item.image} className="object-cover" />
          </div>
          <div
            className="w-[100%] space-y-10 self-start
             md:ml-10 md:w-[70%]"
          >
            <h1 className="text-xl text-slate-700 font-semibold">
              {item.title}
            </h1>
            <h1 className="text-slate-700 font-medium text-base">
              {item.description.split(" ").slice(0, 20).join(" ") + "..."}
            </h1>

            <div className="flex justify-between items-center">
              <p className="font-bold text-green-600 text-lg">${item.price}</p>
              <button
                onClick={removeWishlistItem}
                className="text-red-800 bg-red-200 rounded-full p-3 mr-3
                hover:bg-red-400 cursor-pointer transition-transform duration-300"
              >
                <MdDelete />
              </button>

              <button
                onClick={addToCart}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="outline text-gray-700 font-normal"></div>
    </div>
  );
};

export default WishItems;

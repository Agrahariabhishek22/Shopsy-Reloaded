import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slice/CartSlice";
import { addToWishlist, removeFromWishlist } from "../redux/slice/WishlistSlice";
import { toast } from "react-hot-toast";

const Product = ({ post }) => {
  const dispatch = useDispatch();

  console.log("before selector wishlist")
   const isWishlisted = useSelector((state) => state.wishlist.wish.some((item) => item.id === post.id)); 
  const isInCart = useSelector((state) => state.cart.some((p) => p.id === post.id));

  console.log("Rendering Product:", post.id,isInCart);

   const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added to Cart");
  };

   const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart");
  };

   const toggleWishlist = () => {
    console.log("enter toggle wishlist")
    if (isWishlisted) {
      console.log("reoving from wishliat")
      dispatch(removeFromWishlist(post.id));
      toast.error("Removed from Wishlist");
    } else {
      console.log("adding to wishliat")

      dispatch(addToWishlist(post));
      toast.success("Added to Wishlist");
    }
    console.log("leaivng toogle wishlist")
  };

  return (
    <div className="flex flex-col items-center justify-center hover:scale-110 transition duration-300 ease-in p-4 mt-10 ml-5 rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img className="h-full w-full" src={post.image} alt={post.title} />
      </div>

      <div className="flex justify-between gap-12 mt-5 w-full items-center">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        <div className="flex gap-2">
          {/* Wishlist Button */}
          <button
            onClick={toggleWishlist}
            className={`border-2 rounded-full font-semibold text-[12px] p-1 px-3 uppercase transition duration-300 ease-in ${
              isWishlisted
                ? "bg-red-500 text-white border-red-500"
                : "text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {isWishlisted ? "❤️ Wishlisted" : "♡ Wishlist"}
          </button>

          {/* Add/Remove Button */}
          {isInCart ? (
            <button
              onClick={removeFromCart}
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            >
              Remove Item
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

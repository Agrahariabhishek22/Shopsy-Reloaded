import React, { useEffect, useState, useMemo } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
// console.log("initial");

  async function fetchProductData() {
    // console.log("Inside fetch");

    setLoading(true);
    
    try {
      // console.log("fetching api");
      const res = await fetch(API_URL);
      // console.log("storing data");
      
      const data = await res.json();
      // console.log("before set product");

      setProducts(data);
      // console.log("after set product");
      
    } catch (error) {
      // console.log("Error fetching data:", error);
      setProducts([]);
    }
    setLoading(false);
    // console.log("Out fetch");
  }

  // console.log("Before useeffect");

  useEffect(() => {
    // console.log("Inside useeffect");  
    fetchProductData();
  }, []);

  // console.log("After Useeffect");

  // Efficient search filtering using useMemo
  const filteredProducts = useMemo(() => {
    // console.log("Enter UseMemo");

    if (!searchQuery) return products; // Show all products if search is empty
    // console.log("Out UseMemo");
    return products.filter((product) =>
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  }, [searchQuery, products]);
  // console.log("Before Return");

  return (
    
    <div className="flex flex-col max-w-6xl mx-auto p-4">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full  max-w-md px-4 py-2 border border-black border-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Display Products */}
      {loading ? (
        <Spinner />
      ) : filteredProducts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product) => (
            <Product key={product.id} post={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[100vh]">
          <p className="text-xl font-bold text-gray-700">No Products Found</p>
        </div>
      )}
    </div>

  );
};

export default Home;
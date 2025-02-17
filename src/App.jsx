import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from"./pages/Wishlist";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <div>
        <div className="bg-slate-900">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;

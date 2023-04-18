import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /> <Products /></>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product/>} />
      </Routes>
      {/* <Home/>
    <Products/> */}
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/details" element={<Details />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

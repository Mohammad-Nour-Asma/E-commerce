import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Details from "./pages//Details/Details";
import Home from "./pages/Home";
import Login from "./pages/Login & Register/Login";
import Products from "./pages/Products/Products";
import Register from "./pages/Login & Register/Register";
import Profile from "./pages/Profile/Profile";
import AccountantDashboard from "./pages/Dashboards/AccountantDashboard";
import StroeKeeperDashboard from "./pages/Dashboards/StoreKeeper/StroeKeeperDashboard";
import AdminProducts from "./pages/Dashboards/dashboard component/AdminProducts";
import StorekeeperOrders from "./pages/Dashboards/StoreKeeper/StorekeeperOrders";
import EditProduct from "./pages/Dashboards/dashboard component/EditProduct";
import AddAmounts from "./pages/Dashboards/StoreKeeper/AddAmounts";
import AddProduct from "./pages/Dashboards/StoreKeeper/AddProduct";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/accountant" element={<AccountantDashboard />} />
        <Route exact path="/storekeeper" element={<StroeKeeperDashboard />}>
          <Route exact path="all-product" element={<AdminProducts />} />
          <Route exact path="orders" element={<StorekeeperOrders />} />
          <Route exact path="edit-product/:id" element={<EditProduct />} />
          <Route exact path="add-amount/:id" element={<AddAmounts />} />
          <Route exact path="add-product" element={<AddProduct />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Component, useContext, useState } from "react";

import "./styles/style.css";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Navbars from "./Components/Navbars";
import Profile from "./Pages/Profile";
import Order from "./Pages/Order";
import EditProfile from "./Pages/EditProfile";
import HomeAdmin from "./Pages/Admin/HomeAdmin";
import AddProduct from "./Pages/Admin/AddProduct";
import NavbarsAdmin from "./Components/NavbarsAdmin";
import ProfileAdmin from './Pages/Admin/ProfileAdmin'

import { LoginContext } from "./Contexts/LoginContext";
import { CartContext } from "./Contexts/CartContext";
import EditAdmin from "./Pages/Admin/EditAdmin";

const PrivateRoute = ({elemet: Component, ...rest}) => {
  const {isLogin, setIsLogin} = useContext(LoginContext);

  return isLogin ? <Outlet /> : <Navigate to='/' />
}

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [dataCart, setDataCart] = useState([]);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      <CartContext.Provider value={{ dataCart, setDataCart }}>
        <Router>
          <Navbars />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<PrivateRoute/>}>
            <Route path="/detail" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/order" element={<Order />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/home-admin" element={<HomeAdmin />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/profile-admin" element={<ProfileAdmin />} />
            <Route path='/edit-admin' element={<EditAdmin />} />
          </Route>
          </Routes>
        </Router>
      </CartContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;

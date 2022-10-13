import "./styles/style.css";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Navbars from "./Components/Navbars";
import Profile from "./Pages/Profile";
import Order from "./Pages/Order";
import EditProfile from "./Pages/EditProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import HomeAdmin from "./Pages/Admin/HomeAdmin";
import AddProduct from "./Pages/Admin/AddProduct";
import { useState } from "react";
import { LoginContext } from "./Contexts/LoginContext";
// import EditAdmin from './Pages/Admin/EditAdmin';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/order" element={<Order />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/home-admin" element={<HomeAdmin />} />
          <Route path="/add-product" element={<AddProduct />} />
          {/* <Route path='/edit-admin' element={<EditAdmin />} /> */}
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;

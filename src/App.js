import './styles/style.css'
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Navbars from './Components/Navbars';
import Profile from './Pages/Profile';
import Order from './Pages/Order'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbars/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/order' element={<Order />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

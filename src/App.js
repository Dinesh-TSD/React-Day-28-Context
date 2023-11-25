import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbars from "./Navbar/Navbars";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import { UserProvider } from "./context/userContext";



function App() {

  return (
    <>
      <BrowserRouter>
      <UserProvider>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
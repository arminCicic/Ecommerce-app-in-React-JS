import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import Cart from "./Components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import StripeContainer from "./Components/StripeContainer/StripeContainer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<StripeContainer />} />
      </Routes>
    </div>
  );
}

export default App;

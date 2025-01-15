import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import Login from "./login/Login";
import RazorpayPayment from "./Payment/Payment";
import Admin from "./Admin/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Product/:productId" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/payment" element={<RazorpayPayment />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;

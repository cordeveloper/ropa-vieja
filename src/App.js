import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./state/actions";
import Cart from "./pages/cart";

function App() {
  const dispatch = useDispatch();
  useEffect( () => {
    axios.get('https://fakestoreapi.com/products')
    .then(
      response => dispatch(fetchProducts(response.data)))
    .catch(error => console.log(error));
  }, [] );
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<Detail/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

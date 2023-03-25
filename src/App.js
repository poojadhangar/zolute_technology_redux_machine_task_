import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/dashboard/dashboard";
import Products from "./component/products/Products";
import EditProductDetails from "./component/products/EditProductsDetails";
import AddProductDetails from "./component/products/AddProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/addProducts" element={<AddProductDetails />} />
          <Route path="/editProductsDetail/:id" element={<EditProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

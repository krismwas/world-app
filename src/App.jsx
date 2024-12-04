import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";

function App() {
  const x = 20;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

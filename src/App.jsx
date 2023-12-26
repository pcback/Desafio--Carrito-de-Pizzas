import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carrito from "./views/Carrito";
import Detalle from "./views/Detalle";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/carrito" element={<Carrito></Carrito>}></Route>
        <Route path="/detalle/:id" element={<Detalle></Detalle>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

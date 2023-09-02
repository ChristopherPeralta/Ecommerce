import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products"
import { Carrito } from "../pages/Carrito"
import { Nosotros } from "../pages/Nosotros"
import { Contacto } from "../pages/Contacto"


export function MyRoutes() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:position" element={<Products />} />
        <Route exact path="/carrito" element={<Carrito/>} />
        <Route exact path="/nosotros" element={<Nosotros/>} />
        <Route exact path="/contacto" element={<Contacto/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

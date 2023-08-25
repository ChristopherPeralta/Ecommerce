import products from "../../data/data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Carrito } from "../../pages/Carrito";
import * as BsIcons from 'react-icons/bs';

import { useNavigate } from "react-router-dom";

import "./ProductList.css";

export function ProductList(){
    const [productData,setProductData] = useState(products);
   

    const [cart, setCart] = useState([]);



    const navigate = useNavigate();

    const handleAgregarClick = (id) => {
        const productoAgregado = productData.find((item) => item.id === id);
        console.log("Producto Agregado:", productoAgregado);
        setCart([...cart, productoAgregado]);
      };

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
      };
    
    return (
        <section className="product_list">
          <div className="container">
            <div className="product_list_wrapper">
              <div className="product_wrapper">
                {productData.map((item) => (
                  <div className="product_card" key={item.id}>
                    <div className="nombre">
                      <h1>{item.name}</h1>
                    </div>
                    <div className="imagen">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="precio">
                        
                      <h2>Oferta: S/.{item.price}</h2>
                    </div>
                    <div className="price">
                      <h2>S/.{item.precio}</h2>
                    </div>
                    <div className="boton-agregar">
                        <button onClick={() => handleAgregarClick(item.id)}>
                            <BsIcons.BsCart3 /> Agregar</button>
                    </div>
                  </div>
                ))}
              </div>
               
            </div>
            <Carrito cart={cart} removeFromCart={removeFromCart} />
          </div>
        </section>
      );
    }



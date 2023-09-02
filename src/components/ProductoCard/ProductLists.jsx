/*import products from "../../data/data";
import { useState } from "react";
import * as BsIcons from 'react-icons/bs';


import "./ProductList.css";

export function ProductList(){


    const [productData, setProductData] = useState(products);

    return (
        <section className="product_list">
          <div className="container">
            <div className="product_list_wrapper">
              <div className="product_wrapper">
                {productData.map((product) => (
                  <div className="product_card" key={product.id}>
                    <div className="nombre">
                      <h1>{product.title}</h1>
                    </div>
                    <div className="imagen">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="precio">
                      <h2>Oferta: S/.{product.price}</h2>
                    </div>
                    <div className="price">
                      <h2>S/.{product.precio}</h2>
                    </div>
                    <div className="boton-agregar">
                      <button onClick={() => addToCart(product, 1)}>
                        <BsIcons.BsCart3 /> Agregar al carrito
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    );
}

*/
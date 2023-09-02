import React from "react";


export function Carrito() {


  return (
    <div>
      <h1>Carrito de compras</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - Cantidad: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
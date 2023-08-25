import { useLocation } from "react-router-dom";

export function Carrito(props) {
  const location = useLocation();
  const cart = location.state?.cart || [];

  const removeFromCart = (id) => {
    // Implementa la lógica de eliminación aquí.
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>Precio: S/.{item.precio}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
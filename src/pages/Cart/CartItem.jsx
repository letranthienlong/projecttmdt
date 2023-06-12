import { useContext } from "react";
import { dataProduct } from "api/datadraw";
import { AppProvider } from "context/AppContext";

const CartItem = (props) => {
   const { id, title, price, thumbnail } = props.data;
   const { cartItems, addToCart, removeFromCart} = useContext(AppProvider);
  return (
    <div className="cart-item">
      <h1>Your Cart Item</h1>
      <img src={thumbnail} alt={title} />
      <div className="description">
            <p>
               <b>{title}</b>
            </p>
            <p>Price: {price}VND</p>
            <div className="count-handler">
               <button onClick={() => removeFromCart(id)}>-</button>
               {/* <input 
                  value={cartItems[id]} 
                  onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
               /> */}
               <button onClick={() => addToCart(id)}>+</button>
            </div>
      </div>
    </div>
  )
}

export default CartItem;

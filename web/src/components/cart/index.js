// import { useSelector, useDispatch } from "react-redux";
// import "./cart.css"; // You can use the same styling as before or customize it
// import { useState } from "react";
// import { removeFromCart } from "../../store/cartSlice"; // Assuming you have an action to update the cart

// export default function CartDropdown() {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
//   const [showCart, setShowCart] = useState(false);

//   const toggleCart = () => {
//     setShowCart(!showCart);
//   };

//   const removeItem = (index) => {
//     const cartSlice = [...cart];
//     cartSlice.splice(index, 1); // Remove item using splice
//     dispatch(removeFromCart(cartSlice)); // Dispatch action to update the cart in Redux
//   };

//   return (
//     <div className="cart-container">
//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaWuBqdezOEyiEtjSWbCNliFIMMjIwIpQVQ&s"
//         alt="cart"
//         className="cart-icon"
//         onClick={toggleCart}
//       />
//       <p className="cart-count">{cart.length}</p>
//       {showCart && (
//         <div className="cart-dropdown">
//           {cart.length > 0 ? (
//             cart.map((item, index) => (
//               <div key={index} className="cart-item">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="cart-item-image"
//                 />
//                 <div className="cart-item-info">
//                   <p className="cart-item-title">{item.title}</p>
//                   <p className="cart-item-price">${item.price}</p>
//                   <button
//                     className="remove-item-button"
//                     onClick={() => removeItem(index)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="cart-empty">Your cart is empty</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
// import { useSelector, useDispatch } from "react-redux";
// import "./cart.css"; // You can use the same styling as before or customize it
// import { useState } from "react";
// import { setCart } from "../../store/cartSlice"; // Import the correct action

// export default function CartDropdown() {
//   const cart = useSelector((state) => state.cart.cart); // Access the correct cart state
//   const dispatch = useDispatch();
//   const [showCart, setShowCart] = useState(false);

//   const toggleCart = () => {
//     setShowCart(!showCart);
//   };

//   const removeItem = (index) => {
//     const updatedCart = [...cart];
//     updatedCart.splice(index, 1); // Remove item using splice
//     dispatch(setCart(updatedCart)); // Dispatch the updated cart state to Redux
//   };

//   return (
//     <div className="cart-container">
//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaWuBqdezOEyiEtjSWbCNliFIMMjIwIpQVQ&s"
//         alt="cart"
//         className="cart-icon"
//         onClick={toggleCart}
//       />
//       <p className="cart-count">{cart?.length}</p>
//       {showCart && (
//         <div className="cart-dropdown">
//           {cart?.length > 0 ? (
//             cart.map((item, index) => (
//               <div key={index} className="cart-item">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="cart-item-image"
//                 />
//                 <div className="cart-item-info">
//                   <p className="cart-item-title">{item.title}</p>
//                   <p className="cart-item-price">${item.price}</p>
//                   <button
//                     className="remove-item-button"
//                     onClick={() => removeItem(index)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="cart-empty">Your cart is empty</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
import { useSelector, useDispatch } from "react-redux";
import "./cart.css"; // You can use the same styling as before or customize it
import { useState } from "react";
import { removeFromCart } from "../../store/cartSlice"; // Correctly import the action

export default function CartDropdown() {
  const cart = useSelector((state) => state.cartStore.cart); // Access the correct cart state
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const removeItem = (index) => {
    dispatch(removeFromCart(index)); // Dispatch the action to remove the item from Redux store
  };

  return (
    <div className="cart-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaWuBqdezOEyiEtjSWbCNliFIMMjIwIpQVQ&s"
        alt="cart"
        className="cart-icon"
        onClick={toggleCart}
      />
      <p className="cart-count">{cart?.length}</p>
      {showCart && (
        <div className="cart-dropdown">
          {cart?.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-price">${item.price}</p>
                  <button
                    className="remove-item-button"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="cart-empty">Your cart is empty</p>
          )}
        </div>
      )}
    </div>
  );
}

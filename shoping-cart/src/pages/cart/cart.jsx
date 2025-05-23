import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../data/products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="px-3 sm:px-6 md:px-20
    lg:px-32 py-4 flex flex-col gap-3">
      <div className="text-center font-bold text-3xl mt-4 mb-8">
        <h1>Your Cart Items</h1>
      </div>
      <div className="mx-auto flex flex-col gap-8  ">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="pt-5 text-center">
          <p className="font-bold my-5"> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")} className="px-3 py-2 text-white bg-black rounded-xl"> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
            className="px-3 py-2 text-white bg-black rounded-xl ml-5" 
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
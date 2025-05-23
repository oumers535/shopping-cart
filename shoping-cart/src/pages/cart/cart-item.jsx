import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="shadow-2xl border-4 bg-white rounded-xl flex px-3  py-6 ">
      <div className="overflow-hidden">
         <img src={productImage} className="h-36 sm:h-48 object-center "  />
      </div>
     
      <div className="py-6 flex flex-col gap-4 px-3 ">
        <p className="">
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="   ">
          <button onClick={() => removeFromCart(id)} className="px-2 bg-gray-200 "> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            className="w-10 text-center outline-none border text-sm "
          />
          <button onClick={() => addToCart(id)} className=" px-2 border-1 bg-gray-100 "> + </button>
        </div>
      </div>
    </div>
  );
};

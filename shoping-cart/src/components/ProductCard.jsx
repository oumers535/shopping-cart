import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";


const ProductCard = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="bg-white text-center rounded-xl ">
      <div className="overflow-hidden ">
        <img src={productImage} className="mx-auto h-60 " />
      </div>
      
      <div className="mt-4">
        <p>
          <b>{productName}</b>
        </p>
        <p className="text-gray-500 "> ${price}</p>
      </div>
      <button className="border-2 border-black hover:bg-black duration-300 hover:text-white rounded-md px-5 py-2 my-3  " onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
export default ProductCard

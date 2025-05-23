import React, { useContext } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" border-b shadow-md w-full pt-5 ">
      <div className="max-w-[1440px] px-3 sm:px-6 md:px-20 lg:px-32 mx-auto flex justify-between items-center  pb-3 ">
        <Link to={"/"}>
          <div className="text-purple-800 flex gap-2 items-end">
            <FaShoppingBag size={40} />
            <span className="text-2xl md:text-3xl font-bold">MT Shop</span>
          </div>
        </Link>
        <Link to={"/cart"}>
          <div className="flex items-center">
            <IoCartOutline size={40} />
            <div className="text-white bg-red-600 w-3 h-3 flex items-center justify-center rounded-full px-3 py-3 mt-[-25px] ml-[-15px]">
              0
            </div>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

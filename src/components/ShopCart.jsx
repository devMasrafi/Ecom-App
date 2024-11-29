import React from "react";
import { BsCart2 } from "react-icons/bs";

const ShopCart = () => {
  return (
    <main className="relative top-0 right-0">
      <div className="px-2 py-1 cursor-pointer relative">
        <BsCart2 className="text-2xl" />
        <div className="absolute -top-2 -right-2 bg-blue-500 text-white h-6 w-6 rounded-full flex items-center justify-center">
          5
        </div>
      </div>
    </main>
  );
};

export default ShopCart;

import React from "react";
import SearchBar from "./Searchbar";
import ShopCart from "./ShopCart";

const SeachCartCom = () => {
  return (
    <main className="container mx-auto sticky top-[5rem] z-50">
      <div className="flex gap-x-4 justify-end ">
        <SearchBar />
        <ShopCart />
      </div>
    </main>
  );
};

export default SeachCartCom;

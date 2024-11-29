'use client';

import React from "react";

const AllCategory = () => {
  const allCategory = [
    {
      categoryTitle: "Clothing & Apparel",
      image: "",
    },
    {
      categoryTitle: "Home & Kitchen",
      image: "",
    },
    {
      categoryTitle: "Beauty & Health",
      image: "",
    },
    {
      categoryTitle: "Books",
      image: "",
    },
    {
      categoryTitle: "Sports & Outdoor",
      image: "",
    },
  ];

  console.log(allCategory);

  return (
    <main>
      <section className="mb-[4rem] ">
        <div className="text-4xl text-center mb-[2rem] capitalize font-ralewayFont ">
            <h2>all categories</h2>
            <h3 className="text-lg" >see all our popular categories</h3>
        </div>
        <div className="flex justify-between "> 
          {allCategory.map((item) => (
            <div key={item.categoryTitle}
                className="h-[18rem] w-[16rem] bg-slate-400 flex justify-center items-end rounded-lg"
            >
              <h2 className="py-2 px-1 bg-slate-800 text-white rounded-t-md">{item.categoryTitle}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AllCategory;

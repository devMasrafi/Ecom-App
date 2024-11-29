const MostPopular = () => {
  const productArr = [
    {
      productImg: "",
      productTitile: "Gold Premium Wrist Watch",
      productPrice: "120$",
      productCategory: "Clothing & Apparel",
    },
    {
      productImg: "",
      productTitile: "Apple mac pro",
      productPrice: "1250$",
      productCategory: "electronics",
    },
    {
      productImg: "",
      productTitile: "Premium Indor Sliper",
      productPrice: "25$",
      productCategory: "Clothing & Apparel",
    },
    {
      productImg: "",
      productTitile: "how to learn JS",
      productPrice: "50$",
      productCategory: "books",
    },
    {
      productImg: "",
      productTitile: "Premium Sol Sunscreen",
      productPrice: "12$",
      productCategory: "Beauty & Health",
    },
    {
      productImg: "",
      productTitile: "Bat and Ball combo",
      productPrice: "34$",
      productCategory: "Sports & Outdoor",
    },
    {
      productImg: "",
      productTitile: "mini foldable sofa",
      productPrice: "165$",
      productCategory: "Home & Kitchen",
    },
  ];

  return (
    <main className="my-[12rem] ">
      <section className="container mx-auto">
        <div className=" text-center py-[3rem] ">
          <h2 className="text-4xl capitalize font-robotoFont font-semibold tracking-wider ">
            Most popular products
          </h2>
          <p className="text-lg capitalize font-ralewayFont mt-2 ">
            see what others are buying most
          </p>
        </div>
        <div className="flex gap-x-4 gap-y-6 flex-wrap justify-center">
          {productArr.map((items) => {
            return (
              <div key={items} className="bg-gray-400 w-[15rem] overflow-hidden rounded-md px-1 py-3">
                <h3 className="font-ralewayFont text-center py-1 ">
                  {items.productCategory}{" "}
                </h3>
                <div>
                  <img
                    className="w-[15rem] h-[10rem] object-cover bg-slate-400 "
                    src=""
                    alt={items.productTitile}
                  />
                </div>
                <div>
                  <h2 className="text-xl capitalize font-ralewayFont font-semibold py-2">
                    {items.productTitile}{" "}
                  </h2>
                  <h2 className="text-lg  ">{items.productPrice} </h2>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default MostPopular;

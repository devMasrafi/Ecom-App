import Image from "next/image";
import product from "/public/images/product.svg";

const Products = () => {
  return (
    <main>
      <section className="container mx-auto">
        <h2 className="font-bold text-6xl py-9">All Products</h2>
        <section className="flex items-start gap-x-6">
          <section>
            <div>
              <h3>Category</h3>
            </div>
          </section>
          <section className="flex items-center justify-evenly flex-wrap gap-6">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <section className="border w-[350px] p-5 rounded">
                {/* thumbnail image */}
                <Image
                  src={product}
                  alt="product image"
                  height={300}
                  width={300}
                />
                {/* product title */}
                <h2 className="text-2xl text-black font-semibold">
                  Product Title: hello product
                </h2>
                <div className="flex items-center gap-x-4 py-4">
                  <p>
                    <span className="text-violet-600">Quantity:</span> 10
                  </p>
                  <p>
                    <span className="text-violet-600">Category:</span> Men's
                    Collection
                  </p>
                  <p>
                    <span className="text-violet-600">Size:</span> XL
                  </p>
                </div>
                <p className="font-bold text-lg">Price: 500 BDT</p>
                <div className="flex items-center gap-x-4 py-2">
                  <div className="space-y-2">
                    <label
                      htmlFor=""
                      className="text-primary text-base font-medium font-inter"
                    >
                      Select Discount Type
                    </label>
                    <select
                      id=""
                      className=" outline-none border border-borderColor p-2 rounded-lg"
                      name="discount"
                    >
                      <option value="ammount">ammount</option>
                      <option value="percentage">percentage</option>
                    </select>
                  </div>
                  <p className="font-normal text-base py-3">
                    Discount Price: 10
                  </p>
                </div>
                <div className="flex items-center justify-between py-3">
                  <button className="px-3 py-2 bg-orange-500 rounded-xl text-base text-white hover:bg-orange-700">
                    Add to Cart
                  </button>
                  <button className="px-3 py-2 bg-blue-500 rounded-xl text-base text-white hover:bg-blue-700">
                    See Product
                  </button>
                </div>
              </section>
            ))}
          </section>
        </section>
        {/* pagination */}
        <section className="py-20 flex items-center justify-between">
          <div className="flex items-center gap-x-6">
            <div className="w-12 h-3 rounded bg-blue-500 text-white p-5 flex items-center justify-center cursor-pointer">
              Prev
            </div>
            <div className="w-12 h-3 rounded bg-blue-500 text-white p-5 flex items-center justify-center cursor-pointer">
              1
            </div>
            <div className="w-12 h-3 rounded bg-blue-500 text-white p-5 flex items-center justify-center cursor-pointer">
              2
            </div>
            <div className="w-12 h-3 rounded bg-blue-500 text-white p-5 flex items-center justify-center cursor-pointer">
              3
            </div>
            <div className="w-12 h-3 rounded bg-blue-500 text-white p-5 flex items-center justify-center cursor-pointer">
              4
            </div>
            <div className="w-12 h-3 rounded bg-blue-500 text-white p-5 flex items-center justify-center cursor-pointer">
              Next
            </div>
          </div>
          <div>
            <p>Showing 1 to 20 of 122 (7 Pages)</p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Products;

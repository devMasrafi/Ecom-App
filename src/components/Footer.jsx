import Link from "next/link";

const Footer = () => {
  return (
    <main className="h-[25rem] bg-gray-800">
      <footer className=" container mx-auto text-white  ">
        <div className="flex justify-between pt-[4rem]  ">
          <div>
            <h2 className="text-4xl mb-3">ECom-App</h2>
            <h3 className="text-lg font-ralewayFont">
              customer satisfaction is out main priority
            </h3>
          </div>
          <div>
            <h2 className="capitalize mb-3 ">use Full links</h2>
            <ul className="font-ralewayFont text-sm capitalize">
              <li className="mb-1 hover:underline hover:underline-offset-4">
                <Link href={"/"}>home</Link>
              </li>
              <li className="mb-1 hover:underline hover:underline-offset-4">
                <Link href={"/shop"}>shop</Link>
              </li>
              <li className="mb-1 hover:underline hover:underline-offset-4">
                <Link href={"/products"}>products</Link>
              </li>
              <li className="mb-1 hover:underline hover:underline-offset-4">
                <Link href={"/about"}>about</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-2xl pb-3 ">join the community</h2>
            <div>
              <input
                type="text"
                className="py-2 px-3 rounded-md mb-2"
                placeholder="email address"
              />
            </div>
            <button className="px-3 py-1 border border-2-white rounded-md">
              subscribe
            </button>
          </div>
        </div>
        <p className="font-ralewayFont text-sm">
          copyright 2024 | all right reserved{" "}
        </p>
      </footer>
    </main>
  );
};

export default Footer;

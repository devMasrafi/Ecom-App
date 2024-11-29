"use client";

import Link from "next/link";

const NavBar = () => {





  return (
    <main className="sticky top-0 z-50 bg-gray-800 text-white transition-all duration-500 ease-in-out">
      <section className="container mx-auto">
        <div className="flex items-center justify-between py-2">
          <div>
            <h1 className="text-2xl font-ralewayFont tracking-wider  ">ECom-App</h1>
          </div>
          <div></div>
          <div>
            <ul className="font-ralewayFont text-lg capitalize flex gap-x-5">
              <li>
                <Link href={"/"}>home</Link>
              </li>
              <li>
                <Link href={"/shop"}>shop</Link>
              </li>
              <li>
                <Link href={"/conatact"}>conatact</Link>
              </li>
              <li>
                <Link href={"/about"}>about</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NavBar;

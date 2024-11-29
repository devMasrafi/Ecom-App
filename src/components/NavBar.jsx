"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [scrollValue, setScrollValue] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      setScrollValue(window.scrollY > 500);
    };

    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <main
      className={` sticky top-0 z-50 lg:py-3 transition-all duration-900 ease-in-out ${
        scrollValue ? "bg-gray-800 text-white" : "bg-transparent"
      }`}
    >
      <section className="container mx-auto">
        <div className="flex items-center justify-between py-2">
          <div>
            <h1 className="text-2xl font-ralewayFont tracking-wider  ">
              ECom-App
            </h1>
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
                <Link href={"/products"}>products</Link>
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

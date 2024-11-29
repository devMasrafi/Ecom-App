"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <main>
      <section>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-ralewayFont tracking-wider  ">ECom-App</h1>
          </div>
          <div></div>
          <div>
            <ul className="font-ralewayFont text-xl capitalize flex gap-x-2">
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

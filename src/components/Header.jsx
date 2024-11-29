'use client'

import Link from "next/link"



const Header = () => {
  return (
    <main className="bg-gray-800 py-[0.5rem] ">
        <section className="container mx-auto flex justify-between  text-white">
            <div className="font-ralewayFont">
                welcome to ecommerce app
            </div>
            <div>
                20&#37; off on shopping above 50&#36;
            </div>
            <div className="flex gap-x-3 font-ralewayFont">
                <button className="px-3 py-1 border border-1-white bg-transparent rounded-md">
                    <Link href={'/signup'}>sign up</Link>
                </button>
                <button className="px-3 py-1 border border-orange-500 bg-orange-500 text-gray-800 rounded-md hover:border-white hover:text-white hover:bg-transparent transition-all duration-300 ease-out ">
                    <Link href={'/signin'}>log in</Link>
                </button>
            </div>
        </section>
    </main>
  )
}

export default Header
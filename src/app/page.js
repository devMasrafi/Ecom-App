import AllCatagory from "@/components/AllCatagory";
import MostPopular from "@/components/MostPopular";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="text-8xl text-center mt-[10rem] capitalize h-[40rem] ">
          big someting
        </div>
        <div>
          <MostPopular/>
        </div>

        <div>
          <AllCatagory/>
        </div>
      </main>
    </div>
  );
}

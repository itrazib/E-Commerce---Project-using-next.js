import Link from "next/link";
import Banner from "../components/Banner";
import Products from "../components/Products";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div>
        <h1 className="font-bold text-center text-5xl mt-20 mb-15">
          Top <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Rated Products</span>
        </h1>
        <Products></Products>
        <div className="flex mx-auto justify-center my-5">
          <Link href="/products">
            {" "}
            <button className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white">Show ALL</button>
          </Link>
        </div>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
}

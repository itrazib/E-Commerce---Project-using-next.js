import Link from "next/link";
import Banner from "../../components/Banner";
import Products from "../../components/Products";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div>
        <h1 className="font-bold text-center text-5xl mt-20 mb-15">
          Top <span className="">Rated Products</span>
        </h1>
        <Products></Products>
        <div className="flex mx-auto justify-center my-5">
          <Link href="/products">
            {" "}
            <button className="btn btn-primary">Show ALL</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

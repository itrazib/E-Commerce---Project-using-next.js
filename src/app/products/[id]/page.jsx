import Button from "../../../components/Button";

export default async function ProductsDetails({ params }) {
  const { id } = await params;
  const data = await fetch(`https://nextjs-project-server.vercel.app/${id}`);
  const product = await data.json();

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Back Button */}
      <Button></Button>

      <div className="flex flex-col md:flex-row gap-9 md:gap-15">
        {/* Banner / Large Image */}
        <div className="w-full  rounded-xl shadow-lg">
          <img
            src={product.image}
            className="w-full h-full object-cover"
            alt={product.title}
          />
        </div>

        <div>
          {/* Title */}
          <h1 className="text-3xl font-bold mt-6">{product.title}</h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 mt-3 text-gray-600 text-sm">
            <p className="font-medium bg-blue-100 text-blue-600 px-3 py-1 rounded-lg">
              ${product.price}
            </p>
            <p>
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> ⭐ {product.rating}
            </p>
            <p>
              <span className="font-semibold">Stock:</span> {product.stock}{" "}
              available
            </p>
          </div>

          {/* Created Date */}
          <p className="text-gray-500 text-sm mt-1">
            Added on: {new Date(product.createdAt).toLocaleDateString()}
          </p>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-5 my-5">
        <button className="btn text-white bg-gradient-to-r from-purple-500 to-blue-500">
          Buy Now
        </button>
        <button className="btn text-white bg-gradient-to-r from-orange-500 to-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

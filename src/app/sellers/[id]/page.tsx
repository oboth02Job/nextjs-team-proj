import { getProductsBySellerId } from "@/services/productService";
import ProductCard from "@/components/ProductCard"
import "./SellerProfile.css"

export default async function SellerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const sellerProducts = getProductsBySellerId(id)

  return (
    <main>
      <h1>{id}</h1>

      <p>Discover products from this seller</p>

      <p>{sellerProducts.length} products</p>

      <div className="seller-products">
        {sellerProducts.map((product) => (
          <div key={product.id}>
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
import ProductCard from "./ProductCard";
import "./FeaturedProducts.css"

const products = [
  {
    id: "handmade-beaded-necklace",
    name: "Handmade Beaded Necklace",
    price: "UGX 45,000",
    category: "Jewelry",
    image: "/products/necklace.jpg",
  },
  {
    id: "clay-flower-pot",
    name: "Clay Flower Pot",
    price: "UGX 35,000",
    category: "Pottery",
    image: "/products/flower-pot.jpg",
  },
  {
    id: "wooden-serving-tray",
    name: "Wooden Serving Tray",
    price: "UGX 60,000",
    category: "Woodwork",
    image: "/products/tray.jpg",
  },

]

function FeaturedProducts() {
    return (
        <section>
            <h2>Featured Products</h2>

            <p>Discover some of the unique creations from our talented artisans</p>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.name}
                        name={product.name}
                        price={product.price}
                        category={product.category}
                        image={product.image}
                    />
                ))}
            </div>

        </section>
    )
}

export default FeaturedProducts;
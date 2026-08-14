import ProductCard from "./ProductCard";
import "./FeaturedProducts.css"
import { products } from "@/data/products"


function FeaturedProducts() {
    return (
        <section>
            <h2>Featured Products</h2>

            <p>Discover some of the unique creations from our talented artisans</p>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                    key={product.id}
                     id={product.id}
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
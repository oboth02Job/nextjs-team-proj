import { products } from "@/data/products"
import { notFound } from "next/navigation"
import "./ProductsDetail.css"
import Link from "next/link"

export default async function ProductDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
 
    const { id } = await params;
    const product = products.find((product) => product.id === id)
    if (!product) {
        notFound();
    }

    return (
        <main className="product-details">
            <div className="product-image">
             <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info">
            <h1>{product.name}</h1>
                <p>{product.category}</p>

                <p>
                    Sold by {" "}
                <Link href={`/sellers/${product.sellerId}`} className="seller-link">
                    {product.seller}
                    </Link>
                    </p>
                <p>{product.description}</p>
            <p>{product.price}</p>
            </div>

            
            
        </main>
    )
}
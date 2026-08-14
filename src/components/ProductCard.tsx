import "./ProductCard.css"
import Link from "next/link"

type ProductsCardProps = {
    name: string;
    price: string;
    category: string;
    image: string;
    id: string;
}

function ProductsCard({ id, name, price, category, image }: ProductsCardProps) {

    return (
        <Link href={`/products/${id}`} className="product-card">
            <img src={image} alt={name} />

            <h3>{name}</h3>

            <p>{category}</p>

            <p>{price}</p>
        </Link>
    )
}

export default ProductsCard
import "./ProductCard.css"

type ProductsCardProps = {
    name: string;
    price: string;
    category: string;
    image: string;
    
}

function ProductsCard({ name, price, category, image }: ProductsCardProps) {

    return (
        <article className="product-card">
            <img src={image} alt={name} />

            <h3>{name}</h3>

            <p>{category}</p>

            <p>{price}</p>
        </article>
    )
}

export default ProductsCard
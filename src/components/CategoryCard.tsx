import "./CategoryCard.css"
import Link from "next/link"

type CategoryCardProps = {
    name: string;
    href: string;
}

function CategoryCard({ name, href }: CategoryCardProps) {

    return (
         
        <Link href={href}><div className="category-card">
            <h3>{name}</h3>
        </div> </Link>
    )
}

export default CategoryCard

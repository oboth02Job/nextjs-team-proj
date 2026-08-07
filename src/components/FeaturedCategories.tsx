import CategoryCard from "./CategoryCard" 
import "./FeaturedCategories.css"

const categories = [
    { name: "Jewelry", href: "/category/jewelry" },
    { name: "Home Decor", href: "/category/home-decor"},
    {name: "Pottery", href: "/category/pottery"},
    {name: "Woodwork", href: "/category/woodwork"},
]

function FeaturedCategories() {

    return (
        <section>
            <h2>Featured Categories</h2>

            <p>Browse handcrafted products by category and discover creations you'll love</p>

            <div className="category-grid">
                  {categories.map((category) => (
                      <CategoryCard
                          key={category.href}
                          name={category.name}
                          href={category.href}
                      />
))}
          </div>

        </section>
    )
}

export default FeaturedCategories;
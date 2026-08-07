
const products = [
  {
    name: "Handmade Beaded Necklace",
    price: "UGX 45,000",
    category: "Jewelry",
    image: "/products/necklace.jpg",
  },
  {
    name: "Clay Flower Pot",
    price: "UGX 35,000",
    category: "Pottery",
    image: "/products/flower-pot.jpg",
  },
  {
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

            <p>Discover some the unique creations from our talented artisans</p>
        </section>
    )
}

export default FeaturedProducts;
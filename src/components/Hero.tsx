import Link from "next/link"
import "./Hero.css"

function Hero() {

    return (
        <section>
            <h1>Discover Unique Handmade Creations</h1>
            <p>Explore handcrafted products from talented artisans, support local creators,
            and find one-of-a-kind treasures made with passion</p>

            <div className="hero-actions">
                <Link href="/products" className="primary-btn">Shop Now</Link>
                <Link href="/register" className="secondary-btn">Become a Seller</Link>
                </div> 
        </section>
    )
}

export default Hero;
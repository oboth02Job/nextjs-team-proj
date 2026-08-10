import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import FeaturedCategories from "@/components/FeaturedCategories"
import FeaturedProducts from "@/components/FeaturedProducts"

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
             <FeaturedProducts />
            <FeaturedCategories />
        </main>
         
    )
}
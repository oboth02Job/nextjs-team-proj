import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import FeaturedCategories from "@/components/FeaturedCategories"

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <FeaturedCategories />
        </main>
    )
}
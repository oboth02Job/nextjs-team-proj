import Link from "next/link";

const links = [
    { name: "Home", href: "/" },
     { name: "Products", href: "/products" },
      { name: "Categories", href: "/categories" },
       { name: "Sellers", href: "/sellers"}
]

function Navbar() {

    return (
        <nav>
            <h1>Handcrafted Haven</h1>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                    </li>
                <li>
                    <Link href="/products">Products</Link>
                    </li>
                <li>
                    <Link href="/categories">Categories</Link>
                    </li>
                <li>
                    <Link href="/sellers">Sellers</Link>
                    </li>
            </ul>
       </nav>
   )
}

export default Navbar;
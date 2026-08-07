import Link from "next/link";
import "./Navbar.css"

const links = [
    { name: "Home", href: "/" },
     { name: "Products", href: "/products" },
      { name: "Categories", href: "/categories" },
       { name: "Sellers", href: "/sellers"}
]

function Navbar() {

    return (
        <nav>
            <p>Handcrafted Haven</p>
            <ul>
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                  
                ))}
            </ul>

            <div>
                <Link href="/login">Log In</Link>
                <Link href="/register">Register</Link>
            </div>
       </nav>
   )
}

export default Navbar;
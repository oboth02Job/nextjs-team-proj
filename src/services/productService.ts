import { products } from "@/data/products"

export function getProductsBySellerId(sellerId: string) {
    return products.filter((product) => product.sellerId === sellerId
    )
}

export function getProductById(productId: string) {
    const product =  products.find((product) => product.id === productId
    )
    return product
}


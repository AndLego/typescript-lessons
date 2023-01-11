import { Product } from "./product.module"

export const products: Product[] = []

export const addProduct = (data: Product) => {
  products.push(data)
}

export const calcStock = (): number => {
  return products.reduce((acc, item) => acc + item.stock, 0)
}

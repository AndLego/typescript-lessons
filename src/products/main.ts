import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: "Calzones",
  createdAt: new Date(),
  stock: 12,
  size: "S"
})

addProduct({
  title: "Medias",
  createdAt: new Date(1991, 9, 9),
  stock: 5
})

console.log(products);

const total = calcStock()
console.log(total, "productos");


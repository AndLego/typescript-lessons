(() => {
  type Sizes = "S" | "M" | "L" | "XL"
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const cart: Product[] = []

  const addProduct = (data: Product) => {
    cart.push(data)
  }

  //destructurndo
  const annProduct = ({ title, createdAt, stock, size }: Product) => {
    console.log(title);
    console.log(createdAt);
    console.log(stock);
    console.log(size);
  }

  annProduct({
    title: "medias",
    createdAt: new Date(),
    stock: 12,
    size: "S"
  })

  addProduct({
    title: "calzon",
    createdAt: new Date(),
    stock: 2,
  })

  console.log(cart);

  // cart.push("asda") no se pueden push porque no cumplen on el tipo
  // cart.push(12312) no se pueden push porque no cumplen on el tipo

  cart.push({
    title: "calzonitos",
    createdAt: new Date(),
    stock: 22,
  })

})()

(() => {
  const login = (data: { mail: string, pass: number }) => {
    console.log(data.mail, data.pass);

  }

  login({ mail: "and@mc.com", pass: 1231 })

  const cart: any[] = []
  type Sizes = "S" | "M" | "L" | "XL"

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    cart.push(data)
  }

  addProduct({
    title: "calzon",
    createdAt: new Date(),
    stock: 2,
  })

  console.log(cart);


})()

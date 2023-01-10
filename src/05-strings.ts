(() => {
  let productTitle = "un producto"
  // productTitle = null
  // productTitle = 123
  productTitle = "otro nombre cool"
  console.log("productTitle", productTitle);

  const productDescription = "I'm a boy"
  console.log("productDescription", productDescription);

  let myPrice = 25
  let isNew = false

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${myPrice}
    isNew: ${isNew}
  `
  console.log("summary", summary);

  const mySthing: string = "hello"
})()

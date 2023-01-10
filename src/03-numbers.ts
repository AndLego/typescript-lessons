(() => {
  let productPrice = 100
  productPrice = 12
  console.log("productPrice", productPrice); //productPrice 12

  let customerAge: number = 28
  // customerAge = customerAge + "1" //type "string" is not assignbale
  customerAge = customerAge + 1
  console.log("customerAge", customerAge);//customerAge 29

  let productInStock: number
  console.log("productInStock", productInStock);//used before initialize
  if (productInStock > 10) {//used before initialize
    console.log("es mayor"); //productInStock undefined
  }

  let discount = parseInt("123")
  // let discount = parseInt("asdsadsa") NaN es considerado como numero
  console.log("discount", discount);//discount 123

  let hex = 0xfff
  console.log("hex", hex);//hex 4095
  let bin = 0b10101
  console.log("bin", bin);//bin 21


})()

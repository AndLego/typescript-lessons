//aqui trabajamos el motor de inferencia de typescript
//asi evitamos tener que poner let myProduct: string = "Roscon"
//si encerramos los datos en una funcion, protege con el scope
//para poder usar los datos en otro archivo

(() => {

  let myProduct = "Roscon"
  let myProductPrice = 123

  myProduct = "Donut"
  myProduct.toLowerCase()

  myProductPrice.toFixed()

  const myProductStock = 1000
  const myProduct2 = "Bouche"
})()

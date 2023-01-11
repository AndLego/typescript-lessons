(() => {
  type Sizes = "S" | "M" | "L" | "XL"

  function createProduct(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title, createdAt, stock, size
    }
  }
  //si no se mandan todos los datos resalta error
  const producto1 = createProduct("BomBom", new Date(), 12, "M")
  console.log(producto1);
  console.log(producto1.size);

  //en caso de que querramos que un valor sea opcional usamos el "xxx?"

  const anotherProduct = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes) => {
    return {
      title, createdAt, stock, size
    }
  }

  //no marca error cuando falta el parametro size
  const producto2 = anotherProduct("Choco", new Date(), 2)
  console.log(producto2);
  console.log(producto2.stock);
  console.log(producto2.size); //marca tipo Size | undefined

})()

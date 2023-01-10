(() => {
  let prices = [1, 2, 3, 1, 2]
  // prices ha quedado como: number[] por lo que no podemos añadir otro
  //tipo de valores deferentes a un numero
  // prices.push("asas")
  // prices.push(true)
  // prices.push({})
  prices.push(1000)
  prices = [1, 2]

  let example = [1, 2, "hola"]
  //example es un array :(number | string) []
  example.push(5)
  example.push("chavo")
  // example.push(true)//no se puede push un boolean

  //definir un array de manera explicita
  let mixed: (string | boolean | number | Object)[] = ["hola", true]
  //Object me permite push a objetos y arrays
  mixed.push(123)
  mixed.push({})
  mixed.push([])

  let numbers = [1, 2, 3, 4]
  //los metodos funcionan igual si deveulve un tipo de valor definido
  numbers.map(item => item * 2)
})()

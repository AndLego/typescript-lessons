(() => {
  //tipo inferido any
  let myNum = null
  let myotherNum = undefined

  //tipo null y undefined respectivamente
  let myNull: null = null
  let myUndefined: undefined = undefined

  //como usarlos para inicializar una variable en null
  let myAge: number | null = null
  myAge = 231
  myAge = null

  function greet(name: string | null) {
    if (name) {
      console.log(`Hello ${name}`);
    } else {
      console.log("tipa tu nombre");
    }
  }

  greet("Andres")
  greet(null)

  function sayHi(name: string | null) {
    let hello = "Hola "
    hello += name || "nadie"

    // hello += name ?? "nadie"
    //en este segundo caso el ?? toma como falso solo a null y  a undefined
    //mientras que el || toma a 0, "", NaN, null y undefined

    // hello += name?.toLowerCase() || "nadie"
    console.log(hello);
  }

  sayHi("Nicolai")
  sayHi(null)
  sayHi("")
})()

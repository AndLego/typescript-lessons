(() => {
  //se recomiendo no usar any, mala practica
  let myDynamicVar: any
  myDynamicVar = 12
  myDynamicVar = null
  myDynamicVar = {}
  myDynamicVar = ""

  myDynamicVar = "Hola"
  //transformar de un tipo a otro se conoce como CAST
  const palabra = (myDynamicVar as string).toLocaleLowerCase()
  console.log(palabra);

  myDynamicVar = 1212
  const numero = (<number>myDynamicVar).toFixed()
  console.log(numero);

})()

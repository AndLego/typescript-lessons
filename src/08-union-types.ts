(() => {
  let userID: string | number
  userID = "mksajdk2"
  userID = 12312

  function greeting(myText: string | number) {
    if (typeof myText === "string") {
      myText.toLocaleLowerCase()
      console.log("string", myText);
    }
    else if (typeof myText === "number") {
      myText.toFixed(1)
      console.log("numero", myText)
    } else {
      console.log("cualquier cosa", myText)
    }
  }
  greeting("hola")
  greeting(3131.23131)
  greeting(true)
})()

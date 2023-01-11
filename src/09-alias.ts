(() => {
  //type, es de uso exclusivo de TS para crear nuestros propios tipos
  type UserID = string | number | boolean
  let userID: UserID

  //Literal types
  type Sizes = "S" | "M" | "L" | "XL"
  let shirtSize: Sizes
  shirtSize = "S"
  // shirtSize = "s"
  shirtSize = "M"
  // shirtSize = "SADAA"

  function greeting(userID: UserID, size: Sizes) {
    if (typeof userID === "number") {
      console.log(`number ${userID.toFixed(1)}`);
    }
  }

  greeting(12312321, "S")
})()

(() => {
  let isEnable = true
  // isEnable = "as"
  // isEnable = 1213
  isEnable = false

  //manera impilicita de delcarar

  let isNew: boolean = true
  console.log("isNew", isNew);
  isNew = true
  console.log("isNew", isNew);

  const randome = Math.random()
  console.log("randome", randome);
  isNew = randome >= 0.5 ? true : false
  console.log("isNew", isNew);

})()

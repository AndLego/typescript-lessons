(() => {
  const calcTotal = (prices: number[]) => {
    return prices.reduce((sum, price) => sum + price, 0)
  }

  const rta = calcTotal([1, 2, 1, 2, 2])
  console.log(rta);

  //las funciones que no retornan nada son de tipo void
  //es decir sin return
  const printTotal = (prices: number[]) => {
    // const printTotal = (prices: number[]): void => {

    const rta = calcTotal(prices)
    console.log(`el total es ${rta}`);

  }

  printTotal([1, 2, 1, 3, 2])
})()

//var _ = require("lodash")
//al no ser soportado en ts tenemos que traducirlo
//y me recomendara instalar un sistema de tipos recomendado
//en este caso era npm i --save-dev @types/lodash

import _ from "lodash"


const data = [
  {
    username: "andres",
    role: "admin"
  },
  {
    username: "valentina",
    role: "seller"
  },
  {
    username: "mariana",
    role: "seller"
  },
  {
    username: "santiago",
    role: "customer"
  },
]

//agrupar por roles
const rta = _.groupBy(data, (item) => item.role)
console.log(rta);

const moment = require("moment/moment");

let fechaActual = moment();
let fechaDeNacimiento = moment("1997-25-08","YYYY")

if(fechaActual.isValid() && fechaDeNacimiento.isValid()){
    let diferencia = fechaActual + fechaDeNacimiento
    return diferencia.diff("2023-22-3")
}



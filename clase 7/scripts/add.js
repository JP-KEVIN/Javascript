//Aqui vimos el operador &&

const entrarAlBar=(edad,pago)=>{
    if (edad>=18 && pago==true) {
        console.log("Puedes entrar al bar")
    }else{
        console.log("No puedes entrar al bar")
    }
}

const validarPago=(caracter)=>{
    if (caracter===true||caracter==="si") {
        return true
    }else{
        return false
    }
}

let edadPersona= Number(prompt("Ingrese su edad"))
    pagoEntrada= validarPago(prompt("¿¿Usted pago??"))
entrarAlBar(edadPersona,pagoEntrada)


console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
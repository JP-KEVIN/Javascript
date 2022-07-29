//Aqui vimos el operador ||

const entrarAlBar=(edad,pago)=>{
    if (edad>=18 || pago===true) {
        console.log("Puede entrar al bar")
    } else {
        console.log("No puedes entrar maldita perra")
    }
}

entrarAlBar(17,false)

console.log(true||true)
console.log(false||true)
console.log(true||false)
console.log(false||false)
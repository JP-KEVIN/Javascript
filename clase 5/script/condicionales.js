let age=17
//condicionales con if solamente
if(age>=18){
    // console.log("Eres mayor de edad") se muestra en la consola
    document.write("Eres mayor de edad")//se muestra en la pantalla
}

//condicionales con if-else

if (age=>18) {
    console.log ("Eres mayor de edad")
} else {
    console.log ("Eres menor de edad")
}

//condicionales con switch

let personName="Yinier"
switch (personName) {
    case "Yinier":
        console.log(`A ${personName} le gusta freefire`)
        break;
        case "Estevenson":
            console.log("Es el monitor de Front")
            break;
    default:
        console.log("Es una persona")
        break;
}

//Condicional con operador ternario
let personGenere="F"

personGenere=="F"? console.log("Es una mujer"):console.log("Es un hombre")

//Operador terciario con edad 
// let personAge=Number(prompt('Ingrese su edad'));
let personAge=19

personAge>18? console.log("Mayor a 18"): console.log("Menor a 18")

let isHungry=true

isHungry ==true ?console.log("Tenemos hambre"):console.log("Tenemos sueñito")
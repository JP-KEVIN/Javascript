function saludar(){
    console.log("hola mundo")
}

// saludar();
// saludar();

function sumar(){
    let suma=2+3;
    console.log(suma)
}

// sumar();

function politica(){
    console.log("con la derecha solo la paja")
}

// politica()

//funcion tipo plecha
const saludo=(nombre)=>{
    console.log(`hola ${nombre}`)
}
saludo("juan");
saludo("santiago");
saludo("yinier");

//vamos a transformar esta funcion en flecha
function sumar(){
    let suma=2+3;
    console.log(suma)
}
sumar()

const suma=(num1,num2)=>{
    let resultado=num1+num2;
    console.log(resultado)
}
suma(5,10)

const multiplicar=(num1,num2)=>{
    let resultado=num1*num2;
    // console.log(resultado)
    return resultado
}
multiplicar(5,10)

let resultadoMultiplicacion=multiplicar(50,10)

console.log(`El resultado de la multiplion es ${resultadoMultiplicacion}`)


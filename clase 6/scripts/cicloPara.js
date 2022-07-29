let numeros=[5,2,3,4,1,3]

console.log(numeros)//imprime el vector
console.log(numeros.length)//Imprime el tamaño del vector

for (let i = 0; i <numeros.length ; i++) {
    console.log(numeros[i]);
    if (numeros[i]%2==0) {
        console.log("El numero es par")
    } else {
        console.log("El numero es impar")
    }
}
    
console.warn("For of");
for (const numero of numeros){
    console.log(numero)
}

console.warn("For in")
for(const key in numeros){
    console.log(numeros[key])
}

console.warn("Foreach")

numeros.forEach(element => {
    console.log(element)
});

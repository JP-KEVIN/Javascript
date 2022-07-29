//ciclo for en js
let cont=0, acum=0;
for (let i = 0; i <=100; i++) {
    //acum=acum+i
    acum+=i
    if(i%2==0){
        console.log(`El numero ${i} es par`)
    }else{
        console.log(`El numero ${i} es impar`)
    }
    
}
console.log(`El acumulador esta en: ${acum}`)

 //funcion para saber si un numero es par

 const isPair=(num)=>{
     if (num%2==0) {
         console.log("El numero es par")
     } else {
         console.log("El numero es impar")
     }
 }

 isPair(122)
 isPair(125)

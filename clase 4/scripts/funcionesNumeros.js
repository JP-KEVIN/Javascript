console.log(Math.E)//devuleve la constante de euler
console.log(Math.PI)//devuelve la constante de pi
console.log(Math.pow(2,3))//devuelve la potenciacion de las variables espesificados
console.log(2**3)//potenciacion

let numero1=30,
numero2=82

console.log(Math.min(numero1,numero2))
console.log(Math.max(numero1,numero2))

const numeroPI=3.1416

console.log(Math.random(numeroPI))
console.log(Math.ceil(numeroPI))

console.log(Math.random()*(numero2-numero1)+numero1)
console.log(Math.trunc(Math.random()*(numero2-numero1)+numero1))//alazar sin decimal

const numeros=[0,20,10,5,38]

console.log(typeof numeros)
console.log(`el numero menor es: ${Math.min(...numeros)}`)
console.log(`el numero menor es: ${Math.max(...numeros)}`)
let saludo="hola santiago"

console.log(saludo)
console.log(saludo.length)//devuelve la cantidad de caracteres
console.log(saludo.toUpperCase())//devuelve el texto en mayusculas
console.log(saludo.toLocaleLowerCase())//devuelve el texto en minisculas
console.log(saludo.slice(8,13))//devuelve el texto comprimido entre las posiciones proporcionadas por parametros
console.log(saludo.includes("hola"))//devuelve verdadero o falso si la cadena(contenido) existe
console.log(saludo.indexOf("a"))//devuelve la primera posicion en la que aparexca el texto ingresado por el parametro
console.log(saludo.replace("a","@"))//permite remplzar una cadena de texto por otra

let numero=5
console.log(typeof numero.toString())
console.log(typeof numero)
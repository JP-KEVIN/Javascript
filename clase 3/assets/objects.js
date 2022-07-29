//Creamos un objeto vacio
let object={}
console.log(object)
//creando objeto carro
let car={
    color:"rojo",
    velocidadMaxima:"100km/h",
    modelo:"2020",
    placa:"ABC-123",
    Propietarios:["steven","yinier"],
    luagrCreacion: {
        ciudad: "Medellin",
        pais: "Colombia"
    },
    tieneSoat:true
}
console.log(car)
//mostramos solo una caracteristica del objeto
let plant={
    color:"verde",
    raices:"cortas",
    flores: "ortalizas",
    tallo:"flexible",
    edad:"3 meses",
    nutritivo:false
}
console.log(plant.flores)
console.log(`esta es una ${plant.color}`)
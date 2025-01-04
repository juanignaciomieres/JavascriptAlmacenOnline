const PaginadeProductos = [
    {nombre: "Picada Para 4", precio: 30000, id: 1, stock: 100},
    {nombre: "Pack de Gaseosa", precio: 10000, id: 2, stock: 100},
    {nombre: "3 Snacks", precio: 5000, id: 3, stock: 100},
]

class Productos{
    constructor (nombre, precio, id, stock) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
        this.stock = stock
    }
}

const ArraydeProductos = pseudoPeticion.map ( (el)=>{
    return new Productos(el.nombre, el.precio, el.id, el.stock)
})


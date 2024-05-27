// Array de los productos
const productos = [
    { nombre : "producto 1", precio : 250, cantidad : 0 },
    { nombre : "producto 2", precio : 100, cantidad : 0},
    { nombre : "producto 3", precio : 150, cantidad : 0},
    { nombre : "servicio", precio : 500, cantidad : 0},
];

// Calculadora del costo total
function calcularTotal (productos) {
    let costoTotal = 0 ;
    productos.forEach(productos => {
        costoTotal += productos.precio * productos.cantidad
    });
    return costoTotal
};

// Entrada de productos
productos[0].cantidad = 2;
productos[1].cantidad = 4;
productos[2].cantidad = 3;
productos[3].cantidad = 1;

// Costo Total
const costoTotal = calcularTotal ( productos );
console.log("El costo total de los porductos y servicios selecionados es : $" + costoTotal);



// me ayude un poco con chat gpt para usar de ejemplo, mientras escribia el codigo tuve un error en la devolucion del costo total y no entedia porque la variable me salia como no definida hasta que me di cuenta que no habia puesto el return, me deje comentado para saber que hacia cada paso y asi poder entender mejor a la hora de estudiarlo
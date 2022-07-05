alert("Bienvenidos a Lowkey");
const x = Infinity;
let carrito = 0;
const remeras = 300;
const buzos = 1500;
const zapatillas = 3000;
let cantidadRemeras;
let cantidadBuzos;
let cantidadZapatillas;

function catalogo() {
    for (let i = 0; i < x; i++) {
        let ingreso = parseInt(
            prompt("Catalogo: \n 1-Remeras \n 2-Buzos \n 3-Zapatillas \n 4-Salir")
        );
        if (ingreso == 1) {
            cantidadRemeras = parseInt(prompt("Ingrese cantidad de remeras"));
            carrito += cantidadRemeras * remeras;
        } else if (ingreso == 2) {
            cantidadBuzos = parseInt(prompt("Ingrese cantidad de buzos"));
            carrito += cantidadBuzos * buzos;
        }
        if (ingreso == 3) {
            cantidadZapatillas = parseInt(prompt("Ingrese cantidad de zapatillas"));
            carrito += cantidadZapatillas * zapatillas;
        } else if (ingreso == 4) {
            console.log(
                `El total de la compra es: $${carrito} \n remeras : ${cantidadRemeras} \n buzos : ${cantidadBuzos} \n pantalones : ${cantidadZapatillas}`
            );
            break;
        }
    }
}
catalogo(x);
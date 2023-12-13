// ME TRAIGO LOS PRODUCTOS DE MI BASE DE DATOS
let productos;
fetch("./productos.json")
.then(response => response.json())
.then((data)=> {
    productos = data
})


// -------------- OBTENER BOTONES DE SUMA Y RESTA PARA HACER CONTADORES ------------// 
// CONTADOR EMPRENDIMIENTOS
const masEMP = document.getElementById('masEMP')
const menosEMP = document.getElementById('menosEMP')
const counterEMP = document.getElementById('counterEMP')
let acumEMP = 0
// CONTADOR STICKERS
const masSTK = document.getElementById('masSTK')
const menosSTK = document.getElementById('menosSTK')
const counterSTK = document.getElementById('counterSTK')
let acumSTK = 0
// CONTADOR POLAROID
const masPOL = document.getElementById('masPOL')
const menosPOL = document.getElementById('menosPOL')
const counterPOL = document.getElementById('counterPOL')
let acumPOL = 0
// CONTADOR SOUVENIR
const masSOUV = document.getElementById('masSOUV')
const menosSOUV = document.getElementById('menosSOUV')
const counterSOUV = document.getElementById('counterSOUV')
let acumSOUV = 0
// CONTADOR AGENDAS
const masAG = document.getElementById('masAG')
const menosAG = document.getElementById('menosAG')
const counterAG = document.getElementById('counterAG')
let acumAG = 0
// CONTADOR CALENDARIOS
const masCAL = document.getElementById('masCAL')
const menosCAL = document.getElementById('menosCAL')
const counterCAL = document.getElementById('counterCAL')
let acumCAL = 0
// CONTADOR CUMPLEANIOS
const masCUMP = document.getElementById('masCUMP')
const menosCUMP = document.getElementById('menosCUMP')
const counterCUMP = document.getElementById('counterCUMP')
let acumCUMP = 0

// FUNCION PARA SUMAR PRODUCTOS
function sumar(acum, contador){
    acum = acum + 1
    contador.textContent =  acum
    return acum
}
// FUNCION PARA RESTAR PRODUCTOS
function restar(acum, contador){
    if(acum == 0){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "La cantidad de productos no puede ser 0.",
            });
    }else if(acum > 0){
        acum = acum - 1
        contador.textContent =  acum
        return acum
    }
}


// ---------------- ESCUCHADOR DE EVENTOS PARA SUMAR Y RESTAR PRODUCTOS ------------------//
//ESCUCHADOR EMPRENDIMIENTOS
masEMP.addEventListener('click', () => {acumEMP = sumar(acumEMP,counterEMP)})
menosEMP.addEventListener('click',() => {acumEMP = restar(acumEMP,counterEMP)})
//ESCUCHADOR STICKERS
masSTK.addEventListener('click',() => {acumSTK = sumar(acumSTK,counterSTK)})
menosSTK.addEventListener('click',() => {acumSTK = restar(acumSTK,counterSTK)})
//ESCUCHADOR POLAROIDS
masPOL.addEventListener('click',() => {acumPOL = sumar(acumPOL,counterPOL)})
menosPOL.addEventListener('click',() => {acumPOL = restar(acumPOL,counterPOL)})
//ESCUCHADOR SOVUENIR
masSOUV.addEventListener('click',() => {acumSOUV = sumar(acumSOUV,counterSOUV)})
menosSOUV.addEventListener('click',() => {acumSOUV = restar(acumSOUV,counterSOUV)})
//ESCUCHADOR AGENDAS
masAG.addEventListener('click',() => {acumAG = sumar(acumAG,counterAG)})
menosAG.addEventListener('click',() => {acumAG = restar(acumAG,counterAG)})
//ESCUCHADOR CALENDARIOS
masCAL.addEventListener('click',() => {acumCAL = sumar(acumCAL,counterCAL)})
menosCAL.addEventListener('click',() => {acumCAL = restar(acumCAL,counterCAL)})
//ESCUCHADOR CUMPLEANIOS
masCUMP.addEventListener('click',() => {acumCUMP = sumar(acumCUMP,counterCUMP)})
menosCUMP.addEventListener('click',() => {acumCUMP = restar(acumCUMP,counterCUMP)})

// FUNCION PARA ANIADIR ARTICULOS AL CARRITO
function setearCantidad(nombre, cantidad){
    productos.forEach(element => {
        if(element.nombre == nombre){
            element.cantidad = element.cantidad + cantidad
            if(element.cantidad == 0){
                Swal.fire(`Por favor, seleccione la cantidad de ${element.nombre} que desea sumar al carrito.`);
            }
        }
        
        
    });

}

let carrito = JSON.parse(localStorage.getItem('carrito'));
let carritolleno = document.getElementById('test')
let carritovacio = document.getElementById('test2')

if(carrito){
    console.log('if primero');
    carritolleno.style.display = 'inline-block'
    carritovacio.style.display = 'none'
}else{
    console.log('else primero');
    carritolleno.style.display = 'none'
    carritovacio.style.display = 'inline-block'
}

// FUNCION PARA SUMAR EL CARRITO AL STORAGE
function sumarStorage(acum){
    if(acum > 0){
        localStorage.setItem('carrito', JSON.stringify(productos));
        carrito = JSON.parse(localStorage.getItem('carrito'));
    }

    if(carrito){
        console.log('if seg');
        carritolleno.style.display = 'inline-block'
        carritovacio.style.display = 'none'

    }else{
        console.log('else seg');
        carritolleno.style.display = 'none'
        carritovacio.style.display = 'inline-block'
    }
    
}

function alertSucces(){
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Articulo sumado al carrito con exito",
        showConfirmButton: false,
        timer: 1500
        });
}


// OBTENER BOTON "AGREGAR AL CARRITO"
const carritoEMP = document.getElementById('carritoEMP')
const carritoSTK = document.getElementById('carritoSTK')
const carritoPOL = document.getElementById('carritoPOL')
const carritoSOUV = document.getElementById('carritoSOUV')
const carritoAG = document.getElementById('carritoAG')
const carritoCAL = document.getElementById('carritoCAL')
const carritoCUMP = document.getElementById('carritoCUMP')


//  -------------- SUMA DE ARTICULOS AL CARRITO --------------
carritoEMP.addEventListener('click', () => setearCantidad('Tarjetas para emprendimientos', acumEMP))
carritoEMP.addEventListener('click', () => {
    if(acumEMP > 0){
        alertSucces();
    }
})
carritoSTK.addEventListener('click', () => setearCantidad('Stickers', acumSTK))
carritoSTK.addEventListener('click', () => {
    if(acumSTK > 0){
        alertSucces();
    }
})
carritoPOL.addEventListener('click', () => setearCantidad('Fotos Polaroid', acumPOL))
carritoPOL.addEventListener('click', () => {
    if(acumPOL > 0){
        alertSucces();
    }
})
carritoSOUV.addEventListener('click', () => setearCantidad('Souvenirs', acumSOUV))
carritoSOUV.addEventListener('click', () => {
    if(acumSOUV > 0){
        alertSucces();
    }
})
carritoAG.addEventListener('click', () => setearCantidad('Agendas', acumAG))
carritoAG.addEventListener('click', () => {
    if(acumAG > 0){
        alertSucces();
    }
})
carritoCAL.addEventListener('click', () => setearCantidad('Calendarios', acumCAL))
carritoCAL.addEventListener('click', () => {
    if(acumCAL > 0){
        alertSucces();
    }
})
carritoCUMP.addEventListener('click', () => setearCantidad('Central de mesa para cumpleaños', acumCUMP))
carritoCUMP.addEventListener('click', () => {
    if(acumCUMP > 0){
        alertSucces();
    }
})

// --------------- AGREGAR CARRITO AL STORAGE ---------------
carritoEMP.addEventListener('click', () => {sumarStorage(acumEMP)} )
carritoSTK.addEventListener('click', () => {sumarStorage(acumSTK)})
carritoPOL.addEventListener('click', () => {sumarStorage(acumPOL)})
carritoSOUV.addEventListener('click', () => {sumarStorage(acumSOUV)})
carritoAG.addEventListener('click', () => {sumarStorage(acumAG)})
carritoCAL.addEventListener('click', () => {sumarStorage(acumCAL)})
carritoCUMP.addEventListener('click', () => {sumarStorage(acumCUMP)})

let imgCarritoVacio = document.getElementById("carritovacio")
let imgCarritoLleno = document.getElementById("carritolleno")





function sumarStorage(acum){
    if(acum > 0){
        localStorage.setItem('carrito', JSON.stringify(productos));
        carrito = JSON.parse(localStorage.getItem('carrito'));
    }

    if(carrito){
        console.log('if seg');
        carritolleno.style.display = 'inline-block'
        carritovacio.style.display = 'none'
        carrito.forEach((item)=>{
            item.cantidad = acum
        })
        
    }else{
        console.log('else seg');
        carritolleno.style.display = 'none'
        carritovacio.style.display = 'inline-block'
    }
    
}
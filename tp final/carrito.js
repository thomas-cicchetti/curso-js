//OBTENER CARRITO DEL STORAGE
let carrito = []
carrito = JSON.parse(localStorage.getItem('carrito'));

//MENSAJE DE CARRITO SIN ARTICULOS SI NO HAY ARTICULOS EN EL CARRITO O EN EL STORAGE
let carritoVacio = document.getElementById('carritoVacio')
let infoCarrito = document.getElementById('infoCarrito')
let imgCarrito = document.getElementById('img-carrito')
let total = 0

//CONDICIONAL PARA MOSTRAR EN EL DOM SI HAY O NO CARRITO
if(carrito){
    carritoVacio.style.display = "none"
    console.log(carritoVacio.style);
    imgCarrito.style.display = 'block'


    carrito.forEach((item)=> {
        if(item.cantidad != 0){
            if(item.nombre == 'Agendas'){
                let articuloEnCarrito = document.createElement('div')
                articuloEnCarrito.innerHTML= `
                <p class="detalle">${item.nombre}  x${item.cantidad} un.</p>`
                infoCarrito.append(articuloEnCarrito)

                let totalItem = (item.precio) * (item.cantidad)
                total = total + totalItem
                
            }else{
                let articuloEnCarrito = document.createElement('div')
                articuloEnCarrito.innerHTML= `
                <p class="detalle">${item.nombre}  x${item.cantidad}  -  (Pack x10 unidades)</p>`
                infoCarrito.append(articuloEnCarrito)

                totalItem = (item.precio) * (item.cantidad)
                total = total + totalItem
            }
            
        }
    })

    let printTotal = document.createElement('div')
    printTotal.innerHTML = `<h3 id='totalprice'> TOTAL: $${total} ARS</h3>`
    infoCarrito.append(printTotal)

    let button = document.createElement('div')
    button.innerHTML = `<button id='vaciar' >Vaciar carrito</button>`
    infoCarrito.append(button)

}

// FUNCION PARA VACIAR EL CARRITO
function vaciarCarrito(){
    localStorage.clear();
    location.reload();
}


function alertSucces(){
    Swal.fire("Pedido enviado correctamente");
    setTimeout(() => {
        console.log("Retrasado por 1 segundo.");
        location.reload()
        },"3000");
    
}

function enviar(){
    localStorage.clear()
}

let buttonSend = document.getElementById('enviar')

buttonSend.addEventListener('click', () => {alertSucces()})
buttonSend.addEventListener('click', () => {enviar()})

let carritolleno = document.getElementById('test')
let carritovacio = document.getElementById('test2')

if(carrito){
    let buttonClear = document.getElementById('vaciar')
    buttonClear.addEventListener('click', () => {vaciarCarrito()})

    carritolleno.style.display = 'inline-block'
    carritovacio.style.display = 'none'

}


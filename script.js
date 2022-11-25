






let productos_JSON;
let vegetales=[];
let arreglo_producto=[];
let productos_carrito = [];
let total_carrito=[];
let monto_carrito=[];
let valor_carrito=[];
let valores = JSON.parse(localStorage.getItem("carrito"));
fetch("productos.json")
    .then(response => response.json())
    .then((datos) => {
        productos_JSON = datos;
        for (let n of datos) {
        vegetales.push(n.nombre);
    }



    for (let x of vegetales) {
        for (let y of productos_JSON) {
            if (y.nombre == x) {
            arreglo_producto.push(y);
            break;
            }
        }
    }




//generar cards de prodctos
    arreglo_producto.forEach((producto) => {
        let elemento = document.createElement("div");
        elemento.className = "productos_venta";
        elemento.innerHTML = `${producto.imagen}
                    <div class="descripcion_producto">
                            <h2>${producto.nombre}</h2>
                            <h3>$${producto.precio}</h3>
                            <p>x KG</p>
                            <div>
                            <input class="cant_input" type="number" value=1>
                            </div>
                            <button class="boton_agregar">agregar</button>
                        </div>`;
        let seccion = document.getElementById("contenedor");
        seccion.append(elemento);
    
        
    });
    agregar_producto();
})



//AGREGAR CARRITO

let precio_carrito = valor_carrito.reduce((a, b) => {
    return a + b;
},0)

function total(x,y){
    return x * y;
}

function chequear_prod(valor) {
    for (let x of productos_carrito) {
    if (x.nombre == valor) {
        return true;
        break;
    }
    }
  }
 

function agregar_producto(){
    let agregar = document.querySelectorAll(".boton_agregar");
   // console.log(agregar)
    for (let boton of agregar) {
    boton.addEventListener("click", agregar_carrito);
    }
}

function agregar_carrito(e){
//console.log(e)
    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

/*
console.log("hijo", hijo);
console.log("padre", padre);
console.log("abuelo",abuelo);
*/

//se arman los productos a agregar en el carrito

    let nombre_producto = padre.querySelector ("h2").textContent;
    let precio_producto = padre.querySelector("h3").textContent;
    let cantidad_producto = parseInt(hijo.parentElement.children[3].children[0].value);
    let imagen_producto = abuelo.querySelector("img").src;
    let precio_conv= precio_producto.slice(1);
    let total_producto =  total(cantidad_producto, precio_conv);
/*
console.log(nombre_producto);
console.log(precio_producto);
console.log(cantidad_producto);
console.log(total_producto);
console.log(imagen_producto);
*/

    productos_carrito = [];
        let producto = {
            nombre: nombre_producto,
            precio: precio_producto,
            img: imagen_producto,
            cantidad: cantidad_producto,
            total: total_producto,
        }
        
       
    
        arreglo_producto.push(producto);

        let producto_JSON = JSON.stringify(arreglo_producto);
       
        localStorage.getItem("arreglo_producto" , producto_JSON);

        let recupero_producto = localStorage.getItem("arreglo_producto");
        recupero_producto = JSON.parse(recupero_producto);
       
        productos_carrito=[];
        mostrar_carrito (producto);
        arreglo_producto.push(producto);


}



//se muestra los productos en el carrito de compras

function mostrar_carrito (producto){
    
    let fila = document.createElement("tr");

    fila.innerHTML =    `<td><img src="${producto.img}"></td>
                        <td>${producto.nombre}</td>
                        <td>${producto.precio}</td>
                        <td>${producto.cantidad}</td>
                        <td>${producto.total}</td>
                        <td><button class="borrar_elemento">Borrar</td>`;

    let tabla = document.getElementById ("tbody");
    tabla.append (fila);

    
    
    
    Toastify({
        text: `Se agregó ${producto.cantidad} kg de ${producto.nombre}` ,
        duration: 3000,
        position:"left",
        gravity: "bottom",
        style:{
            fontSize:"20px",
            fontFamily:"roboto",
            color:"black",
            background:"#D9D18B"
        }
        }).showToast();

    let btn_borrar = document.querySelectorAll(".borrar_elemento");
    for (let boton of btn_borrar){
        boton.addEventListener("click" , borrar_producto)
    } 
}   





//funcion para borrar cada producto
function borrar_producto(e){
    let abuelo = e.target.parentNode.parentNode;
    abuelo.remove();
}


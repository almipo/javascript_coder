
/*
//constantes de los precios
const precio_cebolla = 500;
const precio_papa=200;
const precio_boniato=200;
const precio_tomate=250;
const precio_manzana=300;
const precio_pera=180;
const precio_banana=400;
const precio_mango=800;
const precio_romero=700;
const precio_cilantro=1000;
const precio_perejil=500;
const precio_alabahaca=700;

*/



let arreglo_producto = [];


let btn_agregar = document.querySelectorAll(".boton_agregar");
/*
console.log(btn_agregar);
*/

for(let boton of btn_agregar){

    boton.addEventListener("click" , agregar_carrito )

}

function agregar_carrito(e){

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

/*
    console.log(hijo);
    console.log(padre);
    console.log(abuelo);
*/


    let regex = /(\d+)/g;

    let nombre_producto = padre.querySelector ("h2").textContent;
    let precio_producto = padre.querySelector("p").textContent;
    let cantidad_producto = padre.querySelector("input").value;
    let imagen_producto = abuelo.querySelector("img").src;
    let total_producto = cantidad_producto * precio_producto.match(regex);
    let total_suma ;


    /*
    console.log(nombre_producto);
    console.log(precio_producto);
    console.log(cantidad_producto);
    console.log(total_producto);
    console.log(imagen_producto);
*/

    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        img: imagen_producto,
        cantidad: cantidad_producto,
        total: total_producto,
    }

    

        mostrar_carrito (producto);


    

        arreglo_producto.push(producto);

        let producto_JSON = JSON.stringify(arreglo_producto);
        console.log(producto_JSON);
        localStorage.setItem("arreglo_producto" , producto_JSON);

        let recupero_producto = localStorage.getItem("arreglo_producto");
        recupero_producto = JSON.parse(recupero_producto);
        console.log(recupero_producto);

}




function mostrar_carrito (producto){
    let fila = document.createElement("tr");

    fila.innerHTML =    `<td><img src="${producto.img}"></td>
                        <td>${producto.nombre}</td>
                        <td>${producto.precio}</td>
                        <td>${producto.cantidad}</td>
                        <td>${producto.total}</td>
                        <td><button class="borrar_elemento">Borrar</td>`;

    console.log(fila)
    let tabla = document.getElementById ("tbody");
    tabla.append (fila);


    let btn_borrar = document.querySelectorAll(".borrar_elemento");

    for (let boton of btn_borrar){
        boton.addEventListener("click" , borrar_producto)
    }
}




function borrar_producto(e){
    
    let abuelo = e.target.parentNode.parentNode;
    abuelo.remove();
}




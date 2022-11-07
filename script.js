
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
let total_cebolla=0;
let total_papa=0;
let total_boniato=0;
let total_tomate=0;
let total_manzana=0;
let total_pera=0;
let total_banana=0;
let total_mango=0;
let total_romero=0;
let total_cilantro=0;
let total_perejil=0;
let total_albahaca=0;
let total_verdura=0;
let total_fruta=0;
let total_hierba=0;




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

    console.log(nombre_producto);
    console.log(precio_producto);
    console.log(cantidad_producto);
    console.log(total_producto);
    console.log(imagen_producto);


    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        img: imagen_producto,
        cantidad: cantidad_producto,
        total: total_producto
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



/*
btn_papa.addEventListener("click" , function(){
    let cantidad_papa = document.getElementById("cantidad_papa");
    console.log(cantidad_papa.value)
    total_papa =( precio_cebolla * cantidad_papa.value)+ total_papa;
    console.log("valor: $" , total_papa );
})

btn_boniato.addEventListener("click" , function(){
    let cantidad_boniato = document.getElementById("cantidad_boniato");
    console.log(cantidad_boniato.value)
    total_boniato =( precio_cebolla * cantidad_boniato.value)+ total_boniato;
    console.log("valor: $" , total_boniato );
})

btn_tomate.addEventListener("click" , function(){
    let cantidad_tomate = document.getElementById("cantidad_tomate");
    console.log(cantidad_tomate.value)
    total_tomate =( precio_tomate * cantidad_tomate.value)+ total_tomate;
    console.log("valor: $" , total_tomate );
})

btn_manzana.addEventListener("click" , function(){
    let cantidad_manzana = document.getElementById("cantidad_manzana");
    console.log(cantidad_manzana.value)
    total_manzana =( precio_manzana * cantidad_manzana.value)+ total_manzana;
    console.log("valor: $" , total_manzana );
})
btn_pera.addEventListener("click" , function(){
    let cantidad_pera = document.getElementById("cantidad_pera");
    console.log(cantidad_pera.value)
    total_pera =( precio_pera * cantidad_pera.value)+ total_pera;
    console.log("valor: $" , total_pera );
})
btn_banana.addEventListener("click" , function(){
    let cantidad_banana = document.getElementById("cantidad_banana");
    console.log(cantidad_banana.value)
    total_banana =( precio_banana * cantidad_banana.value)+ total_banana;
    console.log("valor: $" , total_banana );
})
btn_mango.addEventListener("click" , function(){
    let cantidad_mango = document.getElementById("cantidad_mango");
    console.log(cantidad_mango.value)
    total_mango =( precio_mango * cantidad_mango.value)+ total_mango;
    console.log("valor: $" , total_mango );
})
/*
console.log("BIENVENIDO A MAYORISTA MAYOFRUIT");

// aplicando objetos con los locales

let local_uno = {
    direccion:"rolon 641",
    localidad:"vicente lopes",
    cp:2641,
    telefono:45454544,
    horario:"8hs a 20hs"
};


let local_dos = {
    direccion : "cabildo 500",
    localidad: "capital federa", 
    telefono:5555555,
    cp:2415,
    horario:"10hs a 24hs"
};

console.log("puede encontrarnos en nuestro local de provincia de bsas ubicaso en", local_uno.direccion, local_uno.localidad);
console.log("estamos abiertos de lunes a viernes", local_uno.horario);
console.log("o puede contactarnos al telefono:", local_uno.telefono)

console.log("si estas en capital federal....")
console.log("puede encontrarnos en nuestro local de capital federal ubicado en", local_dos.direccion, local_dos.localidad);
console.log("estamos abiertos de lunes a viernes", local_dos.horario);
console.log("o puede contactarnos al telefono:", local_dos.telefono)


//uso de objeto para agregar datos del usuario
class usuario{
    constructor(cliente, direccion, telefono){
    this.cliente = cliente;
    this.direccion = direccion;
    this.telefono = telefono;
    }
        
        saludar(){
            this.cliente=prompt("ingrese su nombre");
            console.log("bienvenido", this.cliente);
            this.direccion=prompt("ingrese la direccion para enviar su pedido");
            console.log("la direccion para enviar su pedido es: ", this.direccion);
            this.telefono=prompt("ingrese un numero de contacto");
            console.log("su telefono de contacto es: ", this.telefono);
        }
};


let usuario_nuevo= new usuario();
usuario_nuevo.saludar();

//lista de productos para pedir
console.log("nuestros productos en stock son");
console.log("VERDURAS")

//lista producto con el agregado de array

let lista_verdura=["cebolla: $500", "papa:$ 200", "boniato: $200", "tomate: $250"];
let lista_verdura_join=lista_verdura.join();
console.log("lista de verdura en stock " , lista_verdura_join);


let lista_fruta=["manzana: $300", "pera: $180", "banana:$400", "mango: $800"];
let lista_fruta_join=lista_fruta.join();
console.log("lista de fruta en stock", lista_fruta_join);


let lista_hierbas=["romero: $700", "cilantro: $1000", "perejil: $500", "albahaca: $700"];
let lista_hierbas_join=lista_hierbas.join();
console.log("lista de hierbas en stock", lista_hierbas_join);

//constantes de los precios
const precio_cebolla= 500;
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


//variables de los productos
let producto;
let cantidad;
let total_cebolla=0;
let total_papa=0;
let total_boniato=0;
let total_tomate=0;
let total_manzana=0;
let total_pera=0;
let total_banana=0;
let total_mango=0;
let total_romero=0;
let total_cilantro=0;
let total_perejil=0;
let total_albahaca=0;
let total_verdura=0;
let total_fruta=0;
let total_hierba=0;
let suma=0;
let total;
let medio_de_pago;
let descuento=0;
let cuenta_final=0;


console.log("su pedido es el siguiente:");


 //ingreso y suma de verduras al pedido
while(producto != "total verdura" ){

    producto=prompt( "ingrese el nombre de la verdura a encargar \n o total verdura"); 
    cantidad= parseInt( prompt("ingrese cantidad de kg que desea, si pidio la cuenta \n 0"));

    if (producto == "cebolla" || producto == "CEBOLLA"){
        console.log("cebolla: ", cantidad , ("kg"));
        total_cebolla =( precio_cebolla * cantidad)+ total_cebolla;
        console.log("valor: $" , total_cebolla );

    }
    
    else if(producto == "papa" || producto=="PAPA"){
        console.log("papa: ", cantidad , ("kg"));
        total_papa = (precio_papa * cantidad)+total_papa;
        console.log("valor: $" , total_papa );
    }
    else if(producto == "boniato"||producto=="BONIATO"){
        console.log("boniato: ", cantidad , ("kg"));
        total_boniato = (precio_boniato * cantidad)+total_boniato;
        console.log("valor: $" , total_boniato , );
    }
    else if(producto == "tomate"||producto=="TOMATE"){
        console.log("tomate: ", cantidad , ("kg"));
        total_tomate = (precio_tomate * cantidad)+total_tomate;
        console.log("valor: $" , total_tomate);
    }
    else if(producto = "total verdura"){
        console.log("el total a abonar de verdura es: $" , total_verdura );

    }

    else{
        console.log("no tenemos esa verdura, ingrese otra")
        }

    total_verdura = total_cebolla + total_papa + total_boniato + total_tomate;

}


//ingreso de frutas al pediod
while(producto != "total fruta"){

    producto=prompt("ingrese el nombre de la fruta a encargar \n o total fruta"); 
    cantidad=parseInt( prompt("ingrese cantidad de kg que desea, si pidio la cuenta \n 0"));

    if (producto == "manzana" || producto == "MANZANA"){
        console.log("manzana: ", cantidad , ("kg"));
        total_manzana =( precio_manzana * cantidad)+total_manzana;
        console.log("valor: $" , total_manzana );
    }
    
    else if(producto == "pera" || producto=="PERA"){
        console.log("pera: ", cantidad , ("kg"));
        total_pera = (precio_pera * cantidad)+total_pera;
        console.log("valor: $" , total_pera);
    }
    else if(producto == "banana"||producto=="BANANA"){
        console.log("banana: ", cantidad , ("kg"));
        total_banana = (precio_banana * cantidad)+total_banana;
        console.log("valor: $" , total_banana);
    }
    else if(producto == "mango"||producto=="MANGO"){
        console.log("mango: ", cantidad , ("kg"));
        total_mango = (precio_mango * cantidad)+total_mango;
        console.log("valor: $" , total_mango);
    }

    else if(producto = "total fruta"){
        console.log("el total a abonar de fruta es: $" , total_fruta);        
    }

    else {
        console.log("no tenemos esa fruta, ingrese otra");
        }

total_fruta = total_manzana + total_pera + total_banana + total_mango;
}

//ingreso de hierbas al pedido
while(producto != "total hierbas"){
    producto=prompt( "ingrese el nombre de hierbas a encargar \n o total hierbas"); 
    cantidad=parseInt( prompt("ingrese cantidad de kg que desea, si pidio la cuenta \n 0"));

    if (producto == "romero" || producto == "ROMERO"){
        console.log("romero: ", cantidad , ("kg"));
        total_romero = (precio_romero * cantidad)+total_romero;
        console.log("valor: $" , total_romero);
    }
    
    else if(producto == "cilantro" || producto=="CILANTRO"){
        console.log("cilantro: ", cantidad , ("kg"));
        total_cilantro = (precio_cilantro * cantidad)+total_cilantro;
        console.log("valor: $" , total_cilantro );
    }

    else if(producto == "perejil"||producto=="PEREJIL"){
        console.log("perejil: ", cantidad , ("kg"));
        total_perejil = (precio_perejil * cantidad)+total_perejil;
        console.log("valor: $" , total_perejil);
    }

    else if(producto == "albahaca"||producto=="ALBAHACA"){
        console.log("albahaca: ", cantidad , ("kg"));
        total_albahaca = (precio_albahaca * cantidad)+total_albahaca;
        console.log("valor: $" , total_albahaca);
    }

    else if(producto="total hierbas"){
        console.log("el total a abonar de hierbas es: $" , total_hierba); 
    }

    else {
        console.log("no tenemos esa hierba, ingrese otra")
        }

    total_hierba = total_romero + total_cilantro + total_perejil + total_albahaca;
}




//valor de la variable suma

    suma= total_verdura + total_fruta + total_hierba;
    console.log("la suma de los productos es: $", suma);


//calculo de medio de pago
function formas_de_pago(medio_de_pago){

    if(medio_de_pago == "tarjeta"){
        total=suma * 1.15;
        console.log("el monto tiene un recargo del 15% por pago con tarjeta");
    }
    else{
        total=suma;
    }
}
medio_de_pago=prompt("quiere pagar con: \n efectivo \n tarjeta(recargo del 15%)");
formas_de_pago(medio_de_pago);

//total pedido
console.log("el total de su pedido a abonar es: $" , total);

//calcular si tiene descuento
function calcular_descuento(total){
    if(total>= 10000){
        descuento = total * 0.1;
        
    }
    else{
        descuento=0
    }
    return descuento
}
calcular_descuento(total);


//total con descuento


function total_a_pagar(total, descuento){
    if(descuento > 0){
        cuenta_final = total - descuento;
        console.log("por superar los $10000, tiene un descuento del 10%, su total seria: $", cuenta_final);    
    }
    else{
        console.log("usted no supera los $10000, si su compra es mayor a $10000 optinene descuento del 10%, el monto queda en:", total);
    }
}
total_a_pagar(total, descuento);
*/







console.log("BIENVENIDO A MAYORISTA MAYOFRUIT");

//funcion de bienvenida

function saludar_usuario(){


    let cliente=prompt("ingrese su usuario");   
    console.log("BIENVENIDO" , cliente);
}
saludar_usuario();

//lista de productos para pedir
console.log("nuestros productos en stock son");
console.log("VERDURAS")
console.log("cebolla: $500");
console.log("papa: $200");
console.log("boniato: $200");
console.log("tomate: $250");

console.log("FRUTA")
console.log("manzana: $300");
console.log("pera: $180");
console.log("banana: $400");
console.log("mango: $800");

console.log("HIERBAS")
console.log("romero: $ 700");
console.log("cilantro: $1000");
console.log("perejil: $500");
console.log("albahaca: $700");

console.log("Seleccione los productos a encargar");

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
let total=0;
let medio_de_pago;
let descuento;


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


}
total_fruta = total_manzana + total_pera + total_banana + total_mango;


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

//calculo de medio de pago
medio_de_pago=prompt("quiere pagar con: \n efectivo \n tarjeta");
if(medio_de_pago == "tarjeta"){
    total= suma * 1.15;
}
else{
    total=suma;
}



//total pedido
console.log("el total de su pedido a abonar es: $" , total);

//calcular si tiene descuento
function calcular_descuento(total){

    if(total>= 10000){
  descuento = total * 0.1;
    return descuento;
    
}
else{
    descuento=0
}
}


//total con descuento

let total_con_descuento = total - calcular_descuento(total);

if(descuento > 0){
console.log("por superar los $10000, tiene un descuento del 10%, su total seria: $", total_con_descuento);
}
else{
    console.log("usted no supera los $10000,con su compra mayor a $10000 optinene descuento del 10%");
}



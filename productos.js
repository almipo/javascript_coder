class Productos {
        constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        }
    }

let cebolla = new productos ("CEBOLLA", 500,  '<img scr="./img/cebolla.png" alt="imagen de cebolla">' );
let papa = new productos("PAPA", 200, '<img src="./img/papa.png" alt="imagen de papa">'  );
let boniato = new productos ("BONIATO", 200, '<img src="./img/boniato.png" alt="imagen de boniato">' );
let tomate = new productos ("TOMATE", 250, '<img src="./img/tomate.png" alt="imagen de tomate">'  );
let banana = new productos ("BANANA", 400, '<img src="./img/banana.png" alt="imagen de banana">' );
let mango = new productos ("MANGO", 800, '<img src="./img/mango.png" alt="imagen de mango">' );
let romero = new productos ("ROMERO", 700, '<img src="./img/romero.png" alt="imagen de romero">' );
let cilantro = new productos ("CILANTRO", 1000, '<img src="./img/cilantro.png" alt="imagen de cilantro">' );
let perejil = new productos ("PEREJIL", 500, '<img src="./img/perejil.png" alt="imagen de perejil">' );
let albahaca = new productos ("ALBAHACA", 700, '<img src="./img/albahaca.png" alt="imagen de albahaca">' );

let productos = [
    cebolla,
    papa,
    boniato,
    tomate,
    banana,
    mango,
    romero,
    cilantro,
    perejil,
    albahaca
];
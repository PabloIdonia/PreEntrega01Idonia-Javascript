const productos = [ 

    {
        id: "placa-01",
        titulo:"Placa 01",
        imagen: "./images/placa.jpg",
        categoria:{
            nombre: "Tarjetas Graficas",
            id: "placas",
        },
        precio: 2000,
    },
    {
        id: "placa-02",
        titulo:"Placa 02",
        imagen: "./images/placa.jpg",
        categoria:{
            nombre: "Tarjetas Graficas",
            id: "placas",
        },
        precio: 2000,
    },
    {
        id: "placa-03",
        titulo:"Placa 03",
        imagen: "./images/placa.jpg",
        categoria:{
            nombre: "Tarjetas Graficas",
            id: "placas",
        },
        precio: 2000,
    },
    {
        id: "placa-04",
        titulo:"Placa 04",
        imagen: "./images/placa.jpg",
        categoria:{
            nombre: "Tarjetas Graficas",
            id: "placas",
        },
        precio: 2000,
    },
    {
        id: "mother-01",
        titulo:"Mother 01",
        imagen: "./images/motherboard.jpeg",
        categoria:{
            nombre: "mothers",
            id: "mothers",
        },
        precio: 2000,
    },
    {
        id: "mother-02",
        titulo:"Mother 02",
        imagen: "./images/motherboard.jpeg",
        categoria:{
            nombre: "mothers",
            id: "mothers",
        },
        precio: 2000,
    },
    {
        id: "mother-03",
        titulo:"Mother 03",
        imagen: "./images/motherboard.jpeg",
        categoria:{
            nombre: "mothers",
            id: "mothers",
        },
        precio: 2000,
    },
    {
        id: "mother-04",
        titulo:"Mother 04",
        imagen: "./images/motherboard.jpeg",
        categoria:{
            nombre: "mothers",
            id: "mothers",
        },
        precio: 2000,
    },
    {
        id: "procesador-01",
        titulo:"Procesador 01",
        imagen: "./images/procesador.jpg",
        categoria:{
            nombre: "Procesador",
            id: "proce",
        },
        precio: 2000,
    },
    {
        id: "procesador-02",
        titulo:"Procesador 02",
        imagen: "./images/procesador.jpg",
        categoria:{
            nombre: "Procesador",
            id: "proce",
        },
        precio: 2000,
    },
    {
        id: "procesador-03",
        titulo:"Procesador 03",
        imagen: "./images/procesador.jpg",
        categoria:{
            nombre: "Procesador",
            id: "proce",
        },
        precio: 2000,
    },
    {
        id: "procesador-04",
        titulo:"Procesador 04",
        imagen: "./images/procesador.jpg",
        categoria:{
            nombre: "Procesador",
            id: "proce",
        },
        precio: 2000,
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = " ";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
                <img class="producto-imagen" src="${(producto.imagen)}" alt="${(producto.titulo)}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${(producto.titulo)}</h3>
                    <p class="producto-precio">$${(producto.precio)}</p>
                    <button class="producto-agregar" id="${(producto.id)}">Agregar</button>
                </div>
        `;
        contenedorProductos.append(div);
    })
}

cargarProductos(productos);

botonesCategorias.forEach (boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active") );
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
        } else {
            cargarProductos(productos);
        }
    });
});

const carrito = [];

const productos = [
    {id:123, title:"Set Coreano", price: 220022},
    {id:456, title:"Set Japonese", price: 220022},
    {id:789, title:"Set Patagonico", price: 220022},
];
/*
let cards = "";
productos.forEach((producto)=>{
  const idButton = "btn-agregar"+producto.id
  cards += "<div class ='card d-flex col-4'> <h2>"+producto.title+"</h2> <button id=' "+idButton" ' >Agregar al carrito</button></div>"
  document.getElementById(idButton).onclick = () =>{}
})

document.write(cards);
document.getElementById("seccion-cards").innerHTML = cards;
*/



let cards = "";
/*
productos.forEach((producto)=>{
  
  //cards += "<div class ='card d-flex col-4'> <h2>"+producto.title+"</h2> <button onclick='agregarAlCarrito()' >Agregar al carrito</button></div>" con Back STICKKSS

  cards+= ` <div class ='card d-flex col-4'>  //quitando este Acumulador
  <h2>${producto.title}</h2>
  <button onclick='agregarAlCarrito("${producto.title}")' >Agregar al carrito</button></div>
  `
})
function agregarAlCarrito(tituloProducto) {
    alert ("agregaste "+tituloProducto);
}


document.getElementById("seccion-cards").innerHTML = cards;    */

productos.forEach((producto)=>{
    document.getElementById("seccion-cards").innerHTML += ` <div class ='card d-flex col-4'> 
    <h2>${producto.title}</h2>
    <button onclick='agregarAlCarrito("${producto.title}")' >Agregar al carrito</button></div>
    `
})
function agregarAlCarrito(tituloProducto) {
    alert ("agregaste "+tituloProducto);
}
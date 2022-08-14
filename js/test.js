const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto)=> acumulador + producto.price, 0) ;
document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;
  

/*
const elementosCarrito = JSON.parse(localStorage.getItem("carrito"));
const carrito = elementosCarrito;
  punto de quiebre */
const producto = [
    {   id:753, 
        title:"Set Coreano",
        img: "http://1.bp.blogspot.com/-EAOYwjl8Zp4/U0WWhNYaQ4I/AAAAAAAACeA/sH4mffUzAlQ/s1600/fellini.png",
        price: 220.022,
        category: "living"
        //item:"ORO"
    },
    
    {    id:456,
         title:"Set Japonese",
         img: "http://1.bp.blogspot.com/-EAOYwjl8Zp4/U0WWhNYaQ4I/AAAAAAAACeA/sH4mffUzAlQ/s1600/fellini.png",
         price: 1500,
         category:"comedor"
    },
    {    id:789,
         title:"Set Patagonico",
         img: "http://1.bp.blogspot.com/-EAOYwjl8Zp4/U0WWhNYaQ4I/AAAAAAAACeA/sH4mffUzAlQ/s1600/fellini.png",
         price: 2500,
         category : "comercio"
   
    },
    
];
//NOTA, SI MODIFICO LOS ARRAIS DE PRODUCTO, SE ROMPE EL DOM DE ABAJO. NÓTESE.



producto.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById("seccion-cards").innerHTML += ` <div class="card">
    <div class="precio">
    <p>$${producto.price}</p>
    </div>
    <img src="${producto.img}">
    <h4>${producto.title}</h4>
    <a class="boton" id="${idButton}" data-id="${producto.id}">Añadir Al Carrito</a>
</div>`;
  })  //PORQUE SE ME ROMPE EL DOM MALDITA SEA





  //otro for.each 


//version2
producto.forEach((producto) => {
  const idButton = `add-cart${producto.id}`
  document.getElementById(idButton).addEventListener('click',() => {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
    document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;
    Swal.fire({
      title: 'Agregaste al carrito',
      text: 'Seguí comprando!',
      icon: 'success',
      confirmButtonText: ' Seguir comprando'
  })
  })
});

document.getElementById(idButton).addEventListener('click',() => {

  Swal.fire({
      title: 'Error!',
      text: 'Error inesperado',
      icon: 'error',
      confirmButtonText: ' =( '
  })
})





/*
Swal.fire({
  title: 'Agregado!',
  text: '¿Seguir Mirando?',
  icon: 'success',
  confirmButtonText: 'Cool'
}) */



/*
const utensilio = [
    {  nombresuli:"Set Ruso"  
       id:754, 
       item:"ORO"
       origen:"black"
        //item:"ORO"
    },
    
    {    nombresuli:"Set Uganda"
         id:457,
         item:"PLATA"
         origen:"white"
    }
];

document.getElementById("seccion-utensilio").innerHTML += ` <div class="card">
    <div class="precio">
    <h1>$${utensilio.nombresuli}</h1>
    </div>
    <p> "${utensilio.id}">
    <h4>${utensilio.origen}</h4>
    <a class="boton" id="${idButton}" data-id="${utensilio.id}">Añadir Al Carrito</a>
</div>`;

*/












/*Toastify({
  text: "This is a toast",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){} // Callback after click
}).showToast();

*/


/*     version1 
  <div class="card">
  <div class="precio">
      <p>$1500</p>
  </div>
  <img src="../JavaScript Coder/Imagenes/picaDiablo1.jpg">
  <h4>Picador Cogonaut Diablo</h4>
  <p>Picador simil cogonaut diablo | Colores a eleccion</p>
  <a class="boton" onClick="agregarAlCarrito('Picador Diablo')" href="#">Añadir Al Carrito</a>
</div>
*/

/*
  producto.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).addEventListener('click',() => {
      carrito.push(producto);
      document.getElementById("cart-total").innerHTML = carrito.length + Number(totalCarrito);
      console.log(carrito);
      localStorage.setItem("totalCarrito", carrito.length)
    })
  });
*/

 /* //console.log(producto);
        const nodo = event.target;
        const idProducto = nodo.getAttribute("data-id")
        const indiceProducto = productos.findIndex(producto => producto.id == idProducto); //== o parseint
        //const producto = productos[indiceProducto];
        //carrito.push(producto);
        //console.log(carrito);
*/

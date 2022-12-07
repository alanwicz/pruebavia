let allTrips = [];

/*fetch("JS/trips.json")
.then(res => res.json())
.then(data => {
    data.forEach(e => {
        allTrips.push(e)
    });
    showTrips(allTrips)
})*/

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://viaggio.up.railway.app/api/v1/accommodations", requestOptions)
  .then(response => response.text())
  .then(result => {
    const datos =(JSON.parse(result))
   const datos2 = (datos.data.accommodations)
   console.log(datos2)
   datos2.forEach(e => {
    allTrips.push(e)
});
showTrips(allTrips)
  })
 
  .catch(error => console.log('error', error));


const cardContainer = document.querySelector(".card-container")



// Mostrar viajes

const showTrips = (miArray) => {
    cardContainer.innerHTML = "";

    miArray.forEach(el => {
        let cardDiv = document.createElement("div")
        cardDiv.className = "card-box";
        cardDiv.innerHTML = 

        `	
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css">
          <link rel="stylesheet" href="Front/Recursos/Cards/css/style.css">
          
          <div id="viajes-search" class="filtro container " style="
          padding-top: 10px;
          padding-bottom: 10px;
      ">
            <div style="justify-content: center "class="row">
              <div class="col-sm-9 col-md-9 ">
                <div class="hotel-card bg-white rounded-lg shadow overflow-hidden d-block d-lg-flex">
                  <div class="hotel-card_images">
                    <div id="bootstrapCarousel" class="carousel slide h-100" data-ride="carousel">
                      <div class="carousel-inner h-100">
                        <div class="carousel-item h-100 active">
                          <img src="Front/Recursos/Cards/hotel1.jpg" class="d-block w-100" alt="Hotel Image">
                        </div>
                        <div class="carousel-item h-100">
                          <img src="Front/Recursos/Cards/hotel2.jpg" class="d-block w-100" alt="Hotel Image">
                        </div>
                        <div class="carousel-item h-100">
                          <img src="Front/Recursos/Cards/hotel3.jpg" class="d-block w-100" alt="Hotel Image">
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#bootstrapCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#bootstrapCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                  <div class="hotel-card_info p-4">
                    <div class="d-flex align-items-center mb-2">
                    <div "class="text-muted mb-2"><i class="fas fa-map-marker-alt"></i> ${el.city}, ${el.country}
                    <h5 class="mb-0 mr-2">${el.title}</h5>
                    </div>

                      
                      <a href="#!" class="text-dark ml-auto"><i class="far fa-heart fa-lg"></i></a>
                      
                    </div>
                    <div class="d-flex justify-content-between align-items-end">
                      <div class="hotel-card_details">
                      
                        <div class="mb-2"><span class="badge badge-primary">${el.rating}</span> <a href="#!" class="text-muted">(${el.reviews.length} reviews)</a></div>
                        <div class="amnities d-flex mb-3">
                          <img class="mr-2" src="Front/Recursos/Cards/icons/desk-bell.svg" data-toggle="tooltip" data-placement="top" title="Desk bell" alt="Desk bell">
                          <img class="mr-2" src="Front/Recursos/Cards/icons/single-bed.svg" data-toggle="tooltip" data-placement="top" title="Single Bed" alt="Single Bed">
                          <img class="mr-2" src="Front/Recursos/Cards/icons/towels.svg" data-toggle="tooltip" data-placement="top" title="Towels" alt="Towels">
                          <img class="mr-2" src="Front/Recursos/Cards/icons/wifi.svg" data-toggle="tooltip" data-placement="top" title="Wifi" alt="Wifi">
                        </div>
                        <ul class="hotel-checklist pl-0 mb-0">
                          <li><i class="fa fa-check text-success"></i> ${el.reviews[0].content}</li>
                        </ul>
                      </div>
                      <div class="hotel-card_pricing text-center">
                        <h3>$ ${el.price}</h3>
                        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary opne-modal"  data-open="modal1">
  Ver Disponibilidad
</button>    
      <!--Inicio Modal-->
      <div class="modal" id="modal1" data-animation="slideInOutLeft" style="/* RESET RULES 
–––––––––––––––––––––––––––––––––––––––––––––––––– */
:root {
  --lightgray: #efefef;
  --blue: steelblue;
  --white: #fff;
  --black: rgba(0, 0, 0, 0.8);
  --bounceEasing: cubic-bezier(0.51, 0.92, 0.24, 1.15);
}

* {
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  font-size: inherit;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font: 16px/1.5 sans-serif;
}

.btn-group {
  text-align: center;
}

.open-modal {
  font-weight: bold;
  background: var(--blue);
  color: var(--white);
  padding: 0.75rem 1.75rem;
  margin-bottom: 1rem;
  border-radius: 5px;
}


/* MODAL
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: var(--black);
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: all 0.35s ease-in;
}

.modal.is-visible {
  visibility: visible;
  opacity: 1;
}

.modal-dialog {
  position: relative;
  max-width: 800px;
  max-height: 80vh;
  border-radius: 5px;
  background: var(--white);
  overflow: auto;
  cursor: default;
}

.modal-dialog > * {
  padding: 1rem;
}

.modal-header,
.modal-footer {
  background: var(--lightgray);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-header .close-modal {
  font-size: 1.5rem;
}

.modal p + p {
  margin-top: 1rem;
}


/* ANIMATIONS
–––––––––––––––––––––––––––––––––––––––––––––––––– */
[data-animation] .modal-dialog {
  opacity: 0;
  transition: all 0.5s var(--bounceEasing);
}

[data-animation].is-visible .modal-dialog {
  opacity: 1;
  transition-delay: 0.2s;
}

[data-animation="slideInOutDown"] .modal-dialog {
  transform: translateY(100%);
}

[data-animation="slideInOutTop"] .modal-dialog {
  transform: translateY(-100%);
}

[data-animation="slideInOutLeft"] .modal-dialog {
  transform: translateX(-100%);
}

[data-animation="slideInOutRight"] .modal-dialog {
  transform: translateX(100%);
}

[data-animation="zoomInOut"] .modal-dialog {
  transform: scale(0.2);
}

[data-animation="rotateInOutDown"] .modal-dialog {
  transform-origin: top left;
  transform: rotate(-1turn);
}

[data-animation="mixInAnimations"].is-visible .modal-dialog {
  animation: mixInAnimations 2s 0.2s linear forwards;
}

[data-animation="slideInOutDown"].is-visible .modal-dialog,
[data-animation="slideInOutTop"].is-visible .modal-dialog,
[data-animation="slideInOutLeft"].is-visible .modal-dialog,
[data-animation="slideInOutRight"].is-visible .modal-dialog,
[data-animation="zoomInOut"].is-visible .modal-dialog,
[data-animation="rotateInOutDown"].is-visible .modal-dialog {
  transform: none;
}

@keyframes mixInAnimations {
  0% {
    transform: translateX(-100%);
  }

  10% {
    transform: translateX(0);
  }

  20% {
    transform: rotate(20deg);
  }

  30% {
    transform: rotate(-20deg);
  }

  40% {
    transform: rotate(15deg);
  }

  50% {
    transform: rotate(-15deg);
  }

  60% {
    transform: rotate(10deg);
  }

  70% {
    transform: rotate(-10deg);
  }

  80% {
    transform: rotate(5deg);
  }

  90% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(0deg);
  }
}


/* FOOTER
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.page-footer {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

.page-footer span {
  color: #e31b23;
}">
  <div class="modal-dialog">
    <header class="modal-header">
      The header of the first modal
      <button class="close-modal" aria-label="close modal" data-close>
        ✕  
      </button>
    </header>
    <section class="modal-content">
      <p><strong>Press ✕, ESC, or click outside of the modal to close it</strong></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellendus reprehenderit accusamus totam ratione! Nesciunt, nemo dolorum recusandae ad ex nam similique dolorem ab perspiciatis qui. Facere, dignissimos. Nemo, ea.</p>
      <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure</p>
      <p>Nullam vitae enim vel diam elementum tincidunt a eget metus. Curabitur finibus vestibulum rutrum. Vestibulum semper tellus vitae tortor condimentum porta. Sed id ex arcu. Vestibulum eleifend tortor non purus porta dapibus</p>
      <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure</p>
    </section>
    <footer class="modal-footer">
      The footer of the first modal
    </footer>
  </div>
</div>
      <!--Fin Modal-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
     
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
        <script>
          $(function () {
            $('[data-toggle="tooltip"]').tooltip()
          })
        </script>
        `
        
    cardContainer.appendChild(cardDiv);

    })

};

//Modal
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});


//Buscador

document.addEventListener("keydown", e=>{

  if (e.target.matches("#search")){

      if (e.key === "Backspace"){destino.classList.add("filtro")};

      document.querySelectorAll("#viajes-search").forEach(destino =>{

          destino.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?destino.classList.remove("filtro")
            :destino.classList.add("filtro")
      }) 
           
  }
})
  
 

//Info para carrito de compras
/*
    // BOTON CARRITO

      let btnAdd = document.getElementById(`agregar${el.id}`)
      btnAdd.addEventListener("click", () => {
        addToCart(el.id);
      });

    });
};*/

// AGREGAR AL CARRITO

const addToCart = (id) => {
  let add = cartShop.find(e => e.id == id);
  if(add) {
    add.cantidad++
    document.getElementById(`und${agrego.id}`).innerHTML = `<p id = und${agrego.id}>Und:${agrego.cantidad}</p>`
    refreshCart();
  } else {
    let addTrip = allTrips.find(e => e.id == id);
    addTrip.cantidad = 1;
    cartShop.push(addTrip);
    refreshCart();
    showTrips(addTrip);
  }
}




// ACTUALIZAR CARRITO

const refreshCart = () => {
  cartCounter.innerText = [...cartShop].reduce((acc, el) => acc + el.cantidad, 0);
  totalPrice.innerText = [...cartShop].reduce((acc, el) => acc + (el.price * el.cantidad), 0);
}



//Info para carrito de compras


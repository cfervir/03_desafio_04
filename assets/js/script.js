let vivienda = [
  {
    id: 0,
    nombre: "Casa de campo",
    descripcion: "Un lugar ideal para descansar de la cuidad",
    src: "assets/images/01.jpg",
    cuartos: 2,
    metros: 170
  },
  {
    id: 1,
    nombre: "Casa de playa",
    descripcion: "Despierta tus días oyendo el oceano",
    src: "assets/images/02.jpg",
    cuartos: 2,
    metros: 130
  },
  {
    id: 2,
    nombre: "Casa en el centro",
    descripcion: "Ten cerca de ti todo lo que necesitas",
    src: "assets/images/03.jpg",
    cuartos: 1,
    metros: 80
  },
  {
    id: 3,
    nombre: "Casa rodante",
    descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "assets/images/04.jpg",
    cuartos: 1,
    metros: 6
  },
  {
    id: 4,
    nombre: "Departamento",
    descripcion: "Desde las alturas todo se ve mejor",
    src: "assets/images/05.jpg",
    cuartos: 3,
    metros: 200
  },
  {
    id: 5,
    nombre: "Mansión",
    descripcion: "Vive una vida lujosa en la mansión de tus sueños",
    src: "assets/images/06.jpg",
    cuartos: 5,
    metros: 500
  }
];

let datosViviendas = '';
const contenedorViviendas = document.querySelector("#viviendas");

for (let viviendas of vivienda) {
  datosViviendas += `
    <div class="propiedades container--flex container--propiedad">
      <img class="propiedades__img" src="${viviendas.src}">
      <section class="propiedades__box">
        <h3 class="propiedades__title">${viviendas.nombre}</h3>
        <div class="container--flex propiedades__dato">
          <p class="propiedades__dato-interior">Cuartos: ${viviendas.cuartos}</p>
          <p class="propiedades__dato-interior">Metros: ${viviendas.metros}</p>
        </div>
        <p class="propiedades__detalle">${viviendas.descripcion}</p>
        <button class="btn btn--propiedad">Ver más</button>
      </section>
    </div>
  `;
};

contenedorViviendas.innerHTML = datosViviendas;
document.getElementById("resultadoBuscador").textContent = `${vivienda.length}`;

const nuevaBusqueda = document.getElementById('buscarViviendas');
nuevaBusqueda.addEventListener('click', buscarViviendas);

function buscarViviendas() {

  let numeroCuartos = parseInt(document.getElementById('numeroCuartos').value);
  let desdeM2 = parseInt(document.getElementById('desdeM2').value);
  let hastaM2 = parseInt(document.getElementById('hastaM2').value);
  let contenidoFiltrado = '';

  if ((isNaN(numeroCuartos) || numeroCuartos === 0) || (isNaN(desdeM2) || desdeM2 === 0) || (isNaN(hastaM2) || hastaM2 === 0)) {
    alert('¡Ingresa valores válidos!');
  } else if (desdeM2 > hastaM2) {
    alert('Revisa los M2. Desde debe ser igual o menor que hasta.');
  } else {
    let filtradoCuartos = vivienda.filter(function(viviendaUnica) {
      return viviendaUnica.cuartos === numeroCuartos && viviendaUnica.metros >= desdeM2 && viviendaUnica.metros <= hastaM2;
    });

    for (let viviendasFiltradas of filtradoCuartos) {
      contenidoFiltrado += `
        <div class="propiedades container--flex container--propiedad">
          <img class="propiedades__img" src="${viviendasFiltradas.src}">
          <section class="propiedades__box">
            <h3 class="propiedades__title">${viviendasFiltradas.nombre}</h3>
            <div class="container--flex propiedades__dato">
              <p class="propiedades__dato-interior">Cuartos: ${viviendasFiltradas.cuartos}</p>
              <p class="propiedades__dato-interior">Metros: ${viviendasFiltradas.metros}</p>
            </div>
            <p class="propiedades__detalle">${viviendasFiltradas.descripcion}</p>
            <button class="btn btn--propiedad">Ver más</button>
          </section>
        </div>
      `;
    };

    document.getElementById("resultadoBuscador").textContent = `${filtradoCuartos.length}`;
    contenedorViviendas.innerHTML = contenidoFiltrado;

  };

};
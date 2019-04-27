//Funcion para obtener la altura del div y asi poder posicionar los elementos mediante porcentajes
function height(element) {
  const elements = document.querySelectorAll(element);
  const height = document.querySelector(element).clientWidth;
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.height = height + "px";
  }
}

//Funcion toggle
function toggle(element, ClassName) {
  this.element = document.querySelector(element);
  this.ClassName = ClassName;
  this.element.classList.toggle(this.ClassName);
}

//Funcion para agregar Clase a un elemento
function addClass(element, ClassName) {
  this.element = document.querySelector(element);
  this.ClassName = ClassName;
  this.element.classList.add(this.ClassName);
}

//Funcion para remover Clase a un elemento
function removeClass(element, ClassName) {
  this.element = document.querySelector(element);
  this.ClassName = ClassName;
  this.element.classList.remove(this.ClassName);
}

//Funcion para agregar o quitar el display block a un elemento
function addRemoveDisplay(element, prop) {
  this.element = document.querySelector(element);
  this.prop = prop;
  this.element.style.display = this.prop;
}

//Funcion para el evento click de los iconos
function animation(id1, id2, id3) {
  this.id1 = document.getElementById(id1);
  this.id2 = document.getElementById(id2);
  this.id3 = document.getElementById(id3);

  //evento click para icono lupa
  this.id1.addEventListener("click", () => {
    //agregar clases
    addClass("#axis", "rotate-search-top");
    addClass("#axis1", "rotate-home-bottom");
    addClass(".home-img", "rotate-icon-home");
    addClass(".search-img", "end-search-top");
    addClass(".content-api", "content-api-animation");
    //remover clasess

    //agregar display block
    addRemoveDisplay("#title-search", "block");
    addRemoveDisplay("#body-search", "block");
    addRemoveDisplay(".icon-search", "block");

    //remover display block
    addRemoveDisplay("#title-home", "none");
    addRemoveDisplay("#body-home", "none");
    addRemoveDisplay(".icon-home", "none");
    addRemoveDisplay(".circles", "none");
  });

  //evento click para icono casa
  this.id2.addEventListener("click", () => {
    //agregar clases
    addClass(".rotate-search-top", "rotate-search-bottom");
    addClass(".rotate-home-bottom", "rotate-home-reverse");
    addClass(".search-img", "end-search-bottom");
    addClass(".content-api", "content-api-animation");
    addClass(".home-img", "rotate-icon-home-reverse");
    //remover clasess
    removeClass(".home-img", "rotate-icon-home");
    //agregar display block
    addRemoveDisplay(".circles", "block");
    addRemoveDisplay("#title-home", "block");
    addRemoveDisplay("#body-home", "block");
    addRemoveDisplay(".icon-home", "block");

    //remover display block
    addRemoveDisplay("#title-search", "none");
    addRemoveDisplay("#body-search", "none");
    addRemoveDisplay(".icon-search", "none");
  });
  this.id3.addEventListener("click", () => {
    removeClass("#axis", "rotate-search-top");
    removeClass("#axis1", "rotate-home-bottom");
    removeClass(".home-img", "rotate-icon-home");
    removeClass(".search-img", "end-search-top");
    removeClass(".content-api", "content-api-animation");
    removeClass("#axis", "rotate-search-bottom");
    removeClass("#axis1", "rotate-home-reverse");
    removeClass(".search-img", "end-search-bottom");
    removeClass(".content-api", "content-api-animation");
    removeClass(".home-img", "rotate-icon-home-reverse");

    addRemoveDisplay("#title-home", "none");
    addRemoveDisplay("#body-home", "none");
    addRemoveDisplay(".icon-home", "none");
    addRemoveDisplay(".circles", "none");
    addRemoveDisplay("#title-search", "none");
    addRemoveDisplay("#body-search", "none");
    addRemoveDisplay(".icon-search", "none");
  });
}

//Funcion para agregar y visualizar los Endpoints
async function Api(uri, title, body) {
  this.uri = uri;
  const response = await fetch(this.uri);
  const data = await response.json();
  this.title = document.getElementById(title);
  this.title.textContent = data.title;
  this.body = document.getElementById(body);
  this.body.textContent = data.body;
}

//funcion para cargar todas las funciones

function funtions() {
  //Activando funcion para obtener Alturas de los divs
  height(".axis");
  height(".container-animation");
  //Evento para redimensionar los divs
  window.addEventListener("resize", () => {
    height(".axis");
    height(".container-animation");
  });
  // Activando funcion animacion
  animation("search", "home", "phone");
  //Activando funcion para obtener y mostrar las API
  Api(
    "https://jsonplaceholder.typicode.com/posts/1",
    "title-search",
    "body-search"
  );
  Api(
    "https://jsonplaceholder.typicode.com/posts/2",
    "title-home",
    "body-home"
  );
}
//Evento para renderizar las funciones al cargar el DOM

document.addEventListener("DOMContentLoaded", funtions);

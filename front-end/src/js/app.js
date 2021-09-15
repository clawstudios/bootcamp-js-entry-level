/**
 * En este archivo debes agregar tus funciones para realizar los ejecricios
 * del Bootcamp.
 * =========
 * Recuerda:
 * =========
 * Siempre que tengas dudas, primero investiga e intenta resolverlo solo,
 * pero si te encuentras bloqueado, no dudes en pedir ayuda.
 *
 */ 
const showLoader = () =>{
  let loader = document.createElement('div');
  loader.className = 'loader';
  loader.innerHTML = '<div class="lds-ripple"><div></div><div></div></div>';
  document.body.prepend(loader);
}
const hideLoader = () => {
  document.getElementsByClassName('loader')[0].remove();
}
const fondoTrans = () => {
  let fondo = document.createElement('div')
  fondo.className = 'fondo.trans'
  fondo.innerHTML = '<div class="fondo-trans"></div>'
  document.body.prepend(fondo);
}
const fondoClean = () => {
  document.getElementsByClassName('fondo.trans')[0].remove();
}

 const getGames = async () => {
    let respuestaAPI = await fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key": "ecec6fb34amsh3f55e059d5eca57p14aee7jsn256e8e8bd65b",
        },
      }
    );
    let body = await respuestaAPI.json();
    hideLoader()
    return body;
    
  };
  const listGames = async (page) => {
    let games = await getGames();
    let gamesConteo = games.length;
    let gamesXPage = 9;
    let gamesPage = gamesXPage * page;
    let maxPages = Math.ceil(games.length / gamesXPage);
    console.log(maxPages)

    document.getElementById('gamer-grid').innerHTML="";
    
    for (let i = (page - 1) * gamesXPage; i < gamesPage ; i++) {
      let item = document.createElement("div");
      item.className = "col-md-6 col-lg-4 mb-5";
      item.innerHTML = `<div class="game-list-item mx-auto">
              <div class="game-header">
                  <h5>${games[i].title}</h5> 
              </div>
              <img class="img-fluid" src="${games[i].thumbnail}" alt="..." />
              <p class="game-item-description">${games[i].short_description}</p>
              <ul class="inline-list">
                  <li><span class="badge badge-primary bg-badge">${games[i].genre}</span></li>
                  <li><span class="badge badge-primary bg-badge">${games[i].platform}</span></li>
                  <li><span class="badge badge-primary bg-badge">${games[i].publisher}</span></li>
                  <li><span class="badge badge-primary bg-badge">${games[i].developer}</span></li>
              </ul>
              <a class="nav-link check-it-out-btn" href="${games[i].game_url}">Check it out!</a>
          </div>`;
      document.getElementById("gamer-grid").appendChild(item);
    }
  };
  
 const generatePagination = (maxPages, gamesXPage) => { 
    for(let i = 0; i < maxPages; i++){
      let item = document.createElement('li')
      item.className = 'page-item';
      item.innerHTML = `<a href="#">${i + 1}</a>`;
      document.getElementById("pagination-id").appendChild(item);
    }   
  };
//Buscador
  const resultado = document.querySelector('#resultado')
  const formulario = document.querySelector('#inputSearch');
  const boton = document.querySelector('#boton');
  const filtrar = () => {
      resultado.innerHTML = ''

      const texto = formulario.value.toLowerCase()
      
      for(let producto of productos){
          let nombre = getGames.tittle.toLowerCase();
          if(nombre.indexOf(texto) !== -1){
              resultado.innerHTML += `<li>${getGames.tittle}</li>`
          }
      }
      if(resultado.innerHTML === ''){
          resultado.innerHTML += `<li>Juego no encontrado</li>`
      }
  }
  boton.addEventListener('click', filtrar)
  formulario.addEventListener('keyup', filtrar)
  filtrar();
 
//Buscador
//Variables
/* 
bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("cover_ctn_search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box_search");

//Filtrado de busqueda
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);
const buscador_interno = () => {

  filter = inputSearch.value.toUpperCase();
  li = box_search.getElementsByTagName("li");
  
//Recorriendo elementos al filtrar
  for (i = 0; i < li.length; i++){
    a = li[i].getElementsByTagName("a")[0];
    textValue = a.textContent || a.innerText;
    if(textValue.toUpperCase().indexOf(filter) > -1){
      li[i].style.display = "";
      box_search.style.display = "block";

      if (inputSearch.value ===  ""){
        box_search.style.display = "none"
      }
      
    }else{
      li[i].style.display = "none";
    }
  }


};
*/

listGames(1).then(()=>{
  generatePagination(20);
})

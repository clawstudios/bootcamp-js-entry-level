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
  showLoader();
  let games = await getGames();
  let gamesCount = 0;
  let filtrado = [];
  for (let i = 0; i<games.length; i++){
    if (games[i].title.toLowerCase().includes(txtSearch.toLocaleLowerCase()) || 
        games[i].thumbnail.toLowerCase().includes(txtSearch.toLocaleLowerCase()) ||
        games[i].short_description.toLowerCase().includes(txtSearch.toLocaleLowerCase()) || 
        games[i].genre.toLowerCase().includes(txtSearch.toLocaleLowerCase()) || 
        games[i].platform.toLowerCase().includes(txtSearch.toLocaleLowerCase()) ||
        games[i].publisher.toLowerCase().includes(txtSearch.toLocaleLowerCase()) ||
        games[i].developer.toLowerCase().includes(txtSearch.toLocaleLowerCase()) )
        {
          gamesCount = gamesCount + 1;
          filtrado.push(games[i]);
        }
  }
  let gamesConteo = filtrado.length;
  let gamesXPage = 9;
  let gamesPage = gamesXPage * page;
  let maxPages = Math.ceil(filtrado.length / gamesXPage);
  console.log(maxPages)

  document.getElementById('gamer-grid').innerHTML="";
  gamesPage = gamesPage > gamesConteo ? gamesConteo: gamesPage;
  for (let i = (page - 1) * gamesXPage; i < gamesPage ; i++) {
      let item = document.createElement("div");
        item.className = "col-md-6 col-lg-4 mb-5";
        item.innerHTML = `<div class="game-list-item mx-auto">
             <div class="game-header">
                <h5>${filtrado[i].title}</h5> 
              </div>
              <img class="img-fluid" src="${filtrado[i].thumbnail}" alt="..." />
              <p class="game-item-description">${filtrado[i].short_description}</p>
              <ul class="inline-list">
                  <li><span class="badge badge-primary bg-badge">${filtrado[i].genre}</span></li>
                  <li><span class="badge badge-primary bg-badge">${filtrado[i].platform}</span></li>
                  <li><span class="badge badge-primary bg-badge">${filtrado[i].publisher}</span></li>
                  <li><span class="badge badge-primary bg-badge">${filtrado[i].developer}</span></li>
              </ul>
              <a class="nav-link check-it-out-btn" href="${filtrado[i].game_url}">Check it out!</a>
          </div>`;
      document.getElementById("gamer-grid").appendChild(item);
    

  }
  maxPages = Math.ceil(gamesCount / 9);
  console.log(gamesCount);
  generatePagination(maxPages, gamesXPage, page)
};
  
const generatePagination = (maxPages, gamesXPage, actualPage) => {
  let maxPagesPagintation = 10;
  let minPage = 1
  let maxPage = maxPages
  if(maxPage > 10)
  {
    if (actualPage > (maxPages - 5))
    {
      minPage = maxPages - 9;
      maxPage = maxPages
    }
    else {
      if (actualPage < 6){
        minPage = 1
        maxPage = 10
      }else{
        minPage = (actualPage - 5);
        maxPage = (actualPage + 4);
      }
    }
  }

  document.getElementById("pagination-id").innerHTML = "";
  for(let i = minPage; i < (maxPage + 1); i++){
    let item = document.createElement('li')
    item.className = 'page-item';
    if ((i) == actualPage)
    {
      console.log(i);
      console.log(actualPage);
      item.innerHTML = `<a class="btn btn-secondary" href="#" onclick="listGames(${i})">${i}</a>`;
    }
    else
    {
      item.innerHTML = `<a href="#" onclick="listGames(${i})">${i}</a>`;
    }
    document.getElementById("pagination-id").appendChild(item);
  }   
};

let txtSearch = "";

const buscar = () => {
  txtSearch = document.getElementById("txtBuscar").value;
  listGames(1);
}

listGames(1);
/**
 * En este archivo debe crearse una pequeña aplicación con ExpressJs
 * ExpressJs ya se encuentra instalado.
 * 
 * Revisar como crear un Hello World con ExpressJs
 * https://expressjs.com/es/starter/hello-world.html
 */
//poner 3 botones con las plataformas con bad
const juegosPorPagina = 15;
let filter ="";  
let currentPage = 1;
let  page=1;
const  crearLoader = () => {
    let loader = document.createElement('div');
    loader.id = 'loader';
    loader.className = 'lds-ring loader ';
    loader.innerHTML = '<div></div><div></div>div></div>div></div></div>'
    document.getElementById('loader').appendChild(loader);
};
const borrarLoader = () => {
  document.getElementsByClassName('lds-ring loader')[0].remove();
};
const getGames = async (filter) => {
    crearLoader();
    let respuestaAPI = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': 'ecec6fb34amsh3f55e059d5eca57p14aee7jsn256e8e8bd65b'
        }
    });
    let body = await respuestaAPI.json();
    borrarLoader();
    //este es el filtro y esta seteado por las funciones de abajo 
    if (filter) { // en este caso se interpreta true si filter tiene algo distinto de undefined,null,0,"".
        body = body.filter( juego => juego.platform === filter )
    }
    return body;
};

const createFilter = async () => {
    let juegos = await getGames();
    let categoriasFilter = [];
    document.getElementById('categorias').innerHTML="";

    const categoriasJuegos = juegos.map( el => el.platform );

    for (let j = 0; j < categoriasJuegos.length; j++) {
        const categoria = categoriasJuegos[j];
        if (!categoriasFilter.includes(categoria)) {
            categoriasFilter.push(categoria);
        }
    }

    item = document.createElement('button');
    item.type = "button";
    item.onclick = () => {
        filter = "";
        getJuegos();
    }
    item.innerHTML = `<a href="#" class="badge badge-dark">todos</a>`;
    document.getElementById('categorias').appendChild(item);
    for (let i = 0; i < categoriasFilter.length; i++) {
        const categoria = categoriasFilter[i];
        item = document.createElement('button');
        item.type = "button";
        item.onclick = () => {
            filter = categoria;
            getJuegos();
        }
        //item.className= 'badge badge-pill badge-warning';
        item.innerHTML = `<a href="#" class="badge badge-dark">${categoria}</a>`;
        document.getElementById('categorias').appendChild(item);
    }
};
const getJuegos = async () => {
    //if (!filtro) { //en este caso da verdadero porque undefined,null,0,"" = se interpreta false, al negarse se interpreta true y entra al if 
       const filtro = filter
   // }
    let juegos = await getGames(filtro);
    let cantidadJuegos = juegos.length;
    let end = juegosPorPagina * page;
    let cantidadPaginas = Math.ceil(cantidadJuegos/juegosPorPagina);
    let start = (page - 1) * juegosPorPagina;
    document.getElementById('prueba-juego').innerHTML="";
    for (let i = start; i < end; i++) {
        let item = document.createElement('div');
        item.className = 'col-md-6 col-lg-4 mb-5';
        item.innerHTML = `<div class="game-list-item mx-auto">
            <div class="game-header">
                <h5>${juegos[i].title}</h5>
            </div>
            <img class="img-fluid" src="${juegos[i].thumbnail}" alt="..." />
            <p class="game-item-description">${juegos[i].short_description}</p>
            <ul class="inline-list">
                <li><span class="badge badge-primary bg-badge">${juegos[i].genre}</span></li>
                <li><span class="badge badge-primary bg-badge">${juegos[i].platform}</span></li>
                <li><span class="badge badge-primary bg-badge">${juegos[i].publisher}</span></li>
                <li><span class="badge badge-primary bg-badge">${juegos[i].developer}</span></li>
            </ul>
            <a class="nav-link check-it-out-btn" href="${juegos[i].game_url}">Check it out!</a>
        </div>`;
        document.getElementById('prueba-juego').appendChild(item);
    }
    createFilter();
    generarPaginacion(cantidadPaginas);
};
const generarPaginacion = (totalPaginas) => {
    let previousBtn = document.createElement('li')
   previousBtn.className = 'page-item';
    document.getElementById('pagination-grid').innerHTML="";
    if (page === 1){ previousBtn.innerHTML = `<a class="page-link" href="#"><</a></li>`;}
    else{ previousBtn.innerHTML = `<a onclick="navigatePrevious()" class="page-link" href="#"><</a></li>`;}
    document.getElementById('pagination-grid').appendChild(previousBtn);

    for (let i = 0; i < totalPaginas; i++) {
        let item = document.createElement('li')
        item.className = 'page-item';
        item.innerHTML = `<a onclick="navigateToPage(${i+1})" class="page-link" href="#">${i+1}</a></li>`;
        document.getElementById('pagination-grid').appendChild(item);
    }
    let nextPage = page +1 ;
    let nextBtn = document.createElement('li')
    nextBtn.className = 'page-item';
    if (nextPage >= totalPaginas ) { `<a " class="page-link" href="#" >></a></li>`}
    else{nextBtn.innerHTML = `<a onclick="navigateNext() " class="page-link" href="#">></a></li>`;}
    document.getElementById('pagination-grid').appendChild(nextBtn);
    
  
};
const navigateToPage = (newPage) => {
    page = newPage;
    getJuegos();
};
const navigatePrevious =() => {
    page = page-1;
    getJuegos();
};
const navigateNext = () => {
   page = page+1;
   getJuegos();
};
const botonFiltro =  async () => {
    let arrayJuegos = await getGames();
    let busqUsr = document.getElementById('buscarJuego1').value;
    let result = arrayJuegos.filter((juego) => {
       return juego.title.toLowerCase().includes(busqUsr.toLowerCase()); 
    });
    console.log('prueba1',result);
    document.getElementById('buscarJuego1').value="";
    if (result.length < 1) {
        //falta agregar alert
        window.alert('no existe el juego');
    }else{
        document.getElementById('prueba-juego').innerHTML="";
        for (let i = 0; i < result.length; i++) {
            let NuevaCreacion = document.createElement('div');
            NuevaCreacion.className = 'col-md-6 col-lg-4 mb-5';
            NuevaCreacion.innerHTML = `
            <div class="game-list-item mx-auto">
            <div class="game-header">
            <h5>${result[i].title}</h5>
            </div>
            <img class="img-fluid" src="${result[i].thumbnail}" alt="..." />
            <p class="game-item-description">${result[i].short_description}</p>
            <ul class="inline-list">
            <li><span class="badge badge-primary bg-badge">${result[i].genre}</span></li>
            <li><span class="badge badge-primary bg-badge">${result[i].platform}</span></li>
            <li><span class="badge badge-primary bg-badge">${result[i].publisher}</span></li>
            <li><span class="badge badge-primary bg-badge">${result[i].developer}</span></li>
            </ul>
            <a class="nav-link check-it-out-btn" href="${result[i].game_url}">Check it out!</a>
            </div>
            `;document.getElementById('prueba-juego').appendChild(NuevaCreacion);
        }
    }
};
getJuegos();

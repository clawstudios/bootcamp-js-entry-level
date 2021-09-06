/**
 * En este archivo debe crearse una pequeña aplicación con ExpressJs
 * ExpressJs ya se encuentra instalado.
 * 
 * Revisar como crear un Hello World con ExpressJs
 * https://expressjs.com/es/starter/hello-world.html
 */
const getGames = async () => {
    let respuestaAPI = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': 'ecec6fb34amsh3f55e059d5eca57p14aee7jsn256e8e8bd65b'
        }
    });
    let body = await respuestaAPI.json();
    return body;
};
console.log(getGames());

const getJuegos = async () => {
    let Juegos = await getGames();
    this.document.getElementById("loader").classList.toggle("loader2");
    for (let i = 0; i < Juegos.length; i++) {
        let item = document.createElement('div');
        item.className = 'col-md-6 col-lg-4 mb-5';
        item.innerHTML = `<div class="game-list-item mx-auto">
            <div class="game-header">
                <h5>${Juegos[i].title}</h5>
            </div>
            <img class="img-fluid" src="${Juegos[i].thumbnail}" alt="..." />
            <p class="game-item-description">${Juegos[i].short_description}</p>
            <ul class="inline-list">
                <li><span class="badge badge-primary bg-badge">${Juegos[i].genre}</span></li>
                <li><span class="badge badge-primary bg-badge">${Juegos[i].platform}</span></li>
                <li><span class="badge badge-primary bg-badge">${Juegos[i].publisher}</span></li>
                <li><span class="badge badge-primary bg-badge">${Juegos[i].developer}</span></li>
            </ul>
            <a class="nav-link check-it-out-btn" href="${Juegos[i].game_url}">Check it out!</a>
        </div>`;
        document.getElementById('prueba-juego').appendChild(item);

    }
};
getJuegos();
////window.addEventListener("load",getJuegos() {
    
  // this.document.getElementById("loader").classList.toggle("loader2")
//});
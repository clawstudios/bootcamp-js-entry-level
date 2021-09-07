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
    return body;
  };
  const getJuegos = async () => {
    let Juegos = await getGames();
    for (let i = 0; i < Juegos.length; i++) {
      let max = juegos[i];
    }
  };
  const listGames = async () => {
    let games = await getGames();
    for (let i = 0; i < games.length; i++) {
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
      document.getElementById("game-grid").appendChild(item);
    }
  };
  listGames();
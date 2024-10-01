//https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json

import Champion from './champion.js';

var championsList = [];

// Seleccionamos el elemento button del DOM usando querySelector 
const button = document.querySelector("button");
// Agregamos un event listener al botón para que se mantenga a la espera de hacer click en él
// Cuando se recibe el click, se ejecuta la función flecha
button.addEventListener("click", () => {
    // Al hacer click sobre el botón, cambiamos su visibilidad y lo ocultamos
    document.querySelector('#button').style.visibility = 'hidden';
    // También cambiamos la visibilidad del elemento #champions, y lo mostramos en pantalla
    document.querySelector('#champions').style.visibility = 'visible';
    // LLamada a la función getChampions() que comenzará el proceso de mostrar los Pokemon
    getChampions();
});

// Función asíncrona que va a realizar operaciones con promesas para realizar la llamada a la API
const getChampions = async () => {
        // Utilizamos fetch para hacer una solicitud a la API donde i representa el número de Pokemon
        await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json")
            .then(function(result) {
                return result.json();
            }).then(function(result) {
                for (let championData in result.data){
                    let data = result.data[championData];
                    let champion = new Champion(data);
                    pushChampions(champion);
                }
            });

    // Una vez que todos los championse han añadido al array, llamamos a la función showChampions
    await showChampions();
};

// Esta función añade el championque se le pasa como parámetro al array
function pushChampions(champion) {
    championsList.push(champion);
}

// Esta función se encarga de mostrar en el DOM los championque se han obtenido y almacenado en el array 
const showChampions = async () => {
    // Se obtiene una referencia al elemento con el ID champions en el DOM donde se insertarán las tarjetas de los Pokemon.
    const champions = document.getElementById("champions");
    // Iteramos sobre cada elemento del array championsList
   for(var i = 0; i < championsList.length; i++) {
        var aux =  0;
      
        // Para cada Pokemon, se crea una tarjeta con imágenes (vista frontal y trasera), el nombre y los tipos
        // Esta estructura HTML se añade dinámicamente al contenedor champions
        champions.innerHTML +=    `<div class="card">
                                    <img src="${championsList[i].img}">
                                    <div class="types">
                                    ${championsList[i].name}
                                    </div>
                                    <div class="types">
                                    ${championsList[i].version}
                                    </div>
                                    <div class="types">
                                    ${championsList[i].title} 
                                    </div>
                                    <div class="types">
                                    ${championsList[i].description}
                                    </div>
                                    <div class="types">
                                    ${championsList[i].info}
                                    </div>
                                </div>`

                            
    }
}


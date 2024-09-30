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
            }).then(foreach ($champion in result.data)) {
                const champion = new Champion(data);
                console.log(champion);
                pushChampions(champion);
                //Guardamos el resultado en data y creamos una nueva instancia de championcon los datos obtenidos
                // almacenamos los resultados en el array
               // console.log(champion);
            }

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
        while (aux != championsList[i].pkm_type.length) {
            if (aux == 0)
                var tipo1 = championsList[i].pkm_type[aux].type.name;                       
            if (aux == 1)   
                var tipo2 = championsList[i].pkm_type[aux].type.name;
            else 
                tipo2 = "";          
            aux++; 
        }


        
        


        // Para cada Pokemon, se crea una tarjeta con imágenes (vista frontal y trasera), el nombre y los tipos
        // Esta estructura HTML se añade dinámicamente al contenedor champions
        champions.innerHTML +=    `<div class="card">
                                    <img src="${championsList[i].pkm_back}">
                                    <img class="front" src="${championsList[i].pkm_front}"><br>
                                    ${championsList[i].id}. ${championsList[i].name}<br>
                                    <div class="types">
                                        ${tipo1} ${tipo2}
                                    </div>
                                    <div class="weight">
                                    ${championsList[i].pkm_weight / 10} kg
                                    </div>
                                    <div class="stats">
                                    ${championsList[i].pkm_hp}
                                    </div>
                                </div>`

                            
    }
}


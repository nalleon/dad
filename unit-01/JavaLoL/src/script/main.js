import Champion from './champion.js';

var championsList = [];

const button = document.querySelector("button");
const championListHtml = document.querySelectorAll(".card");
let championsLts
let championsDisplayed = [];
button.addEventListener("click", () => {

    document.querySelector('#button').style.visibility = 'hidden';
    document.querySelector('#champions').style.visibility = 'visible';
    getChampions();
});

const getChampions = async () => {
        await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json")
            .then(function(result) {
                return result.json();
            }).then(function(result) {
                for (let championData in result.data){
                    let data = result.data[championData];
                    let champion = new Champion(data);
                    champion.setImg(`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${data.id}.png`);
                    pushChampions(champion);
                }
            });

    await showChampions();
};

function pushChampions(champion) {
    championsList.push(champion);
}

const showChampions = async () => {
const champions = document.getElementById("champions");
   for(var i = 0; i < championsList.length; i++) {
      
        champions.innerHTML +=`<div class="card">
                                    <img src="${championsList[i].img}" id="img">
                                    <div class="info">
                                        <h2>${championsList[i].name}</h2>
                                        <div class="title">
                                            <h3> ${championsList[i].title} </h3>
                                        </div>
                                        <div class="description">
                                            ${championsList[i].description}
                                        </div>    
                                        <div class="version">
                                            ${championsList[i].version}
                                        </div>
                                    </div>
                                </div>`

                            
    }


}
/**
 *  <div class="description">
                                        ${championsList[i].description}
                                        </div>
 */


championListHtml.addEventListener('click', addChampionToDisplayed(evt));

// show another image when click over the current image
function eventImg(evt) {
    var target = evt.target;
    var champion = championsList.find(champion => champion.name === target.parentElement.querySelector('.info h2').innerText);
   // document.getElementById('img').src=`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.png`;
    champion.setImg(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.png`);
}

// function to add to an array wich champions has been displayed to keep the icons colored

function addChampionToDisplayed(champion) {
    // check if champion has already been displayed
    if (!championsListHtml.some(el => el.querySelector('.info h2').innerText === champion.name)) {
        championsListHtml.forEach(championElement => {
            if (championElement.querySelector('.info h2').innerText === champion.name) {
                championElement.classList.add('displayed');
            }
        });
    }
}
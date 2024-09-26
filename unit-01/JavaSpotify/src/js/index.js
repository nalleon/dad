import songs from '../assets/songs/*.mp3';
import player from './player.js';

console.log(Object.keys(songs));
const map = {};

let aux = 1;

for (var [key] in Object.keys(songs)) {
    map[`.item${aux}`] = songs[key];
    aux++;
}
 console.log(map);



player = new Player(map);

console.log(player);




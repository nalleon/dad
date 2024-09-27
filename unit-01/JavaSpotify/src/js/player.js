import Song, {play_song} from './song.js';

export default class Player{
    constructor(map){
        Object.entries(map);
        
        let aux = 1;
        for (var [key, value] of Object.entries(map)) {
            let keySong=key;
            let valueSong=value;
            let song = new Song(keySong, valueSong);
        
            play_song(song);

            aux++;
        }
    }
}
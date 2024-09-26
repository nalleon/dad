import Song, {play_song} from './song.js';

export default class Player{
    constructor(map){
        Object.keys(map);
        let aux = 1;
        let keySong;
        let valueSong;
        for (var [key, value] in Object.keys(maps)) {
            keySong = key;
            valueSong=value;
            let song = new Song(keySong, valueSong);

            play_song(song);

        }
        //this.map = map;
    }
}
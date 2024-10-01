export default class Champion {
    constructor(data) {
        this.name = data.name;                       
        this.version = data.version;                             
        this.title = data.title;   
        this.description = data.blurb;   
        this.info = data.info;                   
        //this.img = data.image.full;               
        this.tags = data.tags; 
    }

}
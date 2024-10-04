export default class Champion {
    constructor(data) {
        this.id = data.id;
        this.name = (data.name).toUpperCase();                       
        this.version = data.version;                             
        this.title = (data.title).toUpperCase();   
        this.description = (data.blurb).toUpperCase();   
        this.info = data.info;                   
        this.img = data.image.full;               
        this.tags = data.tags; 
    }

    setImg(splashUrl) {
        this.img = splashUrl;
    }

    setAnotherImg(splashUrl) {
        this.img = splashUrl;
    }

    
}
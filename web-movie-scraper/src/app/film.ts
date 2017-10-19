export class Film {

    public id : number;
    public title : string;
    public overview : string;
    public releaseDate : string;
    public image : string;
    
    constructor ( id?, title?, overview?, releaseDate?, image? )
    {
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.releaseDate = releaseDate;
        this.image = image;
    }

}
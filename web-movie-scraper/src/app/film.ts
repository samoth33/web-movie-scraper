export class Film {

    private id : number;
    private title : string;
    private overview : string;
    private releaseDate : string;
    private image : string;
    
    constructor ( id?, title?, overview?, releaseDate?, image? )
    {
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.releaseDate = releaseDate;
        this.image = image;
    }

}
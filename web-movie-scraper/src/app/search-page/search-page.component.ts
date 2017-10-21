import { Component, OnInit } from '@angular/core';
import { SearchPageService } from '../search-page-service/search-page.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  title: string;
  listaFilm : Array<any>=[];
  path : Array<string> = [];
  lastKeypress : number  = 0;
  
  constructor(public searchService : SearchPageService)
  { 
    this.title = "";
  }

  ngOnInit() {
  }
  public searchBar($event)
  {
    if($event.timeStamp - this.lastKeypress > 100)
    {
      this.getResult();
    }
    this.lastKeypress = $event.timeStamp;
  }

  public createURL() : string
  {
    let url : string = "https://api.themoviedb.org/3/search/movie?api_key=8d19117f52af20f7e348521d72239732&query=";    
    let temp : string;
    temp = this.title.split(' ').join("+");
    url+=temp;
   return url;
  }

  public getResult()
  {
      this.searchService.searchFilm(this.createURL()).subscribe(
        (data) => {
            this.listaFilm = data.results;
            for(let film of this.listaFilm)
            {
              if(film.poster_path)
                film.poster_path = this.createImgPath(film.poster_path);
              else
                film.poster_path = "http://via.placeholder.com/92x137?text=Not+Found"
            }
        } , (error) => {
          console.error(error);
        }
      );
  }

  public createImgPath(poster:string): string
  {
    if(poster==null || poster=="")
    {
      return "http://via.placeholder.com/92x137?text=Not+Found" 
    }
    let base_url = "https://image.tmdb.org/t/p/";
    let width = "w92";
    console.log(base_url+width+poster);
    return base_url+width+poster;
  }
}

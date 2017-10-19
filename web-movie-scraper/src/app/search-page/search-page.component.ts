import { Component, OnInit } from '@angular/core';
import { SearchPageService } from '../search-page-service/search-page.service';
import { Film } from '../film';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  title: string;
  listaFilm : Array<any>;
  
  constructor(public searchService : SearchPageService)
  { 
    this.title = "";
  }

  ngOnInit() {
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
          console.log("DATA::::",data);
            this.listaFilm = data;
        } , (error) => {
          console.error(error);
        }
      );

     // console.log(this.listaFilm);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  title: string;
  
  constructor() { 
    this.title = "";
  }

  ngOnInit() {
  }

  public createURL()
  {
    let url : string = "https://api.themoviedb.org/3/search/movie?api_key=8d19117f52af20f7e348521d72239732&query=";    
    let temp : string;
    temp = this.title.split(' ').join("+");
    url+=temp;
    console.log(url);
  }

}

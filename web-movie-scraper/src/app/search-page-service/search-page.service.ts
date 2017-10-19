import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../film';


@Injectable()
export class SearchPageService {

  listaFilm : Array<Film>=[];

  constructor(private http: HttpClient)  {  }

  searchFilm(url : string)
  {
    this.http.get(url).subscribe(
      data => {
          this.listaFilm.push(new Film(data));  //COMM S FSC!!!!
      }
    )
  }

}

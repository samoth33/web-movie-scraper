import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../film';


@Injectable()
export class SearchPageService {

  listaFilm : Array<Film>=[];

  constructor(private http: HttpClient)  {  }

  searchFilm(url : string) : any
  {
    return this.http.get(url);
  }

}

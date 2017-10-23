import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SearchPageService {
//Servizio che implementa la richiesta Http al server di tmdb.org
  constructor(private http: HttpClient)  {  }

  //Dato un url completo di query in ingresso restituisce un oggetto di tipo any contenente i risultati
  searchFilm(url : string) : any
  {
    return this.http.get(url);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SearchPageService {

  constructor(private http: HttpClient)  {  }

  searchFilm(url : string) : any
  {
    return this.http.get(url);
  }

}

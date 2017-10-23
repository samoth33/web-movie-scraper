import { Component, OnInit } from '@angular/core';
import { SearchPageService } from '../search-page-service/search-page.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  title: string; //Contenuto della barra di ricerca
  listaFilm : Array<any>=[]; //Lista contenente i risultati della ricerca
  path : Array<string> = []; //Percorso delle immagini
  lastKeypress : number  = 0; //Variabile utilizzata per tenere conto dell'ultimo keypress nella barra di ricerca
  
  constructor(public searchService : SearchPageService)
  { 
    this.title = ""; //Inizializzazione della barra di ricerca
  }

  ngOnInit() {
  }
  //Procedura della ricerca onkeypress
  public searchBar($event)
  {
    if($event.timeStamp - this.lastKeypress > 100) //Ogni tasto premuto dopo 100ms produce una query
    {
      this.getResult();
    }
    this.lastKeypress = $event.timeStamp; //Assegnazione del timestamp del keypress
  }

  //Funzione che crea la query da sottoporre al sito tmdb.org
  public createURL() : string
  {
    //Url contenente il base url + il token delle API
    let url : string = "https://api.themoviedb.org/3/search/movie?api_key=8d19117f52af20f7e348521d72239732&query=";    
    let temp : string;  //Variabile temporanea contenente il titolo inserito nella barra di ricerca
    temp = this.title.split(' ').join("+"); //Sostituzione degli spazi inseriti con i '+'
    url+=temp;
   return url; 
  }

  //Funzione che restituisce i risultati della ricerca
  public getResult()
  {
    //Chiamata alla funzione del SearchPageService
      this.searchService.searchFilm(this.createURL()).subscribe(
        (data) => { //Promise
            this.listaFilm = data.results;
            for(let film of this.listaFilm)
            {//Inizializzazioni dei vari path di immagine tramite createImgPath e createBkdrpPath
              if(film.poster_path)
                film.poster_path = this.createImgPath(film.poster_path);
              else
                film.poster_path = "http://via.placeholder.com/92x137?text=Not+Found"
                
              if(film.backdrop_path)
                film.backdrop_path = this.createBkdrpPath(film.backdrop_path);
              else
                film.backdrop_path = "http://via.placeholder.com/300x169?text=Not+Found"
            }
        } , (error) => { //Caso di errore
          console.error(error);
        }
      );
  }

  //Crea il path necessario alla visualizzazione della immagine 
  public createImgPath(poster:string): string
  {
    if(poster==null || poster=="") //Sostituzione dell'immagine con un placeholder in caso di assenza
    {
      return "http://via.placeholder.com/92x137?text=Not+Found" 
    }
    let base_url = "https://image.tmdb.org/t/p/";
    let width = "w92"; //Dimensioni standard decise da tmdb
    console.log(base_url+width+poster);
    return base_url+width+poster;
  }

  //Crea il path per il backdrop(Versione allungata), come sopra
  public createBkdrpPath(backdrop:string): string
  {
    if(backdrop==null || backdrop=="")
    {
      return "http://via.placeholder.com/300x169?text=Not+Found" 
    }
    let base_url = "https://image.tmdb.org/t/p/";
    let width = "w300";
    console.log(base_url+width+backdrop);
    return base_url+width+backdrop;
  }
}

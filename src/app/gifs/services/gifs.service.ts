import { Gif, SearchGifsResponse } from './../interface/gifs.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  public resultados: Gif[] = [];
  public apiKey:string = 'WGMbMIKNidG43Q2dxFY6tG4Ks3fimmr6&q';


  get historial(): string[] {
    return [...this._historial];
  }


  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    // const params = new HttpParams()
    // .set('api_key', this.apiKey)
    // .set('limit', '10')
    // .set('q', query)
    

    //Peticion API https://developers.giphy.com/docs/api/endpoint#search ----- Se tuvo que importar en el modulo global el httpModule
    this.http.get<SearchGifsResponse>(` https://api.giphy.com/v1/gifs/search?api_key=WGMbMIKNidG43Q2dxFY6tG4Ks3fimmr6&q=${query}&limit=10 `).subscribe((resp) => {
      console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem('resultado', JSON.stringify(this.resultados))
    });
  }


  

  constructor(private http: HttpClient) {

    this._historial = JSON.parse( localStorage.getItem('historial')! ) || [] 

    //Otra manera de hacerlo
    // if( localStorage.getItem('historial') ){
    //   this._historial = JSON.parse( localStorage.getItem('historial')! )

    this.resultados = JSON.parse(localStorage.getItem('resultado')!) || []



    // }


  }
}

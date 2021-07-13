import { GifsService } from './../services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent {

  get resultados(){
    return this.GifsService.resultados
  }
 

  

  constructor( private GifsService :GifsService) { }
}

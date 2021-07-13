import { GifsService } from './../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>


  constructor(private GifsService:GifsService) {

  }


    buscar(){
      const value = this.txtBuscar.nativeElement.value
      
      
      if (value.trim().length === 0){
        return;
      }

      this.GifsService.buscarGifs(value)
      this.txtBuscar.nativeElement.value = '';
    }
 
}

import { GifsService } from './../../gifs/services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  get historial():string[]  {
    return this.GifsService.historial;
  }
  search( termino:string ){
    this.GifsService.buscarGifs( termino )
  }


  constructor(private GifsService:GifsService){
    
    


  }

  

}

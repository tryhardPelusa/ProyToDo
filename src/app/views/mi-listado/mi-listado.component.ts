import { Component, Input } from '@angular/core';
import { ITarea } from 'src/app/shared/interfaces/itarea';
import { BorradoTareaService } from 'src/app/borrado-tarea.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-mi-listado',
  templateUrl: './mi-listado.component.html',
  styleUrls: ['./mi-listado.component.css']
})
export class MiListadoComponent {
  soloPendientes:boolean=false;
  listadoTareas: ITarea[] = [];
  @Input() app:AppComponent|null = null;

  constructor(private borradoTareaService: BorradoTareaService) {
    this.listadoTareas = borradoTareaService.listadoTareas;
    
  }

  mostrarPendientes():void{
    this.soloPendientes = !this.soloPendientes;
  }

  guardarEnLocalStorage(): void {
    localStorage.setItem('listadoTareas', JSON.stringify(this.listadoTareas));
  }
  
}

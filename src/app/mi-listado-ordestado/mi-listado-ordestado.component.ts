import { Component, Input } from '@angular/core';
import { ITarea } from 'src/app/shared/interfaces/itarea';
import { BorradoTareaService } from 'src/app/borrado-tarea.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-mi-listado-ordestado',
  templateUrl: './mi-listado-ordestado.component.html',
  styleUrls: ['./mi-listado-ordestado.component.css']
})
export class MiListadoOrdestadoComponent {
  soloPendientes:boolean=false;
  listadoTareas: ITarea[] = [];
  @Input() app:AppComponent|null = null;

  constructor(private borradoTareaService: BorradoTareaService) {
    this.listadoTareas = borradoTareaService.listadoTareas;
  }

  guardarEnLocalStorage(): void {
    localStorage.setItem('listadoTareas', JSON.stringify(this.listadoTareas));
  }
}

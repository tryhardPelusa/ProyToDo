import { Component, Input } from '@angular/core';
import { ITarea } from 'src/app/shared/interfaces/itarea';
import { BorradoTareaService } from 'src/app/borrado-tarea.service';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  @Input() estaTarea: ITarea;
  @Input() app:AppComponent|null = null;

  constructor(private borradoTareaService: BorradoTareaService) {
    this.estaTarea = { fechaInicio: new Date(), actividad: "", detalles: "", estado: 'pendiente'}
  }

  borrarTarea(): void {
    this.borradoTareaService.eliminarTarea(this.estaTarea);
  }

  modificarTarea(): void{
    console.log("Estamos en el metodo modificarTarea de tarea.ts");
    if (this.app != null) {
      console.log("Estamos en el metodo modificarTarea de tarea.ts. Dentro del if(this.app != null)");
      this.app.modificarTarea(true);
      this.borradoTareaService.cargarAntiguosDatos(this.estaTarea);
    }
  }

  cambiarEstado():void{
    this.borradoTareaService.cambiarEstado(this.estaTarea);
  }
}

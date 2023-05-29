import { Component, Input } from '@angular/core';
import { BorradoTareaService } from 'src/app/borrado-tarea.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-modificar-tarea',
  templateUrl: './modificar-tarea.component.html',
  styleUrls: ['./modificar-tarea.component.css']
})
export class ModificarTareaComponent {
  @Input() app:AppComponent|null = null;
  estaTarea: any;
  fecha: Date = new Date();
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  hora: number = 0;
  minuto: number = 0;

  constructor(private borradoTareaService: BorradoTareaService) {
    this.estaTarea = { fechaInicio: new Date(), actividad: "", detalles: "", estado: 'pendiente' };
  }

  modificarTarea() {
    this.fecha.setDate(this.dia); 
    this.fecha.setMonth(this.mes - 1); 
    this.fecha.setFullYear(this.anio); 
    this.fecha.setHours(this.hora); 
    this.fecha.setMinutes(this.minuto); 

    this.borradoTareaService.modificarTarea(this.fecha.getTime(), this.estaTarea.actividad, this.estaTarea.detalles, this.app);

  }
}

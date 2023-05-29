import { Component } from '@angular/core';
import { BorradoTareaService } from 'src/app/borrado-tarea.service';
import { ITarea } from '../shared/interfaces/itarea';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent {
  estaTarea: ITarea;
  fecha: Date = new Date();
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  hora: number = 0;
  minuto: number = 0;

  constructor(private borradoTareaService: BorradoTareaService) {
    this.estaTarea = { fechaInicio: 0, actividad: "", detalles: "", estado: 'pendiente' };
  }

  agregarTarea() {
    this.fecha = new Date();
    this.fecha.setDate(this.dia); 
    this.fecha.setMonth(this.mes - 1); 
    this.fecha.setFullYear(this.anio); 
    this.fecha.setHours(this.hora); 
    this.fecha.setMinutes(this.minuto); 
    this.borradoTareaService.agregarTarea(this.fecha.getTime(), this.estaTarea.actividad, this.estaTarea.detalles);

    this.estaTarea = { fechaInicio: 0, actividad: "", detalles: "", estado: 'pendiente' };
  }
}

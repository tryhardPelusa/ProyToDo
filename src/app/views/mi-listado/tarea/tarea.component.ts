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
  fechaFormateada: string;
  horaFormateada: string;

  constructor(private borradoTareaService: BorradoTareaService) {
    this.estaTarea = { fechaInicio: 0, actividad: "", detalles: "", estado: 'pendiente'}
    this.fechaFormateada = "";
    this.horaFormateada = '';
  }

  ngOnInit() {
    // Lógica para formatear la fecha y hora
    const fechaInicio = new Date(this.estaTarea.fechaInicio);
    const dia = fechaInicio.getDate();
    const mes = fechaInicio.getMonth() + 1;
    const anio = fechaInicio.getFullYear();
    const horas = fechaInicio.getHours();
    const minutos = fechaInicio.getMinutes();
    const segundos = fechaInicio.getSeconds();
    
    // Formatea la fecha y hora como deseas
    this.fechaFormateada = `${dia}/${mes}/${anio}`;
    this.horaFormateada = `${horas}:${minutos}:${segundos}`;
  }


  borrarTarea(): void {
    this.borradoTareaService.eliminarTarea(this.estaTarea);
  }

  modificarTarea(): void{
    if (this.app != null) {
      this.app.modificarTarea(true);
      this.borradoTareaService.cargarAntiguosDatos(this.estaTarea);
    }
  }

  cambiarEstado():void{
    this.borradoTareaService.cambiarEstado(this.estaTarea);
  }
}

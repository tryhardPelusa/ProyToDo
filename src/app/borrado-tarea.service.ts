import { Injectable, Input } from '@angular/core';
import { ITarea } from 'src/app/shared/interfaces/itarea';
import { AppComponent } from './app.component';
@Injectable({
  providedIn: 'root'
})
export class BorradoTareaService {
  @Input() app:AppComponent|null = null;
  listadoTareas: ITarea[] = [];
  @Input() estaTarea: ITarea;

  constructor() {
    // Carga el listadoTareas desde el localStorage
    const storedListado = localStorage.getItem('listadoTareas');
    if (storedListado) {
      this.listadoTareas = JSON.parse(storedListado);
    }
    this.estaTarea = { fechaInicio: new Date(), actividad: "", detalles: "", estado: 'pendiente' }
  }

  guardarEnLocalStorage(): void {
    localStorage.setItem('listadoTareas', JSON.stringify(this.listadoTareas));
  }

  eliminarTarea(tarea: ITarea): void {
    const indice = this.listadoTareas.indexOf(tarea);
    if (indice !== -1) {
      this.listadoTareas.splice(indice, 1);
      this.guardarEnLocalStorage();
    }
  }

  agregarTarea(fechaInicio: Date, actividad: string, detalles: string): void {
    const nuevaTarea: ITarea = {
      fechaInicio,
      actividad,
      detalles,
      estado: 'pendiente'
    };
    this.listadoTareas.push(nuevaTarea);
    this.guardarEnLocalStorage();
  }

  modificarTarea(fechaInicio: Date, actividad: string, detalles: string, app:any): void {
    const tareaMod: ITarea = {
      fechaInicio,
      actividad,
      detalles,
      estado: 'pendiente'
    };

    const indice = this.listadoTareas.findIndex(i => i == this.estaTarea);
    this.listadoTareas[indice] = tareaMod;
    this.guardarEnLocalStorage();
    console.log("Estas en borrado-tarea.ts");
    if (app != null) {  
      app.estaCambiando = false;
    }

  }

  cargarAntiguosDatos(antiguaTarea: ITarea): void {
    this.estaTarea = antiguaTarea;
  }

  cambiarEstado(tareaActual: ITarea):void{
    const indice = this.listadoTareas.findIndex(i => i == tareaActual);
    if (tareaActual.estado == "pendiente") {
      tareaActual.estado = "realizada";
    } else {
      tareaActual.estado = "pendiente";
    }
    this.listadoTareas[indice] = tareaActual;
    this.guardarEnLocalStorage();
  }
}

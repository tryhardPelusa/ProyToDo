import { Injectable, Input } from '@angular/core';
import { ITarea } from 'src/app/shared/interfaces/itarea';
import { AppComponent } from './app.component';
import { MiListadoComponent } from './views/mi-listado/mi-listado.component';
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
    this.estaTarea = { fechaInicio: 0, actividad: "", detalles: "", estado: 'pendiente' }
  }

  guardarEnLocalStorage(): void {
    localStorage.setItem('listadoTareas', JSON.stringify(this.listadoTareas));
  }

  eliminarTarea(tarea: ITarea): void {
    const indice = this.listadoTareas.indexOf(tarea);
    if (indice !== -1) {
      this.listadoTareas.splice(indice, 1);
      console.log("Eliminar tarea");
      this.guardarEnLocalStorage();
    }
  }

  agregarTarea(fechaInicio: number, actividad: string, detalles: string): void {
    console.log("Servicio");
    console.log(typeof fechaInicio);
    const nuevaTarea: ITarea = {
      fechaInicio,
      actividad,
      detalles,
      estado: 'pendiente'
    };
    this.listadoTareas.push(nuevaTarea);
    console.log("Agregar tarea", nuevaTarea);
    console.log(this.listadoTareas[0]);
    this.ordenarTareasCronologicamente();
    this.guardarEnLocalStorage();
  }

  modificarTarea(fechaInicio: number, actividad: string, detalles: string, app:any): void {
    const tareaMod: ITarea = {
      fechaInicio,
      actividad,
      detalles,
      estado: 'pendiente'
    };

    const indice = this.listadoTareas.findIndex(i => i == this.estaTarea);
    this.listadoTareas[indice] = tareaMod;
    console.log("Modificar tarea");
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
    console.log("cambio de estado");
    this.guardarEnLocalStorage();
  }

  ordenarTareasCronologicamente(): void {
    console.log("metodo sort");
    console.log(this.listadoTareas[0]);
    this.listadoTareas.sort((tarea1:ITarea, tarea2:ITarea) => {
      return tarea1.fechaInicio - tarea2.fechaInicio;
    });
    this.guardarEnLocalStorage();
  }
}

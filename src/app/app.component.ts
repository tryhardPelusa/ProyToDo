import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyToDo';
  docu:boolean=false;
  tiempo:boolean=true;
  estado:boolean=false;
  estaCambiando:boolean=false;

  menu(docu:boolean, tiempo:boolean, estado:boolean):void{
    this.docu=docu;
    this.tiempo=tiempo;
    this.estado=estado;
  }

  modificarTarea(estaCambiando: boolean):void{
    this.estaCambiando=estaCambiando;
  }
}

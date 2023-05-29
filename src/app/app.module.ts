import { NgModule } from '@angular/core';
import { NgStyle } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MiMenuComponent } from './mi-menu/mi-menu.component';
import { MiListadoComponent } from './views/mi-listado/mi-listado.component';
import { TareaComponent } from './views/mi-listado/tarea/tarea.component';
import { AboutComponent } from './about/about.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { ModificarTareaComponent } from './modificar-tarea/modificar-tarea.component';
import { MiListadoOrdestadoComponent } from './mi-listado-ordestado/mi-listado-ordestado.component';

@NgModule({
  declarations: [
    AppComponent,
    MiMenuComponent,
    MiListadoComponent,
    TareaComponent,
    AboutComponent,
    AgregarTareaComponent,
    ModificarTareaComponent,
    MiListadoOrdestadoComponent,
  ],
  imports: [
    BrowserModule, FormsModule, NgStyle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

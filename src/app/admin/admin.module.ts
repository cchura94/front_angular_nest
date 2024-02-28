import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { LayoutComponent } from './layout/layout.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { CategoriaService } from './inventario/services/categoria.service';
import { InventarioModule } from './inventario/inventario.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductoService } from './inventario/services/producto.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { peticionInterceptor } from './interceptors/peticion.interceptor';


@NgModule({
  declarations: [
    PerfilComponent,
    ClienteComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppLayoutModule,
    InventarioModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoriaService,
    ProductoService
    /*{
      provide: HTTP_INTERCEPTORS,
      useClass: peticionInterceptor,
      multi: true
    }*/
  ]
})
export class AdminModule { }

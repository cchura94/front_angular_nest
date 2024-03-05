import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPedidoComponent } from './components/lista-pedido/lista-pedido.component';
import { NuevoPedidoComponent } from './components/nuevo-pedido/nuevo-pedido.component';
import { PrimengModule } from '../../primeng/primeng.module';



@NgModule({
  declarations: [
    ListaPedidoComponent,
    NuevoPedidoComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class PedidoModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrl: './nuevo-pedido.component.scss'
})
export class NuevoPedidoComponent {

  carrito: any[] = [{nombre: 'TECLADO', cantidad: 1, precio: 200}]

}

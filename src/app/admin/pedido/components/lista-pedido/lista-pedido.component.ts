import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrl: './lista-pedido.component.scss',
})
export class ListaPedidoComponent {
  mostrar_pedido: boolean = false;
  detalle_pedido: any;

  pedidos: any[] = [
    {
      id: 3,
      fecha: '2024-01-01',
      cliente: {
        nombre_completo: 'Juan Pablo',
        ci_nit: 658645316,
        telefono: 234535,
      },
      productos: [
        {
          id: 2,
          cantidad: 2,
        },
        {
          id: 5,
          cantidad: 1,
        },
      ],
    },
    {
      id: 4,
      fecha: '2024-01-02',
      cliente: {
        nombre_completo: 'Pedro Garcia',
        ci_nit: 698456312,
        telefono: 52345355,
      },
      productos: [
        {
          id: 5,
          cantidad: 1,
        },
        {
          id: 7,
          cantidad: 2,
        },
        {
          id: 2,
          cantidad: 1,
        },
      ],
    },
  ];

  getPedidos() {}

  showDialogPedido(pedido: any){
    this.mostrar_pedido = true
    this.detalle_pedido = pedido

  }

}

import { Component, inject } from '@angular/core';
import { ProductoService } from '../../../inventario/services/producto.service';
import { ClienteService } from '../../service/cliente.service';
import { PedidoService } from '../../service/pedido.service';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrl: './nuevo-pedido.component.scss',
})
export class NuevoPedidoComponent {
  carrito: any[] = [];

  private productoService = inject(ProductoService);

  private clienteService = inject(ClienteService);
  private pedidoService = inject(PedidoService);

  loading: boolean = false;
  totalRecords!: number;
  buscardor: string = '';
  visible: boolean = false;
  products: any[] = [];
  cols: any[] = [];
  uploadedFiles: any[] = [];
  producto_id: number = -1;

  buscar_cliente: any = ""
  cliente: any = {}
  cliente_seleccionado: any = {}
  visible_nuevoCLiente: boolean = false

  submitted: boolean = false


  constructor() {
    this.listar();
  }

  loadProductos(event: any) {
    // this.loading = true;

    let page = event.first / event.rows + 1;
    this.listar(page, event.rows);

    console.log(page);
  }

  listar(page = 1, limit = 3) {
    this.productoService
      .funListar(page, limit, this.buscardor)
      .subscribe((res: any) => {
        this.products = res.data;
        this.totalRecords = res.total;
        this.loading = false;
      });
  }
  buscar(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.listar();
    } else if (this.buscardor == '') {
      this.listar();
    }
  }

  addcarrito(prod: any) {

    let item = {
      producto_id: prod.id,
      nombre: prod.nombre,
      precio: prod.precio,
      cantidad: 1   
    } 

    this.carrito.push(item);
  }

  quitarCarrito(prod: any){

    const pos = this.carrito.indexOf(prod);
    this.carrito.splice(pos, 1);

  }

  buscarCliente(event: KeyboardEvent){
    if (event.key === 'Enter') {
      this.clienteService.buscarCliente(this.buscar_cliente).subscribe(
        (res: any) => {
          console.log(res);

          this.cliente_seleccionado = res;
        }
      )
    } else if (this.buscar_cliente == '') {
      this.listar();
    }
  }

  nuevoClienteDialog(){
    this.visible_nuevoCLiente = true

  }

  guardarCliente(){

    this.clienteService.funGuardar(this.cliente).subscribe(
      (res:any) => {
        this.cliente_seleccionado = res
        this.visible_nuevoCLiente = false

      }
    )
  }

  generarPedido(){

    const pedido = {
      cliente_id: this.cliente_seleccionado.id,
      productos: this.carrito
    }
    this.pedidoService.funGuardar(pedido).subscribe(
      (res: any) => {
        console.log(res)
      }
    )
  }
}

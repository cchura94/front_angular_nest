import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

  private productoService = inject(ProductoService)

  categorias: any = [
    { name: 'ROPA', code: '1' },
    { name: 'ELECTRONICOS', code: 'RM' },
    { name: 'MUEBLES', code: 'LDN' },
    { name: 'JUGUETES', code: 'IST' },
    { name: 'ELECTRODOMESTICOS', code: 'PRS' }
];

  products: any[] = [
    {id: 1, nombre: "Teclado", precio: 399.98, categoria_id: 5, stock: 12, estado: 1},
    {id: 1, nombre: "Teclado", precio: 399.98, categoria_id: 5, stock: 12, estado: 1},
    {id: 1, nombre: "Teclado", precio: 399.98, categoria_id: 5, stock: 12, estado: 1},
    {id: 1, nombre: "Teclado", precio: 399.98, categoria_id: 5, stock: 12, estado: 1},
    {id: 1, nombre: "Teclado", precio: 399.98, categoria_id: 5, stock: 12, estado: 1},
    {id: 1, nombre: "Teclado", precio: 399.98, categoria_id: 5, stock: 12, estado: 1},
    {id: 1, nombre: "Teclado", precio: 399.98, categoria_id: 5, stock: 12, estado: 1},
    {id: 1, nombre: "Teclado", precio: 399.98, categoria_id: 5, stock: 12, estado: 1},
    {id: 1, nombre: "Teclado", precio: 399.98, categoria_id: 5, stock: 12, estado: 1},
    {id: 1, nombre: "Teclado", precio: 399.98, categoria_id: 5, stock: 12, estado: 1},
    {id: 1, nombre: "Teclado", precio: 399.98, categoria_id: 5, stock: 12, estado: 1},
    {id: 1, nombre: "Teclado", precio: 399.98, categoria_id: 5, stock: 12, estado: 1},
    {id: 1, nombre: "Teclado", precio: 399.98, categoria_id: 5, stock: 12, estado: 1},
    {id: 1, nombre: "Teclado", precio: 399.98, categoria_id: 5, stock: 12, estado: 1},
  ];
  cols: any[] = [];

  constructor(){
    this.productoService.funListar().subscribe(
      (res:any) => {
        this.products = res.data
      }
    )
  }

  openNew(){
  
  }

  editProduct(prod: any){

  }
  deleteProduct(prod: any){

  }
  
}

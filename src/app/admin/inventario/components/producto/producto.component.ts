import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

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

  openNew(){
  
  }

  editProduct(prod: any){

  }
  deleteProduct(prod: any){

  }
  
}

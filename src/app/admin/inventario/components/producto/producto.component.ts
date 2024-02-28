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

  products: any[] = [];
  cols: any[] = [];

  constructor(){
    this.productoService.funListar().subscribe(
      (res:any) => {
        this.products = res.data
      },
      (error: any) => {
        console.log(error);
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

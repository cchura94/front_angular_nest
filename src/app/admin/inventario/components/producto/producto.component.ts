import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { LazyLoadEvent } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

  private productoService = inject(ProductoService)

  loading: boolean = false;
  totalRecords!: number;
  buscardor: string = ''
  visible: boolean = false

  categorias: any = [
    { name: 'ROPA', code: '1' },
    { name: 'ELECTRONICOS', code: 'RM' },
    { name: 'MUEBLES', code: 'LDN' },
    { name: 'JUGUETES', code: 'IST' },
    { name: 'ELECTRODOMESTICOS', code: 'PRS' }
];

  products: any[] = [];
  cols: any[] = [];
  uploadedFiles: any[] = [];
  producto_id: number = -1


  constructor(){
    this.listar()
  }

  loadProductos(event: any){
    
    // this.loading = true;

    let page = (event.first/event.rows) + 1
    this.listar(page, event.rows)

    console.log(page)

  }

  listar(page = 1, limit=3){
    this.productoService.funListar(page, limit, this.buscardor).subscribe(
      (res: any)=> {
        this.products = res.data;
        this.totalRecords = res.total;
        this.loading = false;
      }
    )

  }

  buscar(event: KeyboardEvent){
    if(event.key === 'Enter'){
      this.listar()
    }else if(this.buscardor == ""){
      this.listar()
    }
  }

  openDialogImagen(id: number){
    this.visible = true
    this.producto_id = id
  }

  openNew(){
  
  }

  editProduct(prod: any){

  }
  deleteProduct(prod: any){

  }

  

  subirImagen(event: any) {
    console.log(event.files[0])
    let formData = new FormData();
    formData.append("imagen", event.files[0]) 

    this.productoService.actualizarImagen(formData, this.producto_id).subscribe(
      (res:any) => {
        console.log(res);
        this.visible = false
        this.producto_id = -1
        this.listar();
      }
    )


  }
  
}

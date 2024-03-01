import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { EditorModule } from 'primeng/editor';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';


const PrimeNgModules = [
  ButtonModule,
  PasswordModule,
  TableModule,
  DialogModule,
  InputTextModule,
  ToolbarModule,
  // EditorModule,
  DropdownModule,
  FileUploadModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...PrimeNgModules
  ],
  exports: [
    ...PrimeNgModules
  ],
})
export class PrimengModule {}

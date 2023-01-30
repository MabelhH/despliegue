import {NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistroComponent } from './registro/registro.component';
import {TablaComponent } from './tabla/tabla.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    RegistroComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    RegistroComponent,
    TablaComponent
  ]
})
export class PagesModule { }

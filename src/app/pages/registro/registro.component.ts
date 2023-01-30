import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TiendaService } from 'src/app/servicio/tienda.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  formRegister!:FormGroup;

  constructor(private tienda:TiendaService){
    this.formRegister = new FormGroup({
      codigo:new FormControl(),
      producto: new FormControl(),
      costo: new FormControl(),
     
    })
  }
  
    ngOnInit(): void {
      
    }
      registrar(){
       console.log(this.formRegister.value)
       const response = this.tienda.addProduct(this.formRegister.value)
       console.log(response)
  }
  cancelar(){
    
  }
  
  
  
}


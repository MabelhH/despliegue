import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { tienda } from 'src/app/interfaces/interface';
import { TiendaService } from 'src/app/servicio/tienda.service';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

 tienda!:tienda[];

  constructor(public dialog: MatDialog ,private tiendaservice:TiendaService) {}

  ngOnInit(): void {
    
    this.tiendaservice.getFacrmacia().subscribe(tienda => {
     this.tienda = tienda
    }) 
  }

  openDialog() {
    const dialogRef = this.dialog.open(RegistroComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onClickDelete(tienda:tienda){
    const response = this.tiendaservice.deletedFarmacia(tienda)
    console.log(response)
  }
 
  
  
  
}

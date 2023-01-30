import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc , } from 'firebase/firestore';
import { Observable, Observer } from 'rxjs';
import { tienda } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private firestore:Firestore ) { }

  
  

   addProduct(tienda:tienda){
     const tiendaRef = collection(this.firestore, 'tienda');
   return addDoc(tiendaRef, tienda)    
   }
   

  getFacrmacia():Observable<tienda[]>{
    const farmaciaRef = collection(this.firestore, 'tienda');
    return collectionData(farmaciaRef, {idField:'id'}) as Observable<tienda[]>
  }


  deletedFarmacia(tienda:tienda){
     const farmaciaRef = doc(this.firestore, `tienda/${tienda.id}`)
     return deleteDoc(farmaciaRef);
   }

   
   
  
 
}

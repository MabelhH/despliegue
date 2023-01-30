import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc } from 'firebase/firestore';
import { Observable, Observer } from 'rxjs';
import { tienda } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private firestore:Firestore ) { }

  
  

   addProduct(tienda:tienda){
     const farmaciaRef = collection(this.firestore, 'tienda');
   return addDoc(farmaciaRef, tienda)    
   }


  getFacrmacia():Observable<tienda[]>{
    const farmaciaRef = collection(this.firestore, 'tienda');
    return collectionData(farmaciaRef, {idField:'id'}) as Observable<tienda[]>
  }


  deletedFarmacia(farmacia:tienda){
     const farmaciaRef = doc(this.firestore, `tienda/${farmacia.id}`)
     return deleteDoc(farmaciaRef);
   }
  // editarfarmacia(farmacia:farmacia){
     
  // }
  // getlista(){
  //   return signOut(this.auth);
  // } 
 
}

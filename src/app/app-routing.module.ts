import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { TablaComponent } from './pages/tabla/tabla.component';

const routes: Routes = [
  {path:'reguistro',component:RegistroComponent},
  {path:'tabla',component:TablaComponent},
  {path:'',redirectTo:'/tabla',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {CreateComponent} from './product/create/create.component';


const routes: Routes = [
  {path: '', component : ProductListComponent},
  {path: '/create', component : CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

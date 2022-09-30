import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UpdateComponent} from "./update/update.component";
import {ProductComponent} from "./product/product.component";


const routes: Routes = [
  {path: '',component:ProductComponent},
  {path: ':id',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

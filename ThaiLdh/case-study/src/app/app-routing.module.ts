import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './customer/list/list.component';
import {AddComponent} from './customer/add/add.component';
import {EditComponent} from './customer/edit/edit.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', component: ListComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarComponent} from "./car/car.component";
import {UpdateComponent} from "./update/update.component";


const routes: Routes = [
  {path: '', component: CarComponent},
  {path: 'edit/:id', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

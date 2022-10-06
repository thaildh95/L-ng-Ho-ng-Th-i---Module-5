import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {TestComponent} from './test/test.component';
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CarComponent } from './car/car.component';
import { EditComponent } from './edit/edit.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CarComponent,
    EditComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      tapToDismiss: true
    }),
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

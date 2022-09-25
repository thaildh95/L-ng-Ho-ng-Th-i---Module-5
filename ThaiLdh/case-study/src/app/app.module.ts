import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './home/nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './customer/list/list.component';
import { NgSComponent } from './home/ng-s/ng-s.component';
import { AddComponent } from './customer/add/add.component';
import { EditComponent } from './customer/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ListComponent,
    NgSComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

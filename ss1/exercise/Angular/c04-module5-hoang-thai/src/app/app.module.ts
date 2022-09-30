import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductComponent } from './product/product.component';
import { ColorComponent } from './color/color.component';
import { ArticleComponent } from './article/article.component';
import { LikeComponent } from './like/like.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    CalculatorComponent,
    ProductComponent,
    ColorComponent,
    ArticleComponent,
    LikeComponent,
    NavComponent,
    FooterComponent,
    CreateFormComponent,
    DictionaryComponent,
    DetailComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

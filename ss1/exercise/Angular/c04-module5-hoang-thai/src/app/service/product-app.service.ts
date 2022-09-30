import { Injectable } from '@angular/core';
import {Product} from "../product";

@Injectable({
  providedIn: 'root'
})
export class ProductAppService {
  products : Product[]= [
    {id:1,name:'IP13',price:5000,description:'còn 1 nửa'},
    {id:2,name:'Tông lào',price:6000,description:'mất 1 chiếc'},
    {id:3,name:'Chocolate bơ tỏi',price:7000,description:'tỏi nhiều thơm ngon'},
    {id:4,name:'Máy bay',price:8000,description:'vẫn bay được'}

  ]

  constructor() { }
  getAll(){
    return this.products;
  }
  findById(id){
    return this.products.filter(item => item.id == id)[0];
  }
  update(product : Product){
    for (let i = 0 ; i< this.products.length; i++){
      if (product.id == this.products[i].id){
        this.products[i]= product;
      }
    }
  }
  delete(id){
    for (let i = 0 ; i< this.products.length; i++){
      if (  this.products[i].id==id){
        this.products.splice(i,1);
      }
    }
  }
}

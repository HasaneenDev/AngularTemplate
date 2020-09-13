import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
const components = [
  ProductComponent
]
@NgModule({
  declarations: components,
  imports: [
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule { }

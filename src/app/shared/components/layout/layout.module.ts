import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//** import all components **//
import { NavbarComponent } from './admin-layout/navbar/navbar.component';
import { SidebarComponent } from './admin-layout/sidebar/sidebar.component';
import { FooterComponent } from './admin-layout/footer/footer.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';

const component = [
  NavbarComponent,
  SidebarComponent,
  FooterComponent,
  AdminLayoutComponent,
  BlankLayoutComponent,
  AuthLayoutComponent
]
@NgModule({
  declarations: component,
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: component
})
export class LayoutModule { }

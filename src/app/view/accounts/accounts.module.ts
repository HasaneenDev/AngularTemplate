import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import components
import { LoginComponent } from './login/login.component';

// import routing for this module
import { AccountsRoutingModule } from './accounts-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AccountsRoutingModule,
    CommonModule
  ]
})
export class AccountsModule { }

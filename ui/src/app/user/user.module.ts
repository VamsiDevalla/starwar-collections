import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }

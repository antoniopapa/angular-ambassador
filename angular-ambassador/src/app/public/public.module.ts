import {NgModule} from '@angular/core';
import {PublicComponent} from './public.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PublicModule {
}

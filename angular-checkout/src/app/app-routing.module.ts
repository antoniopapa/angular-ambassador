import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SuccessComponent} from './success/success.component';
import {ErrorComponent} from './error/error.component';
import {FormComponent} from './form/form.component';

const routes: Routes = [
  {path: 'success', component: SuccessComponent},
  {path: 'error', component: ErrorComponent},
  {path: ':code', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

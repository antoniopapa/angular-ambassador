import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {NavComponent} from './nav/nav.component';
import {SharedModule} from '../shared/shared.module';
import {FrontendProductsComponent} from './frontend-products/frontend-products.component';
import {SecureModule} from './secure/secure.module';
import { HeaderComponent } from './header/header.component';
import { BackendProductsComponent } from './backend-products/backend-products.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    FrontendProductsComponent,
    HeaderComponent,
    BackendProductsComponent,
    PaginatePipe,
    FilterPipe,
    SortPipe,
  ],
  imports: [
    SharedModule,
    SecureModule
  ],
})
export class MainModule {
}

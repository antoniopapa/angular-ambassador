import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecureComponent} from './secure.component';
import {NavComponent} from './nav/nav.component';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {UsersComponent} from './users/users.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {LinksComponent} from './links/links.component';
import {MatButtonModule} from '@angular/material/button';
import {ProductsComponent} from './products/products.component';
import {ProductsFormComponent} from './products/products-form/products-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {OrdersComponent} from './orders/orders.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    SecureComponent,
    NavComponent,
    MenuComponent,
    ProfileComponent,
    UsersComponent,
    LinksComponent,
    ProductsComponent,
    ProductsFormComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatExpansionModule,
  ]
})
export class SecureModule {
}

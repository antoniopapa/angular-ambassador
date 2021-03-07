import {Component, OnInit} from '@angular/core';
import {LinkService} from '../services/link.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../interfaces/user';
import {Product} from '../interfaces/product';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OrderService} from '../services/order.service';
import {environment} from '../../environments/environment';

declare var Stripe;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  code: string;
  user: User;
  products: Product[] = [];
  quantities: number[] = [];
  form: FormGroup;
  stripe: any;

  constructor(
    private linkService: LinkService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.code = this.route.snapshot.params.code;

    this.stripe = Stripe(environment.stripe_key);

    this.form = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
      address: '',
      country: '',
      city: '',
      zip: '',
    });

    this.linkService.get(this.code).subscribe(
      res => {
        this.user = res.user;
        this.products = res.products;
        this.products.forEach(p => {
          this.quantities[p.id] = 0;
        });
      }
    );
  }

  total(): number {
    return this.products.reduce((s, p) => s + p.price * this.quantities[p.id], 0);
  }


  submit(): void {
    const products = this.products.map(p => ({
      product_id: p.id,
      quantity: this.quantities[p.id]
    })).filter(p => p.quantity > 0);

    const data = {
      code: this.code,
      products,
      ...this.form.getRawValue()
    };

    this.orderService.create(data).subscribe(
      res => {
        this.stripe.redirectToCheckout({
          sessionId: res.id
        });
      }
    );
  }

}

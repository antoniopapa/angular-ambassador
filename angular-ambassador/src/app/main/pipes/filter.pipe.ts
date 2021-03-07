import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../../interfaces/product';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], search: string): Product[] {
    return products.filter(p => p.title.toLowerCase().indexOf(search.toLowerCase()) >= 0);
  }

}

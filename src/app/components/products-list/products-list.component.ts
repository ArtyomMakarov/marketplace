import { Component, input } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../types/product';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  public products = input.required<Product[] | undefined>();
}

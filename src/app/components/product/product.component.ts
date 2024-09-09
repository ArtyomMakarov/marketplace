import { Component, effect, ElementRef, input, ViewChild } from '@angular/core';
import { Product } from '../../types/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @ViewChild('rating') public rating!: ElementRef;

  public product = input.required<Product>();

  constructor() {
    effect(() => {
      if (!this.product()) return;

      const percent = (this.product().rating / 5) * 100 + '%';

      this.rating.nativeElement.style.setProperty('--percent', percent);
    });
  }
}

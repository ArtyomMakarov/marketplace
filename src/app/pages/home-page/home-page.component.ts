import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TopHeaderComponent } from '../../components/top-header/top-header.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { HttpService } from '../../services/http.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../../types/product';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    TopHeaderComponent,
    HeaderComponent,
    ProductsListComponent,
    FooterComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  public query = signal('');
  public products = toSignal(this._httpService.getProducts());

  public filteredProducts = computed(() => {
    if (!this.query()) return this.products();

    return this.products()?.filter(({ name }) =>
      name.toLowerCase().includes(this.query())
    );
  });

  constructor(private readonly _httpService: HttpService) {}
}

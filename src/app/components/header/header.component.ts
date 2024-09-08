import { Component, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output()
  public get query(): Observable<string> {
    return this.control.valueChanges.pipe(
      debounceTime(500),
      map((query: string) => query?.trim())
    );
  }

  public readonly control = new FormControl();
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'study-angular';
}

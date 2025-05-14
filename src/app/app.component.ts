import { Component } from '@angular/core';
import {LayoutComponent} from './core/components/layout/layout.component';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  imports: [LayoutComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'careme';
}

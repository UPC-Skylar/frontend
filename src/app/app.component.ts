import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutComponent} from './core/components/layout/layout.component';
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'careme';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}

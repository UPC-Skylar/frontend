import { Component } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    TranslatePipe,
    RouterLink,
    MatButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }
}

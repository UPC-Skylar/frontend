import { Component } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {MatAnchor, MatButton} from '@angular/material/button';
import {NavbarComponent} from '../navbar/navbar.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatAnchor,
    TranslatePipe,
    NavbarComponent,
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

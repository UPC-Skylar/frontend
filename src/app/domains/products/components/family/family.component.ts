import { Component } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-family',
  imports: [
    TranslatePipe,
    MatIcon
  ],
  templateUrl: './family.component.html',
  styleUrl: './family.component.css'
})
export class FamilyComponent {
  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }
}

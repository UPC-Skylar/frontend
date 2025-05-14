import { Component } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {FormsModule, NgForm} from '@angular/forms';
import {MatFormField, MatInput} from '@angular/material/input';
import {CaremeApiService} from '../../../domains/products/services/careme-api.service';
import {MatButton} from '@angular/material/button';


@Component({
  selector: 'app-contact',
  imports: [
    TranslatePipe,
    MatFormField,
    FormsModule,
    MatInput,
    MatButton
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private translate: TranslateService, private caremeApiService: CaremeApiService) {
    // Set default language
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form Data:', form.value);

      this.caremeApiService.postContactForm(form.value).subscribe(
        (response) => {
          console.log('Form successfully submitted', response);
          form.reset();
        },
        (error) => {
          console.error('Error submitting form', error);
        }
      );
    } else {
      console.error('Form is not valid');
    }
  }
}

import { Component } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-support',
  imports: [
    TranslatePipe,
    RouterLink,
    MatButton,
    NgForOf
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  faqs = [
    {
      question: '¿Cómo me registro en CareMe?',
      answer: 'Puedes registrarte como solicitante o cuidador a través del formulario de registro en la página de inicio.'
    },
    {
      question: '¿Es CareMe gratis?',
      answer: 'Sí, el uso de la plataforma es gratuito para los cuidadores, pero nosotros cobramos una pequeña comisión por cada servicio completado.'
    },
    {
      question: '¿Cómo puedo contactar con soporte?',
      answer: 'Si tienes algún problema, puedes ponerte en contacto con nuestro soporte a través del formulario de contacto en la sección "Contáctanos".'
    }
  ];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }
}

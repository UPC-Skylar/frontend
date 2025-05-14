import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-caregivers',
  imports: [
    MatButton,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './caregivers.component.html',
  styleUrl: './caregivers.component.css'
})
export class CaregiversComponent {
  caregiversList = [
    {
      name: 'Ana María López',
      description: 'Cuidé a varios adultos mayores con Alzheimer y personas con movilidad reducida. Me encanta hacerlos sentir acompañados.',
      image: 'assets/images/cuidador-resenia.avif'
    },
    {
      name: 'Carlos Pérez',
      description: 'Soy un cuidador profesional con más de 5 años de experiencia. Me especializo en cuidados post-quirúrgicos y personas con discapacidad.',
      image: 'assets/images/cuidador-resenia2.jpg'
    },
    {
      name: 'Luis Fernández',
      description: 'Cuidé a personas con enfermedades terminales, proporcionando apoyo emocional y físico para ellos y sus familias.',
      image: 'assets/images/cuidador-resenia3.jpg'
    }
  ];

  constructor() {
    setInterval(() => {
      const first = this.caregiversList.shift();
      if (first) {
        this.caregiversList.push(first);
      }
    }, 3000);
  }
}

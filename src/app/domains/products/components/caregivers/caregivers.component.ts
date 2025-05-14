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
}

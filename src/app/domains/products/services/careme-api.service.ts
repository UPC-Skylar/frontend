import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface UserForm{
  id: string,
  name: string;
  lastname: string,
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class CaremeApiService {
  private http = inject(HttpClient);
  private apiUrl = 'https://careme.free.beeceptor.com/api/contact';
  constructor() { }

  getUserForm(): Observable<UserForm[]> {
    return this.http.get<UserForm[]>(this.apiUrl);
  }

  postContactForm(formData: UserForm): Observable<UserForm> {
    return this.http.post<UserForm>(this.apiUrl, formData);
  }
}



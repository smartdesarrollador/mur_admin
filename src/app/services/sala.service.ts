import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sala } from '../models/sala.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalaService {
  selectCategory: Sala = new Sala();
  urlListar = environment.apiListarFilesSala;

  urlUpdateFile = environment.apiUpdateFileSala;
  urlDelete = environment.apiDeleteFileSala;
  constructor(private http: HttpClient) {}

  getSalas(): Observable<Sala> {
    return this.http.get(this.urlListar);
  }

  uploadData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUrl3Sala, data, {
      headers: headers,
    });
  }

  updateData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUpdateFileSala, data, {
      headers: headers,
    });
  }

  deleteCategory(id: number) {
    return this.http.delete(this.urlDelete + '/' + id);
  }
}

import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Industrias } from '../models/industrias.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IndustriaService {
  selectCategory: Industrias = new Industrias();
  urlListar = environment.apiListarFilesIndustrias;
  urlUpdateFile = environment.apiUpdateFileIndustrias;
  urlDelete = environment.apiDeleteFileIndustrias;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Industrias> {
    return this.http.get(this.urlListar);
  }

  uploadData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUrl3Industrias, data, {
      headers: headers,
    });
  }

  updateData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUpdateFileIndustrias, data, {
      headers: headers,
    });
  }

  deleteCategory(id: number) {
    return this.http.delete(this.urlDelete + '/' + id);
  }
}

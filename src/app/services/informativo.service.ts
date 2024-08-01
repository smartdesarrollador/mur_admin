import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Informativo } from '../models/informativo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InformativoService {
  selectCategory: Informativo = new Informativo();
  urlListar = environment.apiListarFilesInformativo;
  urlUpdateFile = environment.apiUpdateFileInformativo;
  urlDelete = environment.apiDeleteFileInformativo;
  constructor(private http: HttpClient) {}

  getInformativos(): Observable<Informativo> {
    return this.http.get(this.urlListar);
  }

  uploadData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUrl3Informativo, data, {
      headers: headers,
    });
  }

  updateData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUpdateFileInformativo, data, {
      headers: headers,
    });
  }

  deleteCategory(id: number) {
    return this.http.delete(this.urlDelete + '/' + id);
  }
}

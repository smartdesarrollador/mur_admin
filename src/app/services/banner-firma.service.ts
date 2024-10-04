import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BannerFirma } from '../models/banner_firma.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerFirmaService {
  selectCategory: BannerFirma = new BannerFirma();
  urlListar = environment.apiListarBannerFirma;
  urlUpdateFile = environment.apiUpdateBannerFirma;
  urlDelete = environment.apiDeleteBannerFirma;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<BannerFirma> {
    return this.http.get(this.urlListar);
  }

  uploadData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUrl3, data, {
      headers: headers,
    });
  }

  updateData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUpdateBannerFirma, data, {
      headers: headers,
    });
  }

  deleteCategory(id: number) {
    return this.http.delete(this.urlDelete + '/' + id);
  }
}

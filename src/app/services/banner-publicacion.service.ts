import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BannerPublicacion } from '../models/banner_publicacion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerPublicacionService {
  selectCategory: BannerPublicacion = new BannerPublicacion();
  urlListar = environment.apiListarBannerPublicacion;
  urlUpdateFile = environment.apiUpdateBannerPublicacion;
  urlDelete = environment.apiDeleteBannerPublicacion;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<BannerPublicacion> {
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
    return this.http.post(environment.apiUpdateBannerPublicacion, data, {
      headers: headers,
    });
  }

  deleteCategory(id: number) {
    return this.http.delete(this.urlDelete + '/' + id);
  }
}

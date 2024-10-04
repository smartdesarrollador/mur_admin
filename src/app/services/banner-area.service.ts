import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BannerArea } from '../models/banner_area.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerAreaService {
  selectCategory: BannerArea = new BannerArea();
  urlListar = environment.apiListarBannerArea;
  urlUpdateFile = environment.apiUpdateBannerArea;
  urlDelete = environment.apiDeleteBannerArea;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<BannerArea> {
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
    return this.http.post(environment.apiUpdateBannerArea, data, {
      headers: headers,
    });
  }

  deleteCategory(id: number) {
    return this.http.delete(this.urlDelete + '/' + id);
  }
}

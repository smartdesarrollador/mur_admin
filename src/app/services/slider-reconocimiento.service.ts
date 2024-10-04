import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SliderReconocimiento } from '../models/slider_reconocimiento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SliderReconocimientoService {
  selectCategory: SliderReconocimiento = new SliderReconocimiento();
  urlListar = environment.apiListarFilesSliderReconocimiento;
  urlUpdateFile = environment.apiUpdateFileSliderReconocimiento;
  urlDelete = environment.apiDeleteFileSliderReconocimiento;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<SliderReconocimiento> {
    return this.http.get(this.urlListar);
  }

  uploadData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUrl3SliderReconocimiento, data, {
      headers: headers,
    });
  }

  updateData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUpdateFileSliderReconocimiento, data, {
      headers: headers,
    });
  }

  deleteCategory(id: number) {
    return this.http.delete(this.urlDelete + '/' + id);
  }
}

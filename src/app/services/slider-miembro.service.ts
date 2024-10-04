import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SliderMiembro } from '../models/slider_miembro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SliderMiembroService {
  selectCategory: SliderMiembro = new SliderMiembro();
  urlListar = environment.apiListarFilesSliderMiembro;
  urlUpdateFile = environment.apiUpdateFileSliderMiembro;
  urlDelete = environment.apiDeleteFileSliderMiembro;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<SliderMiembro> {
    return this.http.get(this.urlListar);
  }

  uploadData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUrl3SliderMiembro, data, {
      headers: headers,
    });
  }

  updateData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUpdateFileSliderMiembro, data, {
      headers: headers,
    });
  }

  deleteCategory(id: number) {
    return this.http.delete(this.urlDelete + '/' + id);
  }
}

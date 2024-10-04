import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SliderComentario } from '../models/slider_comentario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SliderComentarioService {
  selectCategory: SliderComentario = new SliderComentario();
  urlListar = environment.apiListarFilesSliderComentario;
  urlUpdateFile = environment.apiUpdateFileSliderComentario;
  urlDelete = environment.apiDeleteFileSliderComentario;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<SliderComentario> {
    return this.http.get(this.urlListar);
  }

  uploadData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUrl3SliderComentario, data, {
      headers: headers,
    });
  }

  updateData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUpdateFileSliderComentario, data, {
      headers: headers,
    });
  }

  deleteCategory(id: number) {
    return this.http.delete(this.urlDelete + '/' + id);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BannerArea } from 'src/app/models/banner_area.model';
import { BannerAreaService } from 'src/app/services/banner-area.service';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpClientModule,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-banner-area',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './edit-banner-area.component.html',
  styleUrl: './edit-banner-area.component.css',
})
export class EditBannerAreaComponent implements OnInit {
  listCategories: any = [];
  files_date: any;
  submitted = false;
  data: any;
  form: FormGroup = new FormGroup({});
  urlRaiz = environment.urlRaiz + '/';
  valor_id_banner_area: any;
  post = new BannerArea();
  constructor(
    private formBuilder: FormBuilder,
    private dataService: BannerAreaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadCategories();

    this.route.queryParams.subscribe((params) => {
      const categoryId = params['categoryId'];
      this.valor_id_banner_area = categoryId;
    });
  }

  loadCategories() {
    return this.dataService.getCategories().subscribe((data: {}) => {
      console.log(data);
      this.listCategories = data;
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      imagen: [null, Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  /* uploadImage(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      if (event.target.files && event.target.files.length > 0) {
        this.files = event.target.files[0];
        console.log(this.files);
      } else {
        console.log('no se selecciono ningun archivo');
      }
    }
  } */

  uploadImage(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      if (event.target.files && event.target.files.length > 0) {
        const files = event.target.files[0];
        this.files_date = files;
        const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

        if (files.size > maxSizeInBytes) {
          console.log('La imagen excede el tamaño máximo permitido (5MB)');
          this.alertaMaxFile();
          // Puedes mostrar un mensaje de error o realizar otra acción
          event.target.value = ''; // Limpiar el input file
          return;
        }

        if (!['image/jpeg', 'image/png'].includes(files.type)) {
          console.log('Solo se permiten archivos JPG y PNG');
          this.alertaExtFile();
          // Puedes mostrar un mensaje de error o realizar otra acción
          event.target.value = ''; // Limpiar el input file
          return;
        }

        // Aquí puedes continuar con el proceso de carga de la imagen
        console.log('Archivo seleccionado:', files);
      } else {
        console.log('No se seleccionó ningún archivo');
      }
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('imagen', this.files_date, this.files_date.imagen);

    formData.append('id_banner_area', this.valor_id_banner_area);

    this.dataService.updateData(formData).subscribe((res) => {
      this.data = res;
      console.log(this.data);
      this.alerta();
      this.router.navigate(['/admin/banner/area']);
    });
  }

  alerta() {
    Swal.fire({
      icon: 'success',
      title: 'Imagen subida',
    });
  }

  alertaMaxFile() {
    Swal.fire({
      icon: 'error',
      title: 'La imagen excede el tamaño máximo permitido (5MB)',
    });
  }

  alertaExtFile() {
    Swal.fire({
      icon: 'error',
      title: 'Solo se permiten archivos JPG y PNG',
    });
  }
}

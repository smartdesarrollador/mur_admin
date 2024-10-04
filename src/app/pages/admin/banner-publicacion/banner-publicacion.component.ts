import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BannerPublicacion } from 'src/app/models/banner_publicacion.model';
import { BannerPublicacionService } from 'src/app/services/banner-publicacion.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-banner-publicacion',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './banner-publicacion.component.html',
  styleUrl: './banner-publicacion.component.css',
})
export class BannerPublicacionComponent {
  listCategories: any = [];
  files_date: any;
  submitted = false;
  data: any;
  form: FormGroup = new FormGroup({});
  urlRaiz = environment.urlRaiz + '/';
  post = new BannerPublicacion();
  constructor(
    private formBuilder: FormBuilder,
    private dataService: BannerPublicacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadCategories();
  }

  loadCategories() {
    return this.dataService.getCategories().subscribe((data: {}) => {
      console.log(data);
      this.listCategories = data;
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      image: [null, Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

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

    this.dataService.uploadData(formData).subscribe((res) => {
      this.data = res;
      console.log(this.data);
      this.alerta();
      this.loadCategories();
    });
  }

  onEdit(category: BannerPublicacion) {
    console.log(category);
    this.dataService.selectCategory = Object.assign({}, category);
    this.router.navigate(['/admin/banner/publicacion/edit'], {
      queryParams: { categoryId: category.id_banner_publicacion },
    });
  }

  onDelete(id: number) {
    this.dataService.deleteCategory(id).subscribe((response) => {
      this.loadCategories();
      this.alertaDelete();
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

  alertaDelete() {
    Swal.fire({
      icon: 'success',
      title: 'Registro eliminado',
    });
  }
}

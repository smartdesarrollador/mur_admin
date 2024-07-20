import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Slider } from 'src/app/models/slider.model';
import { SliderService } from 'src/app/services/slider.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
/* import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'; */
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-create-slider',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    /* CKEditorModule, */
    QuillModule,
  ],
  templateUrl: './create-slider.component.html',
  styleUrl: './create-slider.component.css',
})
export class CreateSliderComponent {
  listCategories: any = [];
  files_date: any;
  submitted = false;
  data: any;
  form: FormGroup = new FormGroup({});
  urlRaiz = environment.urlRaiz + '/';
  categoriaProductoId: any = 1;
  /* public Editor = ClassicEditor; */
  htmlContent: any;

  moduleQuill = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ['clean'], // remove formatting button

      ['link', 'image', 'video'], // link and image, video
    ],
  };
  post = new Slider();
  constructor(
    private formBuilder: FormBuilder,
    private dataService: SliderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadCategories();
  }

  onChangeEditor(event: any): void {
    if (event.html) {
      this.htmlContent = event.html;
    }
  }

  loadCategories() {
    return this.dataService.getCategories().subscribe((data: {}) => {
      console.log(data);
      this.listCategories = data;
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      titulo: [null, Validators.required],
      descripcion: [null, Validators.required],
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
    formData.append('titulo', this.form.value.titulo);
    formData.append('descripcion', this.form.value.descripcion);
    formData.append('imagen', this.files_date, this.files_date.name);
    this.dataService.uploadData(formData).subscribe((res) => {
      this.data = res;
      console.log(this.data);
      this.alerta();
      this.router.navigate(['/admin/sliders']);
    });
  }

  alerta() {
    Swal.fire({
      icon: 'success',
      title: 'Registro creado',
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Informativo } from 'src/app/models/informativo.model';
import { InformativoService } from 'src/app/services/informativo.service';
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
/* import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'; */
/*  1 - Quill */
import { QuillModule } from 'ngx-quill';
/*  /1 - Quill  */

@Component({
  selector: 'app-edit-informativo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    /* CKEditorModule, */
    /*  2 - Quill */
    QuillModule,
    /*  2 - Quill */
  ],
  templateUrl: './edit-informativo.component.html',
  styleUrl: './edit-informativo.component.css',
})
export class EditInformativoComponent {
  listCategories: any = [];
  files_date: any;
  submitted = false;
  data: any;
  form: FormGroup = new FormGroup({});
  urlRaiz = environment.urlRaiz + '/';
  valor_id_informativo: any;

  valor_destacado: any;
  post = new Informativo();
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
  constructor(
    private formBuilder: FormBuilder,
    private dataService: InformativoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadCategories();

    this.route.queryParams.subscribe((params) => {
      const categoryId = params['categoryId'];
      this.valor_id_informativo = categoryId;
    });
    this.valor_destacado = this.dataService.selectCategory.destacado;
  }

  onChangeEditor(event: any): void {
    if (event.html) {
      this.htmlContent = event.html;
    }
  }

  loadCategories() {
    return this.dataService.getInformativos().subscribe((data: {}) => {
      console.log(data);
      this.listCategories = data;
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      titulo: [this.dataService.selectCategory.titulo, Validators.required],
      resumen: [this.dataService.selectCategory.resumen, Validators.required],
      descripcion: [
        this.dataService.selectCategory.descripcion,
        Validators.required,
      ],
      fuente: [this.dataService.selectCategory.fuente, Validators.required],
      image: [null],
      /* maestro: [this.dataService.selectCategory.maestro, Validators.required], */
      autor: [this.dataService.selectCategory.autor, Validators.required],
      destacado: [
        this.dataService.selectCategory.destacado == 'true' ? true : false,
      ],
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
    /*  if (this.form.invalid) {
      return;
    } */

    const formData = new FormData();
    formData.append('id_informativo', this.valor_id_informativo);
    formData.append('titulo', this.form.value.titulo);
    formData.append('resumen', this.form.value.resumen);
    formData.append('descripcion', this.form.value.descripcion);
    formData.append('fuente', this.form.value.fuente);

    if (this.files_date) {
      formData.append('imagen', this.files_date, this.files_date.name);
    }
    formData.append('autor', this.form.value.autor);
    formData.append('destacado', this.form.value.destacado);

    this.dataService.updateData(formData).subscribe((res) => {
      this.data = res;
      console.log(this.data);
      this.alerta();
      this.router.navigate(['/admin/publicaciones/informativo']);
    });
  }

  alerta() {
    Swal.fire({
      icon: 'success',
      title: 'Registro editado',
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

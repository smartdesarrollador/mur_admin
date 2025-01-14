import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { MisionService } from 'src/app/services/mision.service';
import { Mision } from 'src/app/models/mision';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-mision',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
  ],
  templateUrl: './update-mision.component.html',
  styleUrl: './update-mision.component.css',
})
export class UpdateMisionComponent {
  id_mision: number = 0;

  constructor(
    public categoryService: MisionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id_mision = +params['id'];

      this.categoryService
        .getMisionById(this.id_mision)
        .subscribe((data: Mision) => {
          this.categoryService.selectCategory = data;
        });
    });
  }

  submitForm(categoryForm: NgForm) {
    this.categoryService
      .updateCategory(this.id_mision, categoryForm.value)
      .subscribe((response) => {
        this.router.navigate(['/admin/mision']);
        console.log(categoryForm.value);
      });
  }
}

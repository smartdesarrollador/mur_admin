import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/login/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { VistaComponent } from './pages/vista/vista.component';
import { InicioComponent } from './pages/vista/inicio/inicio.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CursosComponent } from './pages/vista/cursos/cursos.component';

import { AdminGuard } from './guards/admin.guard';
import { EmpleadorGuard } from './guards/empleador.guard';
import { TrabajadorGuard } from './guards/trabajador';
import { AuthGuard } from './guards/auth.guard';

/* ---------------------------------------------------------------------- */

import { PortalComponent } from './paginas/login/portal/portal.component';
import { LayoutUnoComponent } from './layout/layout-uno/layout-uno.component';
import { LayoutDosComponent } from './layout/layout-dos/layout-dos.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutTresComponent } from './layout/layout-tres/layout-tres.component';
import { BannersComponent } from './pages/admin/banners/banners.component';
import { CreateBannerComponent } from './pages/admin/banners/create-banner/create-banner.component';
import { EditBannerComponent } from './pages/admin/banners/edit-banner/edit-banner.component';

import { MisionComponent } from './pages/admin/mision/mision.component';
import { UpdateFileMisionComponent } from './pages/admin/mision/update-file-mision/update-file-mision.component';
import { UpdateMisionComponent } from './pages/admin/mision/update-mision/update-mision.component';
import { CarouselComponent } from './pages/admin/carousel/carousel.component';
import { UpdateFileCarouselComponent } from './pages/admin/carousel/update-file-carousel/update-file-carousel.component';
import { VerCursoComponent } from './layout/componentes/ver-curso/ver-curso.component';
import { ProductoComponent } from './pages/admin/producto/producto.component';
import { CreateComponent } from './pages/admin/producto/create/create.component';
import { EditComponent } from './pages/admin/producto/edit/edit.component';
import { EspecialidadComponent } from './pages/admin/especialidad/especialidad.component';
import { CreateEspecialidadComponent } from './pages/admin/especialidad/create-especialidad/create-especialidad.component';
import { EditEspecialidadComponent } from './pages/admin/especialidad/edit-especialidad/edit-especialidad.component';
import { ContactoComponent } from './pages/admin/contacto/contacto.component';
import { TestimonioComponent } from './pages/admin/testimonio/testimonio.component';
import { CreateTestimonioComponent } from './pages/admin/testimonio/create-testimonio/create-testimonio.component';
import { EditTestimonioComponent } from './pages/admin/testimonio/edit-testimonio/edit-testimonio.component';
import { SliderComponent } from './pages/admin/slider/slider.component';
import { CreateSliderComponent } from './pages/admin/slider/create-slider/create-slider.component';
import { EditSliderComponent } from './pages/admin/slider/edit-slider/edit-slider.component';

export const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent,
  },
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  /*  {
    path: '',
    component: VistaComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'cursos',
        component: CursosComponent,
      },
      {
        path: 'ver-curso',
        component: VerCursoComponent,
      },
    ],
  }, */
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent,
      },
      {
        path: 'banners',
        canActivate: [AuthGuard],
        component: BannersComponent,
      },
      {
        path: 'banners/create',
        canActivate: [AuthGuard],
        component: CreateBannerComponent,
      },
      {
        path: 'banners/edit',
        canActivate: [AuthGuard],
        component: EditBannerComponent,
      },
      {
        path: 'mision',
        canActivate: [AuthGuard],
        component: MisionComponent,
      },
      {
        path: 'mision/update/file',
        canActivate: [AuthGuard],
        component: UpdateFileMisionComponent,
      },
      {
        path: 'mision/update',
        canActivate: [AuthGuard],
        component: UpdateMisionComponent,
      },
      {
        path: 'sliders',
        canActivate: [AuthGuard],
        component: SliderComponent,
      },
      {
        path: 'sliders/create',
        canActivate: [AuthGuard],
        component: CreateSliderComponent,
      },
      {
        path: 'sliders/edit',
        canActivate: [AuthGuard],
        component: EditSliderComponent,
      },
      {
        path: 'equipo',
        canActivate: [AuthGuard],
        component: ProductoComponent,
      },
      {
        path: 'equipo/create',
        canActivate: [AuthGuard],
        component: CreateComponent,
      },
      {
        path: 'equipo/edit',
        canActivate: [AuthGuard],
        component: EditComponent,
      },
      {
        path: 'especialidades',
        canActivate: [AuthGuard],
        component: EspecialidadComponent,
      },
      {
        path: 'especialidades/create',
        canActivate: [AuthGuard],
        component: CreateEspecialidadComponent,
      },
      {
        path: 'especialidades/edit',
        canActivate: [AuthGuard],
        component: EditEspecialidadComponent,
      },
      {
        path: 'contactos',
        canActivate: [AuthGuard],
        component: ContactoComponent,
      },
      {
        path: 'servicios',
        canActivate: [AuthGuard],
        component: TestimonioComponent,
      },
      {
        path: 'servicios/create',
        canActivate: [AuthGuard],
        component: CreateTestimonioComponent,
      },
      {
        path: 'servicios/edit',
        canActivate: [AuthGuard],
        component: EditTestimonioComponent,
      },
    ],
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'layout-uno',
        component: LayoutUnoComponent,
      },
      {
        path: 'layout-dos',
        component: LayoutDosComponent,
      },
      {
        path: 'layout-tres',
        component: LayoutTresComponent,
      },
    ],
  },
  {
    path: '',
    /* canActivate: [AuthGuard], */
    redirectTo: '/admin/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    /* canActivate: [AuthGuard], */ component: PageNotFoundComponent,
  },
];

import { NgModule } from '@angular/core';
//Rutas
import { PAGES_ROUTES } from './pages.routes';
//Modulos
import { SharedModule } from '../shared/shared.module';
//Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent
  ],
  imports: [
      SharedModule,
      PAGES_ROUTES
  ],
  exports: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent
  ]
})
export class PagesModule {}
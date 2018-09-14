import { NgModule } from '@angular/core';
//Rutas
import { PAGES_ROUTES } from './pages.routes';
//Modulos
import { SharedModule } from '../shared/shared.module';
import {FormsModule} from '@angular/forms'
import { ChartsModule } from 'ng2-charts';

//Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    IncrementadorComponent,
    GraficoDonaComponent,

  ],
  imports: [
      SharedModule,
      PAGES_ROUTES,
      FormsModule,
      ChartsModule,
  ],
  exports: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent
  ]
})
export class PagesModule {}
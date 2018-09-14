import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() packageData = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    data: [350, 450, 100],
    type: 'doughnut',
    leyenda: 'Grafico 1'
  };

  constructor() {
   }

  ngOnInit() {

  }

}

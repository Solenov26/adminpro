import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {


  @ViewChild('txtProgress') txtProgress : ElementRef;

  @Input() progreso: number = 50;
  @Input('nombreLeyenda') leyenda: string = 'Leyenda';
  @Output('actualizaValor') cambioValor: EventEmitter<number>= new EventEmitter();


  constructor() { 
  }

  ngOnInit() {
    
  }

  cambiando(newValue) {
    if(newValue >= 100){
      this.progreso=100;
    }
    else if(newValue <= 0 ){
      this.progreso=0;
    } else{
      this.progreso= newValue;
    }
    
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor:number) {
    if (this.progreso >= 100 && valor > 0) {
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && valor < 0) {
      return this.progreso = 0;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }
  

}

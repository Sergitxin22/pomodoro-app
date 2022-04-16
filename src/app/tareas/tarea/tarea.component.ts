import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  @ViewChild('tarea2')
  tarea2!: ElementRef;

  tiempoBloque: number[] = [15, 13, 16, 15];  
  bloque: number = 0;  
  tiempo: number = this.tiempoBloque[this.bloque];
  minutos: number = Math.floor(this.tiempo / 60);
  segundos: number = Math.floor(this.tiempo % 60);
    
  tarea: string = '';
  mostrarTarea: string = '';
  enPausa: boolean = false;
  enCurso: boolean = !(!this.tiempoBloque.length);
  timeText: string = ( '0' + this.minutos).slice(-2) + ':' + ('0' + this.segundos).slice(-2);

  actualizarTiempo = setInterval(() => {
    clearInterval(this.actualizarTiempo);
  }, 1000);

  pauseTimeLine() {
    clearInterval(this.actualizarTiempo);
  }

  createTimeLine() { 
    this.actualizarTiempo = setInterval(() => {
      
      if(this.tiempo > 0 && this.tarea.length > 0) {
        this.tiempo--;
        this.minutos = Math.floor(this.tiempo / 60);
        this.segundos = Math.floor(this.tiempo % 60);
        this.timeText = ( '0' + this.minutos).slice(-2) + ':' + ('0' + this.segundos).slice(-2);
      }else if (this.enCurso && this.tarea.length > 0){
        this.bloque++;
        this.getEnCurso();
        this.tiempo = this.tiempoBloque[this.bloque] + 1;
        this.updateTarea();
        clearInterval(this.actualizarTiempo);
        this.createTimeLine();
      }else{
        clearInterval(this.actualizarTiempo);
        this.bloque = 0;
        this.resetearValores();
      }
    }, 1000);
  }

  getTarea() {
    this.tarea = this.tarea2.nativeElement.value;
    this.updateTarea();
  }

  getEnCurso() {
    if(this.bloque > this.tiempoBloque.length - 1) {
      this.enCurso = false;
      this.tarea = '';
    }
  }

  resetearValores() {
    this.tiempo = this.tiempoBloque[this.bloque];
    this.minutos = Math.floor(this.tiempo / 60);
    this.segundos = Math.floor(this.tiempo % 60);
    this.timeText = ( '0' + this.minutos).slice(-2) + ':' + ('0' + this.segundos).slice(-2);
    this.mostrarTarea = '';
  }

  detener(){
    clearInterval(this.actualizarTiempo);
    this.bloque = 0;
    this.resetearValores();
    this.tarea = '';
  }

  siguienteCiclo(){
    if(this.bloque < this.tiempoBloque.length - 1) {
      this.bloque++;
      this.resetearValores();
      this.updateTarea();
    }
  }

  updateTarea(){
    if(this.bloque% 2 === 0){
      this.mostrarTarea = this.tarea;
    }else{
      this.mostrarTarea = 'Descanso';
    }
  }

  inicializarPomodoro() {
    this.getTarea();
    if(this.tarea.length > 0) {
      this.createTimeLine();
    }
  }
}

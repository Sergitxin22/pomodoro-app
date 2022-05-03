import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  ultimoBloque: number = 900;
  constructor() { 
    if (localStorage.getItem('ultimoBloque')) {
      this.ultimoBloque = parseInt(localStorage.getItem('ultimoBloque')!);
    }else{
      localStorage.setItem('ultimoBloque', this.ultimoBloque.toString());
    }
    
  }

  actualizarBloque(bloque: number) {
    this.ultimoBloque = bloque;
    localStorage.setItem('ultimoBloque', this.ultimoBloque.toString());
  }
}

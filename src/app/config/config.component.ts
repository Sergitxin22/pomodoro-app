import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  tiempo: number = this.appService.ultimoBloque;
  constructor( public appService: AppService ) { }

  ngOnInit(): void {
    this.appService.ultimoBloque = this.tiempo;
  }  

  setUltimoBloque() {
    this.appService.actualizarBloque(this.tiempo);
  }

}

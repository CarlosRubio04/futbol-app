import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service'

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {

	registro:any = {};

  constructor(private autorizacionService:AutorizacionService) { 
  	
  }

  registrar() {
  	this.autorizacionService.singin(this.registro.email, this.registro.password);
  } 

}

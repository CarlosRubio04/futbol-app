import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CursosService } from '../services/cursos.service';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent {
	id = null;
	curso:any = {};
    constructor(private route: ActivatedRoute, private cursosService:CursosService){
    	console.log(this.route.snapshot.params['id']);
    	console.log(this.route.snapshot.queryParams['action']);

    	this.id= this.route.snapshot.params['id'];
    	this.curso = this.cursosService.buscarCurso(this.id);
    }
}
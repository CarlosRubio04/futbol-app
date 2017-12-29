import { Component } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { ActivatedRoute } from "@angular/router";

declare var jquery:any;
declare var $:any;

@Component({
	selector: 'app-crear',
	templateUrl: './crear.component.html'
})
export class CrearComponent {
	curso:any = {};
	id:any  = null;
	areas = null;

	// Input Contenido
	contenido:any = {};

	constructor(private cursosService: CursosService, private route: ActivatedRoute,){
		this.areas = cursosService.getAreas();
		this.id= this.route.snapshot.params['id'];
		if(this.id != 'new'){
			this.cursosService.getCurso(this.id).valueChanges().subscribe((curso)=>{
				this.curso = curso;
			});
		}
	}
	guardarCurso() {
			if(this.id != 'new'){
				this.cursosService.editarCurso(this.curso);
				alert('breve');
			}else {
				this.curso.id = Date.now();
				this.cursosService.guardarCurso(this.curso);
				alert('Negocio Socio');
			}
			
			this.curso = {};
		};
}
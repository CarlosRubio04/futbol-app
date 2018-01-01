import { Component } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { Item } from './contenido.component';
import { ActivatedRoute } from "@angular/router";

declare var jquery:any;
declare var $:any;

@Component({
	selector: 'app-crear',
	templateUrl: './crear.component.html',
	styleUrls: ['./crear.component.css']
})
export class CrearComponent {
	curso:any = {};
	id:any  = null;
	areas = null;

	// Input Contenido
	items: Array<Item>;

	constructor(private cursosService: CursosService, private route: ActivatedRoute,){
		this.items = [];
		this.areas = cursosService.getAreas();
		this.id= this.route.snapshot.params['id'];
		if(this.id != 'new'){
			this.cursosService.getCurso(this.id).valueChanges().subscribe((curso)=>{
				this.curso = curso;
			});
		}
	}

	addItem(item){
		let obj = new Item(item);
		this.items.push(obj);
	}

	removeItem(item){
		let index = this.items.indexOf(item);
		this.items.splice(index,1);
	}

	guardarCurso() {
		if(this.id != 'new'){
			this.cursosService.editarCurso(this.curso);
			alert('breve');
		}else {
			this.curso.id = Date.now();
			this.curso.contenido = this.items;
			this.cursosService.guardarCurso(this.curso);
			alert('Negocio Socio');
		}

		this.curso = {};
	};
}
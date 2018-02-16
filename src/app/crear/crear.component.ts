import { Component } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { Item } from './contenido.component';
import { Router } from '@angular/router';
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
	area:any = null;
	status:boolean = false;
	// Input Contenido
	items: Array<Item>;

	constructor(private cursosService: CursosService, private route: ActivatedRoute, private router:Router){
		this.items = [];
		this.areas = cursosService.getAreas();
		this.id= this.route.snapshot.params['id'];
		
		if(this.id != 'new'){
			this.cursosService.getCurso(this.id).valueChanges().subscribe((curso)=>{
				this.curso = curso;
				this.items = this.curso.contenido;
				this.status = true;
			});
		}

	}

	onChange(categoria) {
	    this.area = this.areas.filter((area) => {return area.id == categoria}) [0] || null;
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
			alert('Curso Actualizado Correctamente');
			this.router.navigate(['cursos']);
		}else {
			//this.curso.id = Date.now();
			this.curso.contenido = this.items;
			this.curso.area = this.area;
			this.cursosService.guardarCurso(this.curso);
			alert('Nuevo Curso Creado');
			this.router.navigate(['cursos']);
		}

		this.curso = {};
	};
}
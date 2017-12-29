import { Component } from '@angular/core';
import { CursosService } from '../services/cursos.service'

@Component({
  selector: 'app-root',
  templateUrl: './cursos.component.html'
})
export class CursosComponent {
	title = 'Administrador';
	lat:number = 4.6560663;
	lng:number = -74.0595918;
	cursos = null;
	constructor(private cursosService: CursosService){
		cursosService.getCursos().valueChanges().subscribe(cursos => {
        	console.log(cursos)
        	this.cursos = cursos;
    	});
	}
}
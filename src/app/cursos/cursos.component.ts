import { Component } from '@angular/core';
import { CursosService } from '../services/cursos.service'

@Component({
  selector: 'app-root',
  templateUrl: './cursos.component.html'
})
export class CursosComponent {
	title = 'Administrador';
	cursos = null;
	constructor(private cursosService: CursosService){
		cursosService.getCursos().valueChanges().subscribe(cursos => {
        	console.log(cursos)
        	this.cursos = cursos;
    	});
	}
}
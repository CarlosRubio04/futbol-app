import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database"
import {Http} from "@angular/http"
@Injectable()

export class CursosService{
	areas:any = [
        {id: 1, name: 'Ciencias Economicas y Administrativas', color: 'amarillo'},
        {id: 2, name: 'Ciencias Juridicas', color: 'amarillo'},
        {id: 3, name: 'Ciencias', color: 'azul'},
        {id: 4, name: 'Medicina', color: 'azul'},
        {id: 5, name: 'Enfermeria', color: 'azul'},
        {id: 6, name: 'Odontología', color: 'azul'},
        {id: 7, name: 'Psicología', color: 'azul'},
        {id: 8, name: 'Arquitectura y Diseño', color: 'verde'},
        {id: 9, name: 'Estudios Ambientales y Rurales', color: 'verde'},
        {id: 10, name: 'Ingenieria', color: 'verde'},
        {id: 11, name: 'Artes', color: 'morado'},
        {id: 12, name: 'Educacción', color: 'morado'},
        {id: 13, name: 'Filosofia', color: 'morado'},
        {id: 14, name: 'Ciencias Polícas y Relaciones Internacionales', color: 'rojo'},
        {id: 15, name: 'Instituto Derechos Humanos', color: 'rojo'},
        {id: 16, name: 'Ciencias Sociales', color: 'rojo'},
        {id: 17, name: 'Comunicación y Lenguaje', color: 'rojo'},
        {id: 18, name: 'Teología', color: 'rojo'}
    ];

    cursos:any = [];

	constructor(private afDB:AngularFireDatabase, private http:Http){}

	public getAreas(){
        return this.areas;
    }
	public getCursos() {
		return this.afDB.list('cursos/');
	}
	public buscarCurso(id){
    	return this.cursos.filter((curso) => {return curso.id == id})[0] || null;
    }
    public guardarCurso(curso) {
    	console.log(curso);
    	this.afDB.database.ref('cursos/'+curso.id).set(curso);
    }
    public editarCurso(curso) {
    	console.log(curso);
    	this.afDB.database.ref('cursos/'+curso.id).set(curso);
    }

    public getCurso(id){
		return this.afDB.object('cursos/'+id);
	} 
}

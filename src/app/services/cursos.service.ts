import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database"
import {Http} from "@angular/http"
@Injectable()

export class CursosService{
	areas:any = [
        {id: 1, name: 'Ciencias Economicas y Administrativas', img: 'http://via.placeholder.com/600x600', color: 'amarillo'},
        {id: 2, name: 'Ciencias Juridicas', img: 'http://via.placeholder.com/600x600', color: 'amarillo'},
        {id: 3, name: 'Ciencias', img: 'http://via.placeholder.com/600x600', color: 'azul'},
        {id: 4, name: 'Medicina', img: 'http://via.placeholder.com/600x600', color: 'azul'},
        {id: 5, name: 'Enfermeria', img: 'http://via.placeholder.com/600x600', color: 'azul'},
        {id: 6, name: 'Odontología', img: 'http://via.placeholder.com/600x600', color: 'azul'},
        {id: 7, name: 'Psicología', img: 'http://via.placeholder.com/600x600', color: 'azul'},
        {id: 8, name: 'Arquitectura y Diseño', img: 'http://via.placeholder.com/600x600', color: 'verde'},
        {id: 9, name: 'Estudios Ambientales y Rurales', img: 'http://via.placeholder.com/600x600', color: 'verde'},
        {id: 10, name: 'Ingenieria', img: 'http://via.placeholder.com/600x600', color: 'verde'},
        {id: 11, name: 'Artes', img: 'http://via.placeholder.com/600x600', color: 'morado'},
        {id: 12, name: 'Educacción', img: 'http://via.placeholder.com/600x600', color: 'morado'},
        {id: 13, name: 'Filosofia', img: 'http://via.placeholder.com/600x600', color: 'morado'},
        {id: 14, name: 'Ciencias Polícas y Relaciones Internacionales', img: 'http://via.placeholder.com/600x600', color: 'rojo'},
        {id: 15, name: 'Instituto Derechos Humanos', img: 'http://via.placeholder.com/600x600', color: 'rojo'},
        {id: 16, name: 'Ciencias Sociales', img: 'http://via.placeholder.com/600x600', color: 'rojo'},
        {id: 17, name: 'Comunicación y Lenguaje', img: 'http://via.placeholder.com/600x600', color: 'rojo'},
        {id: 18, name: 'Teología', img: 'http://via.placeholder.com/600x600', color: 'rojo'}
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

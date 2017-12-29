import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database"
import {Http} from "@angular/http"
@Injectable()

export class CursosService{
	areas:any = [
        {name: 'Ciencias Economicas y Administrativas', img: 'http://via.placeholder.com/600x600'},
        {name: 'Ciencias Juridicas', img: 'http://via.placeholder.com/600x600'},
        {name: 'Ciencias', img: 'http://via.placeholder.com/600x600'},
        {name: 'Medicina', img: 'http://via.placeholder.com/600x600'},
        {name: 'Enfermeria', img: 'http://via.placeholder.com/600x600'},
        {name: 'Odontología', img: 'http://via.placeholder.com/600x600'},
        {name: 'Psicología', img: 'http://via.placeholder.com/600x600'},
        {name: 'Arquitectura y Diseño', img: 'http://via.placeholder.com/600x600'},
        {name: 'Estudios Ambientales y Rurales', img: 'http://via.placeholder.com/600x600'},
        {name: 'Ingenieria', img: 'http://via.placeholder.com/600x600'},
        {name: 'Artes', img: 'http://via.placeholder.com/600x600'},
        {name: 'Educacción', img: 'http://via.placeholder.com/600x600'},
        {name: 'Filosofia', img: 'http://via.placeholder.com/600x600'},
        {name: 'Ciencias Polícas y Relaciones Internacionales', img: 'http://via.placeholder.com/600x600'},
        {name: 'Instituto Derechos Humanos', img: 'http://via.placeholder.com/600x600'},
        {name: 'Ciencias Sociales', img: 'http://via.placeholder.com/600x600'},
        {name: 'Comunicación y Lenguaje', img: 'http://via.placeholder.com/600x600'},
        {name: 'Teología', img: 'http://via.placeholder.com/600x600'}
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

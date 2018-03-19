import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database"
import {Http} from "@angular/http"
@Injectable()

export class AppService{
	API_ENDPOINT = 'http://api.football-data.org/v1/fixtures/149430';
    cursos:any = [];
    games:any = [
            {
                id: 1,
                finished: false,
                playing: true,
                localTeam: "Nacional",
                visitTeam: "Millonarios",
                localScore: 2,
                visitScore: 0
            },
            {
                id: 2,
                finished: true,
                playing: true,
                localTeam: "América",
                visitTeam: "Cali",
                localScore: 2,
                visitScore: 0
            },
            {
                id: 3,
                finished: true,
                playing: true,
                localTeam: "América",
                visitTeam: "Cali",
                localScore: 2,
                visitScore: 0
            },
            {
                id: 4,
                finished: true,
                playing: true,
                localTeam: "América",
                visitTeam: "Cali",
                localScore: 2,
                visitScore: 0
            },
            {
                id: 5,
                finished: true,
                playing: true,
                localTeam: "América",
                visitTeam: "Cali",
                localScore: 2,
                visitScore: 0
            },
            {
                id: 6,
                finished: true,
                playing: true,
                localTeam: "América",
                visitTeam: "Cali",
                localScore: 2,
                visitScore: 0
            }
    ];

	constructor(private afDB:AngularFireDatabase, private http:Http){}

	public getGames(){
        return this.games;
        //return this.http.get(this.API_ENDPOINT);
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

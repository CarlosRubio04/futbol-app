import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	loggedIn = false;
	loggedUser:any = null;
	loggedUserPic:any = null;
	constructor(private autorizacionService:AutorizacionService){
		this.autorizacionService.isLogged()
			.subscribe((result)=>{
				if(result && result.uid) {
					this.loggedIn = true;
					setTimeout(()=> {
						this.loggedUser = this.autorizacionService.getUser().currentUser.displayName;
						this.loggedUserPic = this.autorizacionService.getUser().currentUser.photoURL;
						//console.log(this.loggedUserPic);
					}, 500);
				}else {
					this.loggedIn = false;
				}
			}, (error)=>{
				this.loggedIn = false;
			})
	}

	loggout() {
		this.autorizacionService.loggout();
	}
}
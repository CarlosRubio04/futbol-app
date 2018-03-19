import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	loggedIn = false;
	loggedUser:any = null;
	loggedEmail:any = null;
	loggedPhone:any = null;
	loggedUserPic:any = null;
	cosa:any;

  constructor(private autorizacionService:AutorizacionService) {
  	this.autorizacionService.isLogged()
			.subscribe((result)=>{
				if(result && result.uid) {
					this.loggedIn = true;
					setTimeout(()=> {
						this.loggedUser = this.autorizacionService.getUser().currentUser.displayName;
						this.loggedUserPic = this.autorizacionService.getUser().currentUser.photoURL;
						this.loggedEmail = this.autorizacionService.getUser().currentUser.email;
						this.loggedPhone = this.autorizacionService.getUser().currentUser.phoneNumber;
						this.cosa = this.autorizacionService.getUser().currentUser;
						console.log(this.cosa);
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

  ngOnInit() {
  }

}

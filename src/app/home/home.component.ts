import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	loggedIn = false;

  constructor(private autorizacionService:AutorizacionService) {
  	this.autorizacionService.isLogged()
			.subscribe((result)=>{
				if(result && result.uid) {
					this.loggedIn = true;
				}else {
					this.loggedIn = false;
				}
			}, (error)=>{
				this.loggedIn = false;
			})
  }

  ngOnInit() {
  }

  facebookLogin(){
    this.autorizacionService.facebookLogin();
  }

}

import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

	games: any = {};
	colombiaCoup: any = {};

  constructor(public el: ElementRef, private route: ActivatedRoute, private appService: AppService) {
      this.games = appService.getGames();
      console.log(this.games);
  }

  ngOnInit() {
  }

}

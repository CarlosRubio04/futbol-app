import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule} from "@angular/http";


import { AppService } from './services/app.service';
import { AutorizacionService } from './services/autorizacion.service';
import { MyGuard } from './services/my-guard.service.guard';
import { LoginComponent } from './login/login.component';
import { SinginComponent } from './singin/singin.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ProfileComponent } from './profile/profile.component';



const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'jugar', component: GameComponent},
  {path: 'perfil', component: ProfileComponent, canActivate:[MyGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'singin', component: SinginComponent}
];


export const firebaseConfig = {
    apiKey: "AIzaSyBFkEVrX8MvWFdFvoitrY8dLwe9nr5txoY",
    authDomain: "futbol-app-5f228.firebaseapp.com",
    databaseURL: "https://futbol-app-5f228.firebaseio.com",
    projectId: "futbol-app-5f228",
    storageBucket: "futbol-app-5f228.appspot.com",
    messagingSenderId: "166693050149"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SinginComponent,
    HomeComponent,
    GameComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
   	FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDB0b8fTn46DLYVqbt52mz6U6KZK0xbA6U'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [AppService, AutorizacionService, MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

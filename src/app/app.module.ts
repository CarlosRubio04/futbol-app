import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule} from "@angular/http";


import { DetalleComponent } from './detalle/detalle.component';
import { CursosComponent } from './cursos/cursos.component';
import { CrearComponent } from './crear/crear.component';
import { CursosService } from './services/cursos.service';



const appRoutes: Routes = [
  {path: '', component: CursosComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'crear/:id', component: CrearComponent}
];


export const firebaseConfig = {
    apiKey: "AIzaSyA-jrqOaA_Wam3dzGcbi5ZosOaQOYY6YLY",
    authDomain: "javerianaeducacioncontinua.firebaseapp.com",
    databaseURL: "https://javerianaeducacioncontinua.firebaseio.com",
    storageBucket: "javerianaeducacioncontinua.appspot.com",
    messagingSenderId: "57552902261"
};


@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    CursosComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
   	FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDB0b8fTn46DLYVqbt52mz6U6KZK0xbA6U'
    }),
    RouterModule.forRoot(appRoutes),
    MaterializeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

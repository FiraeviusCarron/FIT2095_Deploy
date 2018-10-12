import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { ListactorsComponent } from './listactors/listactors.component';
import { AddactorComponent } from './addactor/addactor.component';
import { UpdateactorComponent } from './updateactor/updateactor.component';
import { DeleteactorComponent } from './deleteactor/deleteactor.component';
import {RouterModule, Routes} from '@angular/router';
import {DatabaseService} from './database.service';
import {HttpClientModule} from '@angular/common/http';
import { ListallComponent } from './listall/listall.component';
import { AddmovietoactorComponent } from './addmovietoactor/addmovietoactor.component';
import { ListactormoviesComponent } from './listactormovies/listactormovies.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { ListmovieactorsComponent } from './listmovieactors/listmovieactors.component';
import { AddactortomovieComponent } from './addactortomovie/addactortomovie.component';

const appRoutes: Routes = [
  {path: 'listall', component: ListallComponent},
  {path: 'addactor', component: AddactorComponent},
  {path: 'updateactor', component: UpdateactorComponent},
  {path: 'deleteactor', component: DeleteactorComponent},
  {path: 'listactormovies', component: ListactormoviesComponent},
  {path: 'addmovietoactor', component: AddmovietoactorComponent},
  {path: 'addmovie', component: AddmovieComponent},
  {path: 'updatemovie', component: UpdatemovieComponent},
  {path: 'deletemovie', component: DeletemovieComponent},
  {path: 'addactortomovie', component: AddactortomovieComponent},
  {path: 'listmovieactors', component: ListmovieactorsComponent},
  {path: '', redirectTo: '/listall', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListactorsComponent,
    AddactorComponent,
    UpdateactorComponent,
    DeleteactorComponent,
    ListallComponent,
    AddmovietoactorComponent,
    ListactormoviesComponent,
    AddmovieComponent,
    UpdatemovieComponent,
    DeletemovieComponent,
    ListmovieactorsComponent,
    AddactortomovieComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

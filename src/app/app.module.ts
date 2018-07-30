import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/app-header';
import { UserComponent } from './components/user/app-user';
import { UserDetailsComponent } from './components/userdetails/app-userdetails';
import { SportComplexComponent } from './components/sportComplex/app-sportComplex';
import { ReservationComponent } from './components/reservation/app-reservation';
import { ListMatchesComponent } from './components/listmatches/app-listmatches';
import { DetailsSportComplex } from './components/detailsSportComplex/app-detailsSportComplex';
import { AppRoutingModule } from './app-routes';
import { UserDataService } from './services/app-userdataservice';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/app-footer';
import { ABMsportComplexComponent } from './components/abmsport-complex/abmsport-complex.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    UserDetailsComponent,
    SportComplexComponent,
    ListMatchesComponent,
    ReservationComponent,
    DetailsSportComplex,
    FooterComponent,
    ABMsportComplexComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    RouterModule
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './components/user/app-user';
import { LoginComponent } from './components/login/login.component';
import { UserDetailsComponent } from './components/userdetails/app-userdetails';
import { ABMsportComplexComponent } from './components/abmsport-complex/abmsport-complex.component';
import { SportComplexComponent } from './components/sportComplex/app-sportComplex';
import { ReservationComponent } from './components/reservation/app-reservation';
import { DetailsSportComplex } from './components/detailsSportComplex/app-detailsSportComplex';
import { ListMatchesComponent} from './components/listmatches/app-listmatches';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { 
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      component: ListMatchesComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    /*
    //perfil usuario
    { 
      path: 'perfil/:_id',
      component: UserComponent,
    },
    */
    //registro usuario
    { 
      path: 'user',
      component: UserComponent,
    },
    //reservas de un usuario
    {
      path: 'myRes/:_id',
      component: UserComponent,
    },
    //vista de un sportComplex(para que los usuarios lo vean)
    { 
      path: 'detailsSportComplex/:_id',
      component: DetailsSportComplex,
    },
    /*
    //perfil de un sportComplex(para que él mismo vea sus detalles y pueda editar)
    { 
      path: 'perfilSc/:_id',
      component: ABMsportComplexComponent,
    },
    */
    {
      path: 'sportComplex',
      component: ABMsportComplexComponent,
    },
    //reservas de un sportComplex
    {
      path: 'myResSc/:_id',
      component: ABMsportComplexComponent,
    },
    {
      path: 'reservation/:id',
      component: ReservationComponent
    },
    
    { 
      path: '**',
      component: NotFoundComponent
    }
    
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })

export class AppRoutingModule { }

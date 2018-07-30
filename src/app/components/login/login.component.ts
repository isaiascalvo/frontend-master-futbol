import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { UserDataService } from '../../services/app-userdataservice';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

declare var M:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(http: Http, private route: ActivatedRoute, private mds: UserDataService, private rr: Router) { }

  ngOnInit() {
  }

  logUser(form:NgForm){
    this.mds.getUser(form.value)
    .subscribe(res => {
      if(res.user==null)
      {
        console.log(res);
        M.toast({html: 'Nombre de usuario y/o contraseña incorrecto'});
      }
      else
      {
        
        sessionStorage.setItem('_id', res.user._id);
        //sessionStorage._id=res.user._id;
        sessionStorage.setItem('username', res.user.username);
        //sessionStorage.username=res.user.username;
        sessionStorage.setItem('type', 'user');
        //sessionStorage.type="user";

        console.log(res);
        M.toast({html: 'Sesión iniciada correctamente'});
        this.rr.navigate(['home']);
        
      }
    });
  }

  logSC(form:NgForm){
    this.mds.getSC(form.value)
    .subscribe(res => {
      if(res.sportComplex==null)
      {
        console.log(res);
        M.toast({html: 'Nombre de usuario y/o contraseña incorrecto'});
      }
      else
      {
        
        sessionStorage.setItem('_id', res.sportComplex._id);
        //sessionStorage._id=res.sportComplex._id;
        sessionStorage.setItem('username', res.sportComplex.username);
        //sessionStorage.username=res.sportComplex.username;
        sessionStorage.setItem('type', 'sc');
        //sessionStorage.type="sc";
        console.log(res);
        M.toast({html: 'Sesión iniciada correctamente'});
        this.rr.navigate(['home']);
        
      }
    });
  }

}

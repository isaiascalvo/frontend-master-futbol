import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { UserDataService } from '../../services/app-userdataservice';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { ReservationComponent } from '../reservation/app-reservation';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
//import * as moment from 'moment';
//var moment = require('moment');

declare var M:any;

//moment().format();

@Component({
    selector: 'app-user',
    templateUrl: 'app-user.html',
    styleUrls: ['app-user.css']
})

export class UserComponent implements OnInit {
    public _id;
    public name;
    public lastname;
    public phone;
    public email;
    public reputation;
    //public password;
    //public password_confirmation;
    public username;
    public reservations: ReservationComponent[];
    public obs: Observable<any>;
    public sub: any;  

    constructor(http: Http, private route: ActivatedRoute, private mds: UserDataService, private rr: Router) { }

    ngOnInit() {     
        /*   
        this.sub = this.route.params.subscribe(params => {
            if(params['_id']){
                this.getOneUser(params['_id']);
                //this.getUserReservations(params['_id']);
            }
        });
        */
        if(sessionStorage._id!=null){
            this.getOneUser(sessionStorage._id);
        }
    }

    /*
    getUserReservations(id):void{
        this.obs = this.mds.getSCReservations(id);
        this.obs.subscribe(response => this.reservations = response.reservations);
    }
    */

    getOneUser(id): void {

        this.obs = this.mds.getOneUser(id);
        this.obs.subscribe(response => {
            
            this._id = response.user._id;
            this.name = response.user.name;
            this.lastname = response.user.lastname;
            this.phone = response.user.phone;
            this.email = response.user.email;
            this.reputation = response.user.reputation;
            //this.password = response.user.password;
            //this.password_confirmation = response.user.password_confirmation;
            this.username = response.user.username;
        })
    };

    getUser(form): void {
        this.mds.getUser(form)
        .subscribe(response => {
            sessionStorage._id=response.user._id;
            sessionStorage.username=response.user.username;
            sessionStorage.type='user'
            /*
            this._id = response.user._id;
            this.name = response.user.name;
            this.lastname = response.user.lastname;
            this.phone = response.user.phone;
            this.email = response.user.email;
            this.reputation = response.user.reputation;
            //this.password = response.user.password;
            //this.password_confirmation = response.user.password_confirmation;
            this.username = response.user.username;
            */
            this.rr.navigate(['home']);
        })
    };

    addUser(form:NgForm){
        if(form.value._id)
        {
            this.mds.putOneUser(form.value)
            .subscribe(res=> {
                console.log(res);
                M.toast({html: 'Usuario actualizado exitosamente'});
            });
        }
        else
        {
            this.mds.postOneUser(form.value)
            .subscribe(res =>{
                //this.resetForm(form);   
                M.toast({html: 'Usuario guardado exitosamente'});
            });
            this.sub= this.route.params.subscribe(params =>{
                this.getUser(form.value);
            });
        }
    }
    
    resetForm(form?: NgForm){
        if(form){
            form.reset();
            //this.mds.selectedUser = new User();
        }
    }

    sessionActive(){
        if(sessionStorage._id!=null){
          return true;
        }
        else{
          return false;
        } 
    }
}

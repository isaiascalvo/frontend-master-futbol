import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { UserDataService } from '../../services/app-userdataservice';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { ReservationComponent } from '../reservation/app-reservation';
import * as moment from 'moment';
//var moment = require('moment');

//moment().format();

@Component({
    selector: 'app-userdetails',
    templateUrl: 'app-userdetails.html',
    styleUrls: ['app-userdetails.css']
})

export class UserDetailsComponent implements OnInit {
    public _id;
    public name;
    public lastname;
    public phone;
    public email;
    public reputation;
    public password;
    public username;
    public obs: Observable<any>;
    public sub: any;  

    constructor(http: Http, private route: ActivatedRoute, private mds: UserDataService) { }

    getOneUser(id): void {

        this.obs = this.mds.getOneUser(id);
        this.obs.subscribe(response => {
            
            this._id = response.user._id;
            this.name = response.user.name;
            this.lastname = response.user.lastname;
            this.phone = response.user.phone;
            this.email = response.user.email;
            this.reputation = response.user.reputation;
            this.password = response.user.password;
            this.username = response.user.username;
        })};

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.getOneUser(params['_id']);
        });
    }
}

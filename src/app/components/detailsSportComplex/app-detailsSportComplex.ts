import { Component, OnInit, Input } from '@angular/core';
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
    selector: 'app-detailsSportComplex',
    templateUrl: 'app-detailsSportComplex.html',
    styleUrls: ['app-detailsSportComplex.css']
})

export class DetailsSportComplex implements OnInit {
    public _id;
    @Input() idI;
    public name;
    public username;
    public password;
    public email;
    public city;
    public address;
    public fields;
    public description;
    public phone;
    public qualification;
    public openning;
    public closing;
    public reservations: ReservationComponent[];
    public obs: Observable<any>;
    public sub: any;  

    constructor(http: Http, private route: ActivatedRoute, private mds: UserDataService) { }

    getOneSC(id): void {
        //console.log(id);

        this.obs = this.mds.getOneSC(id);
        this.obs.subscribe(response => {
            
            this._id = response.sportComplex._id;
            this.name = response.sportComplex.name;
            this.username = response.sportComplex.username;
            this.password = response.sportComplex.password;
            this.email = response.sportComplex.email;
            this.city = response.sportComplex.city;
            this.address = response.sportComplex.address;
            this.fields = response.sportComplex.fields;
            this.description = response.sportComplex.description;
            this.phone = response.sportComplex.phone;
            this.qualification = response.sportComplex.qualification;
            this.openning = response.sportComplex.Openning;
            this.closing = response.sportComplex.Closing;
        })
    };

    ngOnInit() {     
        this.sub = this.route.params.subscribe(params => {
            this.getOneSC(params['_id']);
            this.getSCReservations(params['_id']);
        });    
    }

    getSCReservations(id):void{
        this.obs = this.mds.getSCReservations(id);
        this.obs.subscribe(response => this.reservations = response.reservations);
    }
    
}

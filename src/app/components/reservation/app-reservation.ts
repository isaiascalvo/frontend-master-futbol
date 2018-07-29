import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { UserDataService } from '../../services/app-userdataservice';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-reservation',
    templateUrl: 'app-reservation.html',
    styleUrls: ['app-reservation.css']
})

export class ReservationComponent implements OnInit{
    public _id;
    public user;
    public sportComplex;
    public date;
    public field;
    public obs: Observable<any>;
    public sub: any;

    constructor(http: Http, private route: ActivatedRoute, private mds: UserDataService) { }

    getOneReservation(id): void {

        this.obs = this.mds.getOneReservation(id);
        this.obs.subscribe(response => {
            
            this._id = response.reservation._id;
            this.user = response.reservation.user;
            this.sportComplex = response.reservation.sportComplex;
            this.date = response.reservation.date;
            this.field= response.reservation.field;
        })};

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.getOneReservation(params['_id']);
        });
    }

}

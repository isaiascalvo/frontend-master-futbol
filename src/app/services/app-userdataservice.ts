import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; // o {HttpClient} from @angular/common/http
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { UserComponent } from '../components/user/app-user';
import { ListMatchesComponent } from '../components/listmatches/app-listmatches';

@Injectable({
    providedIn:'root',
})
export class UserDataService {
    
    constructor(public http: Http) { }

    getAllUsers(): Observable<any> {
        let users: any;
        users = this.http.get('http://localhost:7575/api/user').pipe(map(res => res.json()));
        return users;
    }

    getUser(user): Observable<any> {
        return this.http.post('http://localhost:7575/api/user/log/',user).pipe(map(res => res.json()));
    }

    getOneUser(id: any): Observable<any> {
        return this.http.get('http://localhost:7575/api/user/' + id).pipe(map(res => res.json()));
    }
    //No se si anda
    postOneUser(user){
        return this.http.post('http://localhost:7575/api/user/',user);
    }
    //No se si anda
    putOneUser(user){
        return this.http.put('http://localhost:7575/api/user/'+ `${user._id}`,user);
    }
    //No se si anda
    deleteOneUser(_id:string){
        return this.http.delete('http://localhost:7575/api/user/'+ `${_id}`);//o + _id en vez de `${_id}` 
    }

    

    /*
    getAllSportComplexes(): Observable<any> {
    let sportComplexes: any;
    sportComplexes = this.http.get('http://localhost:7575/api/reservation/pending').map(res => res.json());
    return sportComplexes;
    }
    */
    /*
    getOneSportComplex(id: any): Observable<any> {
        return this.http.get('http://localhost:7575/api/sportComplex/' + id).pipe(map(res => res.json()));
    }
    */

    getOneSC(id: any): Observable<any> {
        return this.http.get('http://localhost:7575/api/sportComplex/' + id).pipe(map(res => res.json()));
    }

    getSC(sc): Observable<any> {
        return this.http.post('http://localhost:7575/api/sportComplex/logSC/',sc).pipe(map(res => res.json()));
    }

    //No se si anda
    postOneSC(sc){
        return this.http.post('http://localhost:7575/api/sportComplex/',sc);
    }
    //No se si anda
    putOneSC(sc){
        return this.http.put('http://localhost:7575/api/sportComplex/'+ `${sc._id}`,sc);
    }
    //No se si anda
    deleteOneSC(_id:string){
        return this.http.delete('http://localhost:7575/api/sportComplex/'+ `${_id}`);//o + _id en vez de `${_id}` 
    }

    getAllSportComplexes(): Observable<any> {
        let sportComplexes: any;
        sportComplexes = this.http.get('http://localhost:7575/api/sportComplex').pipe(map(res => res.json()));
        return sportComplexes;
    }

    getAllReservations(id: any): Observable<any> {
        let reservation: any;
        reservation = this.http.get('http://localhost:7575/api/reservation').pipe(map(res => res.json()));
        return reservation;
    }

    getSCReservations(id): Observable<any> {
        let reservations: any;
        reservations = this.http.get('http://localhost:7575/api/reservation/pendRes/'+ id).pipe(map(res => res.json()));
        return reservations;
    }

    getUserReservations(id): Observable<any> {
        let reservations: any;
        reservations = this.http.get('http://localhost:7575/api/reservation/pendMyRes/'+ id).pipe(map(res => res.json()));
        return reservations;
    }

    getOneReservation(id: any): Observable<any> {
        return this.http.get('http://localhost:7575/api/reservation/' + id).pipe(map(res => res.json()));
    }

}

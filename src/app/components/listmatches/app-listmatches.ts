import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserDataService } from '../../services/app-userdataservice';
import { UserComponent } from '../user/app-user';
import { SportComplexComponent } from '../sportComplex/app-sportComplex';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-listmatches',
  templateUrl: './app-listmatches.html',
  styleUrls: ['./app-listmatches.css']
})

export class ListMatchesComponent implements OnInit {

  public sportComplexes: SportComplexComponent[];
  public obs: Observable<any>;
  public selectedSportComplex: SportComplexComponent;

  constructor(http: Http, protected mds: UserDataService) { }

  getAllSportComplexes(): void {
    this.obs = this.mds.getAllSportComplexes();
    this.obs.subscribe(response => this.sportComplexes = response.sportComplex);
  }

  onSelect(sportComplex: SportComplexComponent): void {
    this.selectedSportComplex = sportComplex;
  }

  ngOnInit() {
    this.getAllSportComplexes();
  }
}

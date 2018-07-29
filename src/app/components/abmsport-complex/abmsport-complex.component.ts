import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { UserDataService } from '../../services/app-userdataservice';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { ReservationComponent } from '../reservation/app-reservation';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

declare var M:any;

@Component({
  selector: 'app-abmsport-complex',
  templateUrl: './abmsport-complex.component.html',
  styleUrls: ['./abmsport-complex.component.css']
})
export class ABMsportComplexComponent implements OnInit {

  public _id;
  //@Input() idI;
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

  constructor(http: Http, private route: ActivatedRoute, private mds: UserDataService,private rr: Router) { }

  ngOnInit() 
  {
    this.sub = this.route.params.subscribe(params => {
      if(params['_id']){
          this.sub = this.route.params.subscribe(params => {
              this.getOneSC(params['_id']);
          });
        }
      });
  }

  getOneSC(id): void {

      this.obs = this.mds.getOneSC(id);
      this.obs.subscribe(response => {
          
          this._id = response.sportComplex._id;
          this.name = response.sportComplex.name;
          this.username = response.sportComplex.username;
          //this.password = response.sportComplex.password;
          this.email = response.sportComplex.email;
          this.city = response.sportComplex.city;
          this.address = response.sportComplex.address;
          this.fields = response.sportComplex.fields;
          this.description = response.sportComplex.description;
          this.phone = response.sportComplex.phone;
          this.qualification = response.sportComplex.qualification;
          this.openning = response.sportComplex.openning;
          this.closing = response.sportComplex.closing;
      })
  };

  getSC(form): void {
    this.mds.getSC(form)
    .subscribe(response => {
        this._id = response.sportComplex._id;
        this.name = response.sportComplex.name;
        this.username = response.sportComplex.username;
        //this.password = response.sportComplex.password;
        this.email = response.sportComplex.email;
        this.city = response.sportComplex.city;
        this.address = response.sportComplex.address;
        this.fields = response.sportComplex.fields;
        this.description = response.sportComplex.description;
        this.phone = response.sportComplex.phone;
        this.qualification = response.sportComplex.qualification;
        this.openning = response.sportComplex.openning;
        this.closing = response.sportComplex.closing;
        this.rr.navigate(['perfilSc/'+this._id]);
    })
  };


  addSC(form:NgForm){
    if(form.value._id)
    {
        this.mds.putOneSC(form.value)
        .subscribe(res=> {
            console.log(res);
            M.toast({html: 'Usuario actualizado exitosamente'});
        });
    }
    else
    {
        this.mds.postOneSC(form.value)
        .subscribe(res =>{
            //this.resetForm(form);   
            M.toast({html: 'Usuario guardado exitosamente'});
        });
        this.sub= this.route.params.subscribe(params =>{
            this.getSC(form.value);
        });
    }
  }

  resetForm(form?: NgForm){
      if(form){
          form.reset();
      }
  }
}

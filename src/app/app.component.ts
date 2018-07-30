import { Component } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    let now = moment();
    console.log('hello world', now.format());
    console.log(now.add(7, 'days').format());
  }

  sessionActive(){
    if(sessionStorage._id!=null){
      return true;
    }
    else{
      return false;
    } 
  }
  
  cerrarSesion(){
    sessionStorage.clear();
  }

  isUser(){
    if(sessionStorage.type=='user'){
      return true;
    }
    else{
      return false;
    } 
  }
}

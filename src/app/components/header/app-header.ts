import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.html',
  styleUrls: ['./app-header.css']
})
export class HeaderComponent implements OnInit {

  username:any;

  ngOnInit() {
    
  }
 
  sessionActive(){
    
    this.username=sessionStorage.username;
    
    if(sessionStorage._id!=null){
      return true;
    }
    else{
      return false;
    } 
  }
  
  cerrarSesion(){
    sessionStorage.clear();
    this.username=null;
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

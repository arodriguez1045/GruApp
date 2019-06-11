
import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Location } from '@angular/common';
import * as Parse from 'parse'

let parse = require('parse');

@Component({
  selector: 'app-add-towing',
  templateUrl: './add-towing.page.html',
  styleUrls: ['./add-towing.page.scss'],
})
export class AddTowingPage implements OnInit {

  marca : string;
  modelo: string;
  year: string;
  tablilla: string;
  color: string;



  constructor(public navigate : NavController, public nativePageTransitions: NativePageTransitions,
              public location : Location) { 
        parse.serverURL = 'https://parseapi.back4app.com/';
        Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8"); 
              }

  ngOnInit() {
  }

  saveTowing(){
    if(this.tablilla.length == 6 || this.tablilla.length==7){
        Parse.Cloud.run('createTowing', {userId: Parse.User.current().id, color: this.color, make: this.marca, year: this.year, model: this.modelo, licensePlateNum: this.tablilla }).then((result) =>  
    {
      console.log(this.color, this.marca,  this.year,this.modelo, this.tablilla);
     //this.location.back(); 
  });
    }else{
      console.log("Error");
    }
   
  }

  openPage() {

    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
     }

     console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/manage-document");
  
  }

  

  goBack() {

    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
     }

     console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/verification");

  
  }

  

}

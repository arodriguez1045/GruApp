import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import * as Parse from 'parse';
import { GruproviderService } from "../gruprovider.service";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

let parse = require('parse');

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {

  constructor(public provider: GruproviderService,public menu: MenuController, public navigate: NavController, public nativePageTransitions: NativePageTransitions) 
  {
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8"); 
   }


   employeeId:any;
   historyService:any;



  ngOnInit() {
    if(Parse.User.current() == null )
    {
      this.navigate.navigateRoot('/register');
    }

    this.employeeId =Parse.User.current().id;
    this.getInfo();
  }

  getInfo()
  {
    console.log("Employee Id:" , this.employeeId);
    Parse.Cloud.run('historyEmployee',{employeeId: this.employeeId}).then((result)=>
    {
      console.log(result);
      this.historyService = result;
      console.log(result[0].get('client').get('name'));
      console.log(result[0].get('price'));
      console.log(result[0].get('client').get('licenseNum'));
      console.log("exitoso");
      
    },
    (error)=>
    { 
      console.log(error);
    });
  }

  openCustom(){
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
    console.log("is working");
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
    this.navigate.navigateRoot("/get-service");
  
  }

}

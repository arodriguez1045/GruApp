import { Component, OnInit } from '@angular/core';

import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import * as Parse from 'parse';

import { GruproviderService } from "../gruprovider.service";
import { runInThisContext } from 'vm';
let parse = require('parse');

@Component({
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
})
export class QuotePage implements OnInit {

  constructor(public provider: GruproviderService,public navigate : NavController, public nativePageTransitions: NativePageTransitions) 
  {
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8");
   }

   employeeId:any;
   quotes:any;
   quoteId:any;
   model:any;
   price:any;
   description:any;
   carImage:any;

  ngOnInit() {

    if(Parse.User.current() == null)
    {
      this.navigate.navigateRoot('/register');
    }
    this.employeeId = Parse.User.current().id;
    this.quoteId = this.provider.quoteId;

    console.log("Entrando A quote: ", this.quoteId);
    
    this.getInfo();

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
    // this.navigate.navigateRoot("/quote");
  
  }
  getInfo()
  {
    console.log(this.employeeId);
    Parse.Cloud.run('getSimpleQuote',{quoteId: this.quoteId}).then((result)=>
    {

        this.quotes = result;
      console.log(result[0].get('price'));
      console.log(result[0].get('service').get('clientCar').get('model'));
      console.log(result[0].get('service').get('service'));


      this.model = result[0].get('service').get('clientCar').get('model');
      this.price= result[0].get('price');
      this.description = result[0].get('service').get('service');
      this.carImage = result[0].get('service').get('image');

    },
    (error)=>
    { 
      console.log(error);
    });
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
    this.navigate.navigateRoot("/quote-history");
  }
}

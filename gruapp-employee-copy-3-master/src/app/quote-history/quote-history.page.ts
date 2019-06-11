import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import * as Parse from 'parse';
import { GruproviderService } from "../gruprovider.service";
import { AlertController } from '@ionic/angular';
import { runInThisContext } from 'vm';
let parse = require('parse');

@Component({
  selector: 'app-quote-history',
  templateUrl: './quote-history.page.html',
  styleUrls: ['./quote-history.page.scss'],
})
export class QuoteHistoryPage implements OnInit {

  constructor(public alertController: AlertController,public provider: GruproviderService,public nativePageTransitions: NativePageTransitions, public navigate : NavController ) {
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8");
   }

  employeeId:any;
  quotes:any;
  quot:any;
  deleteId:any;
  ngOnInit() {

    if(Parse.User.current() == null)
    {
      this.navigate.navigateRoot('/register');
    }
    this.employeeId = Parse.User.current().id;
    this.getInfo();
  }
  openPage(quot) {

    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
     }

    this.provider.quoteId = quot;
    console.log("id:",this.provider.quoteId);

     console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/quote");
  
  }

  getInfo()
  {
    console.log(this.employeeId);
    Parse.Cloud.run('getEmployeeQuotes',{userID: this.employeeId}).then((result)=>
    {

        this.quotes = result;
      console.log(result);
      console.log(result[0].id);
      console.log(result[0].get('price'));
      console.log(result[0].get('service').get('clientCar').get('model'));
      console.log(result[0].get('price'));
      console.log(result[0].get('price'));
      
    },
    (error)=>
    { 
      console.log(error);
    });
  }


  async stopAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Cotización Borrada!',
      buttons: ['OK']
    });

    await alert.present();
    this.navigate.navigateRoot("/quote-history");
  }



  deleteElement(deleteId)
  {
    console.log("Entrando a delete Element", deleteId);
    Parse.Cloud.run('deleteQuotes',{quotesID:deleteId}).then((result)=>
    {

       console.log(result);
       this.stopAlert();
      
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
    this.navigate.navigateRoot("/get-service");
  }
}

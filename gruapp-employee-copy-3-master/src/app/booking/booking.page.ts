import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { GruproviderService } from "../gruprovider.service";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

import {AlertController} from '@ionic/angular';

import * as Parse from 'parse';


let parse = require('parse');

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  serviceInfo : any;
  name: any;
  price: any;
  serviceName: any;
  destinationName: any;
  telephone: any;
  stripeId: any;
  serviceType:any;
  test:any;
  employeeId:any;
  driveLat:any;
  driveLong:any

  constructor(private geolocation: Geolocation, private locationAccuracy: LocationAccuracy,public alerCtrl:AlertController ,public navigate : NavController, public nativePageTransitions: NativePageTransitions,
              public provider : GruproviderService) { 
              parse.serverURL = 'https://parseapi.back4app.com/';
              Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8"); 
              }

  ngOnInit() {
    if(Parse.User.current() == null)
    {
      this.navigate.navigateRoot('/register');
    }

    this.employeeId = Parse.User.current().id;
    this.getInfo();

      let self = this;
    window.setInterval(function() {
      
     self.getLocation();
    // this.getLocation();
    }, 2000);
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
    this.navigate.navigateRoot("/get-service");
  
  }

  cancelService()
  {

    console.log("Entrando al cancel Service()");
    Parse.Cloud.run('cancelRequest',{serviceId:this.provider.serviceId}).then((result)=>
    {
        console.log("servicio cancelado");
       
    },(error)=>
    {
      console.log(error);
      console.log("error!!!!!");
    });


    this.openPage();
  }


  finishService()
  {
    Parse.Cloud.run('changeRequestStatus', {serviceId: this.provider.serviceId, status: 'F'}).then((result)=>
    {
        console.log("status change");
        this.getBooking();
    },(error)=>
    {
      console.log(error);
    });
  }

  

  getBooking()
  {
    Parse.Cloud.run('getStripe',{serviceId: this.provider.serviceId}).then((result) => {
     
      this.stripeId = result;
      console.log("Stripe:", this.stripeId);
      this.finishPayment();

    }, (error) => {
      console.log(error);
      this.errorAlert(error);
    });
  }

  

  finishPayment()
  {
    Parse.Cloud.run('makeStripePayment',{stripeId:this.stripeId}).then((result)=>
    {
        console.log(result);
        this.openPage();
    },(error)=>
    {
      console.log(error);
      // this.errorAlert(error);
      this.openPage();
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
  

  callFunction()
  {
    window.setInterval(function() {
      
        this.test1();
      // this.getLocation();
      }, 2000);
  }


  

  getLocation()
  {
      this.locationAccuracy.canRequest().then((canRequest: boolean) => {
  
        if(canRequest) {
          // the accuracy option will be ignored by iOS
          this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
            () => console.log('Request successful'),
            error => console.log('Error requesting location permissions', error)
          );
        }  
      });
  
      this.geolocation.getCurrentPosition().then((resp) => {
        this.provider.latitud = resp.coords.latitude
        this.provider.longitud = resp.coords.longitude
        console.log(this.provider.longitud)
        console.log(this.provider.latitud)
        this.setLocation();
       }).catch((error) => {
         console.log('Error getting location', error);
       });
       
       let watch = this.geolocation.watchPosition();
       watch.subscribe((data) => {
       });
    }
  

  setLocation()
  {
    Parse.Cloud.run('setCurrentLocation',{userId:this.employeeId,driverLatitud:this.provider.latitud, driverLongitud: this.provider.longitud}).then((result)=>
    {
    
          console.log(result);
          console.log("Enviando Location");
    },
    (error)=>
    { 
      console.log(error);
    });

  }



  

  foward() {

    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
     }

     console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/get-service");
  
  }

  async Listo(){ //Alerta de pedido Exitoso
    const alert = await this.alerCtrl.create({
      header: '¡Pago Exitoso!',
      message: 'La transacción de pago se completo exitosamente.',
      buttons: [
        {
          text: '¡Listo!',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.openPage();
          }
        }
      ]
    });
    await alert.present();

  }

  async errorAlert(error: any) {
    const alert = await this.alerCtrl.create({
      header: 'Error',
      message: error,
      buttons: [{
        text: 'OK',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }]
    });
    await alert.present();
  }

  getInfo(){
    // this.fowardAlert();
    console.log(this.provider.serviceId);
    this.test = "SGagHqlG20";
    Parse.Cloud.run('getServiceInfo',{serviceId: this.provider.serviceId}).then((result)=>
    {
      console.log(result);

      this.price = result.get("price");
      this.serviceType = result.get("service");
      this.serviceName = result.get("serviceName");
      this.destinationName = result.get("destinationName");

      console.log(result.get("price"));
      console.log(result.get("service"));
      console.log(result.get("serviceName"));
      console.log(result.get("destinationName"));

      
      
    },
    (error)=>
    { 
      console.log(error);
    });

 
  }
  async fowardAlert() {
    const alert = await this.alerCtrl.create({
      header: 'Alerta',
      message: 'Message',
      buttons: ['OK']
    });

    await alert.present();
  
  }

}

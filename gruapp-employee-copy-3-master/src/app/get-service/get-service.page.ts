import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import { AlertController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import * as Parse from 'parse';
import { GruproviderService } from "../gruprovider.service";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

let parse = require('parse');


@Component({
  selector: 'app-get-service',
  templateUrl: './get-service.page.html',
  styleUrls: ['./get-service.page.scss'],
})
export class GetServicePage implements OnInit {

  constructor(public alertController: AlertController,private geolocation: Geolocation, private locationAccuracy: LocationAccuracy, public menu: MenuController, public navigate : NavController, public nativePageTransitions: NativePageTransitions, public provider : GruproviderService) { 
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8"); 
  }
  
  serviceRequests: object []
  length: number = 0
  name: any;
  employeeId: any;
 


  ngOnInit() {

    if(Parse.User.current() == null)
    {
      this.navigate.navigateRoot('/register');
    }
    this.provider.employeeId = Parse.User.current().id;
    this.getCurrentLocation()
    
    this.getServices()
    this.checkService();
    this.getInfo()
    this.provider.serviceId = ""
   
  }

  openCustom(){
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  checkService()
  {
    Parse.Cloud.run('verifyServiceStatus',{serviceId: this.provider.employeeId}).then((result)=>
    {
      console.log(result);

      if(result == null)
      {
        console.log("Puede realizar servicios");
        // this.provider.serviceId = result.get("objectId");
        // console.log(this.provider.serviceId);

      }
      else{
        console.log("No puede hacer servicios");
        this.provider.serviceId = result.id;
        console.log(this.provider.serviceId);
        this.stopAlert();
      }
    },
    (error)=>
    { 
      console.log(error);
    });
  }
  
  getCurrentLocation(){
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
      this.getServices()
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
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
    this.navigate.navigateRoot("/booking");
  }

  async stopAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Ya tiene un servicio en proceso, no puede puede realizar más servicios hasta completar el servicio aceptado.Presione OK para ver el servicio',
      buttons: ['OK']
    });

    await alert.present();
    this.navigate.navigateRoot("/booking");
  }


  openPage3() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.slide(options);
  }

  getServices(){
    Parse.Cloud.run('getServiceRequestsByDistance', { driverLatitud: this.provider.latitud, driverLongitud: this.provider.longitud }).then((response) => {
      for(let i = 0; i < response.length; i++){
        response[i] = response[i].toJSON();
      }
      this.serviceRequests = response;
      this.length = this.serviceRequests.length
      console.log(this.serviceRequests)
    }, (error) => {
      console.log(error);
    });
  }


  getPhone(serviceId){
    this.provider.serviceId = serviceId;
    console.log(serviceId)

    Parse.Cloud.run('getBooking',{serviceId: this.provider.serviceId}).then((result)=>
    {
      console.log(result);

      this.setEmployeeId();
    },
    (error)=>
    { 
      console.log(error);
    });
    // this.openPage();
  }

  getInfo()
  {
    this.employeeId = Parse.User.current().id;
    console.log("User:", this.employeeId);
    Parse.Cloud.run('getName',{userId: this.employeeId}).then((result)=>
    {
      console.log(result);
      this.name = result;
      
    },
    (error)=>
    { 
      console.log(error);
    });

  }
  

  setEmployeeId()
  {

    Parse.Cloud.run('setEmployeeId',{serviceId: this.provider.serviceId, employeeId: this.provider.employeeId}).then((result)=>
    {
      console.log(result);
      this.openPage();
      
    },
    (error)=>
    { 
      console.log(error);
    });
      
  }
  

  logOut() {
    Parse.User.logOut().then((resp) => {
      console.log('Logged out successfully', resp);
      this.openPage3();
      this.navigate.navigateRoot('/register');

    }, err => {
      //console.log('Error logging out', err);

    })
  }

  
}

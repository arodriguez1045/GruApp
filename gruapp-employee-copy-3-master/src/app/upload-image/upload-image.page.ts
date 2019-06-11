import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { GruproviderService } from "../gruprovider.service";
import * as Parse from 'parse';
import { runInThisContext } from 'vm';
let parse = require('parse');

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.page.html',
  styleUrls: ['./upload-image.page.scss'],
})
export class UploadImagePage implements OnInit {

  constructor(public provider: GruproviderService,private camera: Camera, public alertController: AlertController, public navigate : NavController, public nativePageTransitions: NativePageTransitions) 
  {
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8"); 
   }

  licNum:any;
  expDate:any;
  employeeId:any;
  image:any;
  picture:any;
  savedPhoto:any;


  ngOnInit() {
    if(Parse.User.current() == null)
    {
      this.navigate.navigateRoot('/register');
    }

    this.employeeId = Parse.User.current().id;

  }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {

      this.picture = 'data:image/jpeg;base64,' + imageData;

      let base64Image = this.picture;
      let name = "photo.jpeg";

      let parseFile = new Parse.File(name, {
        base64: base64Image
      }); //convierte la foto a base64
      parseFile.save().then((savedFile) => {
        console.log('file saved:' + savedFile);
        this.savedPhoto= this.picture;
        let currentUser = Parse.User.current();
        currentUser.set("licensePhoto", savedFile);
        currentUser.save().then((result)=>
        {
            // this.openPage();
        });
        this.provider.photo = savedFile; //foto tomada
      }, (err) => {
        console.log('error grabando file: ' + err)
      });

    }, (err) => {
      console.log('error de camara' + err);
    });
  }

  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Sus documentos serán verificados.',
      buttons: ['OK']
    });

    await alert.present();
    this.navigate.navigateRoot("/account");
  }

  openPage() {

    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
     }

     console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/account");
  
  }

  setInformation()
  {
    console.log("licencia",this.licNum);

    console.log("expiration", this.expDate);

    
    console.log(this.employeeId);
    Parse.Cloud.run('uploadEmployeeLicencia',{userId: this.employeeId, expirationDate:this.expDate, licenseNum: this.licNum }).then((result)=>
    {
      console.log(result);
      this.openPage();
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
    this.navigate.navigateRoot("/account");
  
  }
}

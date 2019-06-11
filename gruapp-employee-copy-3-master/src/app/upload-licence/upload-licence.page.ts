import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import * as Parse from 'parse';
import { runInThisContext } from 'vm';
import { GruproviderService } from "../gruprovider.service";
import { timingSafeEqual } from 'crypto';

let parse = require('parse');


@Component({
  selector: 'app-upload-licence',
  templateUrl: './upload-licence.page.html',
  styleUrls: ['./upload-licence.page.scss'],
})
export class UploadLicencePage implements OnInit {

  constructor(public provider:GruproviderService,private camera: Camera, public alertController: AlertController, public navigate: NavController, public nativePageTransitions: NativePageTransitions) 
  {
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8");
   }

   picture:any;
   savedPhoto:any;
   employeeId:any;
   len:any;
   licencia:any;
   licenseNum:any;
   fecha:any;
   car:any;
   decision: any;

  ngOnInit() {

    if(Parse.User.current() == null)
    {
      this.navigate.navigateRoot('/register');
    }
    this.employeeId = Parse.User.current().id;
    this.getInfo();
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
        // let Car =  Parse.Object.extend('Car');
        //  let car = new Car();

        this.car.set("carLicense", savedFile);
       this.car.save().then((result)=>
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


  getInfo()
  {
    Parse.Cloud.run('cars',{userId: this.employeeId}).then((result)=>
    {
        console.log(result.length);
     
        this.len = result.length;

        this.car = result[0];
        
       
        console.log(this.len);
        console.log(result[0].get('carLicense'));
        console.log(result[0].get('expirationDate'));
        this.licencia = result[0].get('carLicense');
        this.fecha = result[0].get('expirationDate');

        this.licenseNum = result[0].get('licensePlateNum');
        console.log(result[0].get('licensePlateNum'));

        if(this.licencia !=null && this.fecha != null)
        {
            this.stopAlert();
            this.decision = true;
            console.log(this.decision);
        }
        else
        {
          this.fowardAlert();
          this.decision= false;
          console.log(this.decision);
        }
    },
    (error)=>
    { 
      console.log(error);
    });
  }

  setInformation()
  {
    console.log("Entrando al setInformation");
      console.log(this.fecha);
      console.log(this.licencia);
      console.log(this.licenseNum)
    
    console.log(this.employeeId);

    // if(this.fecha == null || this.licencia == null)
    // {
      Parse.Cloud.run('uploadCar',{userId: this.employeeId, expirationDate:this.fecha, licensePlateNum: this.licenseNum}).then((result)=>
      {
        console.log(result);
        this.openPage();
      },
      (error)=>
      { 
        console.log(error);
      });

    // }
  
      // this.openPage();

  }



  openPage() {
    console.log("entrando al open page");
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

  async stopAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Ya tiene una grua registrada, no puede modificar la información.',
      buttons: ['OK']
    });

    await alert.present();
    this.navigate.navigateRoot("/account");
  }

  async fowardAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Usted debe completar los documentos para que su perfil sea aprovado.',
      buttons: ['OK']
    });

    await alert.present();
  
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

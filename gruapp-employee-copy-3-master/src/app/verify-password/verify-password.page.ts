import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { GruproviderService } from "./../gruprovider.service";
import { AlertController } from "@ionic/angular";
import * as Parse from 'parse';

let parse = require('parse');

@Component({
  selector: 'app-verify-password',
  templateUrl: './verify-password.page.html',
  styleUrls: ['./verify-password.page.scss'],
})
export class VerifyPasswordPage implements OnInit {

  password : string;
  verifiedPassword : any;

  constructor(public navigate : NavController, public nativePageTransitions: NativePageTransitions,
    public provider : GruproviderService, public alert: AlertController) { 
      parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8"); 
    }

  ngOnInit() {
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
    this.navigate.navigateRoot("/verification");
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
    this.navigate.navigateRoot("/register");
  
  }

  async confirmPass(){
    this.provider.password = this.password;

    if( this.password == this.verifiedPassword && this.provider.signUp() == true ){
      this.provider.signUp();
      this.openPage();
    }else if ( this.password != this.verifiedPassword){
      const alert = await this.alert.create({
        header: 'Error',
        message: 'Las contraseñas no son iguales',
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
    else if (this.password == this.verifiedPassword && this.provider.signUp() == false){
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert =  await this.alert.create({
      header: 'Error',
      message: 'Ya existe un usario con ese correo electronico',
      buttons: [{
        text: 'OK',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
          this.navigate.navigateRoot('/registro');
          
        }
      }]
    });
    await alert.present();
  
  }
}

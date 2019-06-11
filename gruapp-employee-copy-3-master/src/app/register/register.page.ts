import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { AlertController } from "@ionic/angular";
import * as Parse from 'parse';
import { GruproviderService } from "../gruprovider.service";

let parse = require('parse');


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public navigate : NavController, public nativePageTransitions: NativePageTransitions, public alert : AlertController, public provider : GruproviderService) {
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8"); 
  }

  register : boolean;
  email : string;
  name : string;
  user : any;
  password: string;
  role : 'E';
  phoneNumber : string;
  company: any;

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
     this.navigate.navigateRoot("/verify-password");
  }

  openPage2() {

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

  changeRegister(register : boolean){
    this.register = register;
    console.log("statusChange");
    }
    async alertLogIn(){
      const alert = await this.alert.create({
        header: 'Error',
        message: 'Correo electrónico / Contraseña inválida.',
        buttons: [{
          text: 'OK',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
            //this.popController.dismiss();
            //this.nav.navigateRoot("/sidemenu");
          }
        }]
      });
      await alert.present();
     }
     

    singIn(){

      Parse.User.logIn(this.email, this.password).then((resp) => {
        console.log('Logged in successfully', resp);
        const currentUser = Parse.User.current(); //usuario actual logged
        this.user = currentUser; //igual a variable global
          this.provider.employeeId = Parse.User.current().id;
            console.log("User register:",this.provider.employeeId);
        Parse.Cloud.run('ifVerified', { userId: Parse.User.current().id }).then((response) => {
          if (response) {
            this.openPage2(); //navegar
          }
          else{
            this.notVerified();
          }
        });
      }, err => {
        console.log('Error logging in', err);
        this.alertLogIn();
      });
    
    
  }
  
     signUp(){
      this.provider.email = this.email;
      this.provider.nombre = this.name;
      this.provider.phoneNumber = this.phoneNumber;
      this.provider.role = this.role;
      this.provider.password = this.password;
      this.provider.username = this.email;
      this.provider.company = this.company;
      console.log(this.name);
      this.openPage();
      }

      async notVerified(){
        const alert = await this.alert.create({
          header: 'Error',
          message: 'Su cuenta no ha sido verificada.',
          buttons: [{
            text: 'OK',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              this.navigate.navigateForward('/num-verification');
              console.log('Confirm Cancel');
            }
          }]
        });
      
        await alert.present();
      }

      async alertError(){
        const alert = await this.alert.create({
          header: 'Error',
          message: 'Correo electrónico / Contraseña inválida.',
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
}

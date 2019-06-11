import { Component, OnInit } from '@angular/core';
import { GruproviderService } from "./../gruprovider.service";
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import * as Parse from 'parse';
let parse = require('parse');
@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
}) 

export class VerificationPage implements OnInit {

  verificationCode: string;
  numbers: any;

  constructor(public navigate: NavController, private nativePageTransitions: NativePageTransitions, public provider : GruproviderService) { }

  ngOnInit() {
    console.log(this.provider.email,
                this.provider.password,
                this.provider.phoneNumber,
                this.provider.company)
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
    this.navigate.navigateRoot("/add-towing");
  
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
    this.navigate.navigateRoot("/verify-password");
  
  }
  add(input){
    this.numbers += input.toString();
    console.log(this.numbers);
 }

numbersOnly(input){
 var regularExp = /[^0-9]/;
 input.value = input.value.replace(regularExp, "");
}


  gotoNextField(nextElement){
    nextElement.setFocus();
  }

  navigateFoward(){

    let options: NativeTransitionOptions = {
       direction: 'left',
       duration: 200,
       slowdownfactor: -1,
       slidePixels: 20,
       iosdelay: 100, 
       androiddelay: 100,
      }

      this.numbers = (<HTMLInputElement>document.getElementById("one")).value.toString();
      this.numbers += (<HTMLInputElement>document.getElementById("two")).value.toString();
      this.numbers += (<HTMLInputElement>document.getElementById("three")).value.toString();
      this.numbers += (<HTMLInputElement>document.getElementById("four")).value.toString();

      console.log('transition');
      Parse.Cloud.run('setVerified', { userId: Parse.User.current().id, number: this.numbers} )
      .then((result) => {
        if(result.success == true){
         this.nativePageTransitions.slide(options);
         this.navigate.navigateRoot('/metodo-pago');
        }else{
          console.log('NO SON IGUALES LOS NUMEROS')
        }
      });
        console.log(this.numbers);
    }

 
  reSendCode() {
    this.verificationCode = (Math.floor(Math.random() * 9999)).toString(10);
    if (this.verificationCode.length != 4) {
      this.verificationCode = this.verificationCode + "1";
    }
    Parse.User.current().set('verificationCode', this.verificationCode)
    Parse.User.current().save().then((savedUser) => {
      Parse.Cloud.run('sendVerificationCode', {
        userId: Parse.User.current().id,
        phoneNumber: Parse.User.current().get('phoneNumber')
      }).then((result) => {
        console.log(result);
        return true;
      }, (error) => {
        console.log(error);
        return false;
      })
    }, (error) => {
      console.log(error)
      return false;
    })
  }
    
}


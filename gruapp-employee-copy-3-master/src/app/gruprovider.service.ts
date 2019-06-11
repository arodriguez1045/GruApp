import { Injectable } from '@angular/core';
import * as Parse from 'parse';


let parse = require('parse');

@Injectable({
  providedIn: 'root'
})
export class GruproviderService {

email : string;
nombre : string;
phoneNumber : string;
role : string;
password : string;
latitud: number;
longitud: number
username : string;
company: any;
verificationCode: any;
currentUser: any;
employeeId: any;
serviceId : any; //para saber que servicio se aceptó
photo:any;
quoteId:any;

  constructor() { parse.serverURL = 'https://parseapi.back4app.com/';
  Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8");  }

  sendCode(code){
    Parse.Cloud.run('sendVerificationCode', {
      verificationCode: code,
      userId: Parse.User.current().id,
      phoneNumber: Parse.User.current().get('phoneNumber')
    }).then((result) => {
      console.log(result);
      return true;
    }, (error) => {
      console.log(error);
      return false;
    })
   }

  signUp() {
    console.log("enter SingUP(): ", this.verificationCode);
    if(this.verificationCode ==null)
    {
    this.verificationCode = (Math.floor(Math.random() * 9999)).toString(10);
    }

    if (this.verificationCode.length != 4) {
      this.verificationCode = this.verificationCode + "1";
    }
    //Used to catch the error thrown by the signUp() function
    var no = false;
    const user = new Parse.User();
    user.set('email', this.email);
    user.set('phoneNumber', '+1' + this.phoneNumber);
    user.set('role', this.role);
    user.set('name', this.nombre);
    user.set('username', this.username);
    user.set('password', this.password);
    user.set('verificationCode', this.verificationCode);
    user.set("role", "E");
    user.set("verified", false);
    user.signUp().then((user) => {
      console.log("Code signedUp:" + this.verificationCode)
      this.currentUser = user;
      this.sendCode(this.verificationCode);
    }).catch((error) => {
      return false;
    });
    return true;
  }
}

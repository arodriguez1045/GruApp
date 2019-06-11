import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { AlertController } from '@ionic/angular';
import * as Parse from 'parse';

let parse = require('parse');

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  email : any;
  password: any;
  user: any;
  employeeId:any;
  phone:any;

  constructor(public navigate: NavController, public nativePageTransitions: NativePageTransitions, public alertCtrl: AlertController ) { 
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8"); 
  }

  ngOnInit() {
    if(Parse.User.current() == null)
    {
        this.navigate.navigateRoot('/register');
    }

    this.getInfo();
  }

  

  notVerified(){
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

  getInfo()
  { 
    this.employeeId = Parse.User.current().id;

    Parse.Cloud.run('getUser',{userId: this.employeeId}).then((result)=>
    {
        console.log(result);
        this.email = result.get('username');
        console.log(result.get('username'));
        this.user = result.get('name');
        console.log(result.get('name'));
        this.phone = result.get('phoneNumber');
        console.log(result.get('phoneNumber'));

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
   

  openPage() {

    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 100
     }

     console.log(options);
    this.nativePageTransitions.slide(options);
    this.navigate.navigateRoot("/get-service");
  
  }
}

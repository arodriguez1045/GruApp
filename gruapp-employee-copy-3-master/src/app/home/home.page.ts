import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as Parse from 'parse';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';


let parse = require('parse');

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  constructor(public NavCtrl:NavController, private nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
    setTimeout(() => {this.goHome();},4200);
    console.log("working");
    if(Parse.User.current() != null)
    {
      this.NavCtrl.navigateRoot("/get-service");
    }
  }

  goHome() {

    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8");
    Parse.User.currentAsync().then(user => {
      console.log('Logged user', user);
  
      user != null ? this.NavCtrl.navigateRoot('/get-service') : this.NavCtrl.navigateRoot('/tutorial');
    }, err => {
      console.log('Error getting logged user',err);
      let options: NativeTransitionOptions = {
        direction: 'left',
        duration: 200,
        slowdownfactor: -1,
        slidePixels: 20,
        iosdelay: 100, 
        androiddelay: 100,
       }
      this.nativePageTransitions.slide(options);
      this.NavCtrl.navigateRoot('/tutorial');
      
    });
      }

}

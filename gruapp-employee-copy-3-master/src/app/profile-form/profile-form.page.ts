import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import * as Parse from 'parse';

let parse = require('parse');

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.page.html',
  styleUrls: ['./profile-form.page.scss'],
})
export class ProfileFormPage implements OnInit {

  constructor(private camera: Camera, public navigate: NavController, public nativePageTransitions: NativePageTransitions) 
  {
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8"); 
   }

  user:any;
  phone:any;
  email:any;
  employeeId:any;
 

  ngOnInit() {

    if(Parse.User.current() == null)
    {
        this.navigate.navigateRoot('/register');
    }

    this.getInfo();

  }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
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

  updateClient()
{ 
    Parse.Cloud.run('updateClient', {
      userId: Parse.User.current().id,
      newName: this.user,
      newEmail: this.email
    }).then((result) => {
      console.log(result);
      // this.openPage();
   }, (error) =>{
      console.log(error);
    });
    this.openPage();
    
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
    // this.navigate.navigateRoot("/get-service");

  
  }

}

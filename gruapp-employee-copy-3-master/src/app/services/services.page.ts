import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import * as Parse from 'parse';
import {AlertController} from '@ionic/angular';
import { runInThisContext } from 'vm';
let parse = require('parse');

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  
  constructor(public alerCtrl:AlertController ,public navigate: NavController, public nativePageTransitions: NativePageTransitions) 
  {
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8"); 
   }
   employeeId:any;

   gasolina:any;
   gruaHid:any;
   gruaPlat:any;
   asistCar:any;
   cerrajeria:any;
   cargaBat:any;
   cambioGoma:any;
   servGrua:any;
   servEsp:any;
   allServ:any;
   grua:any;



  ngOnInit() {

    if(Parse.User.current() == null)
    {
      this.navigate.navigateRoot('/register');
    }
    this.employeeId = Parse.User.current().id;

    // this.getInfo();
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

  async Listo(){ //Alerta de pedido Exitoso
    const alert = await this.alerCtrl.create({
      header: '¡Alerta!',
      message: 'La información se guardo exitosamente',
      buttons: [
        {
          text: '¡Listo!',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.openPage();
          }
        }
      ]
    });
    await alert.present();

  }

  viewData()
  {


    if(this.gruaHid)
    {
      this.gruaHid= "Grua Hidraulica";
      console.log("Grua Hidraulica : ",this.gruaHid);
    }
    else
    {
      this.gruaHid= "";
      console.log("Grua Hidraulica: ",this.gruaHid);
    }

    if(this.gruaPlat)
    {
      this.gruaPlat= "Grua Plataforma";
      console.log("Grua Plataforma : ",this.gruaPlat);
    }
    else
    {
      this.gruaPlat= "";
      console.log("Grua Plataforma: ",this.gruaPlat);
    }


    if(this.asistCar)
    {
      this.asistCar= "Asistencia en Carretera";
      console.log("Asistencia en Carretera : ",this.asistCar);
    }
    else
    {
      this.asistCar= "";
      console.log("Asistencia en Carretera: ",this.asistCar);
    }



    //  _________________
    // GASOLINA
    if(this.gasolina)
    {
      this.gasolina = "Gasolina";
      console.log("Gasolina: ",this.gasolina);
    }
    else
    {
      this.gasolina= "";
      console.log("Gasolina: ",this.gasolina);
    }
      // CERRAJERIA
    if(this.cerrajeria)
    {
      this.cerrajeria = "Carrajeria";
      console.log("Carrajeria: ",this.cerrajeria);
    }
    else{
      this.cerrajeria = "";
      console.log("Carrajeria: ",this.cerrajeria);
    }

    // CARGA DE BATERIA
    if(this.cargaBat)
    {
      this.cargaBat = "Carga de Bateria";
      console.log("Carga de Bateria: ",this.cargaBat);
    }
    else{
      this.cargaBat ="";
      console.log("Carga de Bateria: ",this.cargaBat);
    }
    // CAMBIO DE GOMA
    if(this.cambioGoma)
    {
      this.cambioGoma = "Cambio de Goma";
      console.log("Cambio de Goma: ",this.cambioGoma);
    }
    else{
      this.cambioGoma = "";
      console.log("Cambio de Goma: ",this.cambioGoma);
    }
    //  Servicio de Grua
    if(this.servGrua)
    {
      this.servGrua= "Servicio de Grua";
      console.log("Servicio de Grua: ",this.servGrua);
    }
    else{
      this.servGrua = "";
      console.log("Servicio de Grua: ",this.servGrua);
    }
    //  Servicio Especial

    if(this.servEsp)
    {
      this.servEsp = "Servicio Especial";
      console.log("Servicio Especial: ",this.servEsp);

    }
    else
    {
      this.servEsp ="";
      console.log("Servicio Especial: ",this.servEsp);
    }

   
   
    this.allServ = this.gasolina + " "+ this.cerrajeria + " " + this.cargaBat +" "+ this.cambioGoma+" "+ this.servGrua+" "+ this.servEsp;
    console.log("All Service: ", this.allServ);

    this.grua= this.gruaHid + " " + this.gruaPlat +" " + this.asistCar;

    this.setInformation();
  }

  setInformation()
  {
    Parse.Cloud.run('editTowing',{userID:this.employeeId,typeTowing: this.grua,service:this.allServ}).then((result)=>
    {

       console.log(result);
       this.Listo();
      
    },
    (error)=>
    { 
      console.log(error);
    });
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
    this.navigate.navigateRoot("/get-service");
  
  }

}

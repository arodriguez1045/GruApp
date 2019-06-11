import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';

let parse = require('parse');
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
 email:any;
  constructor() {parse.serverURL = 'https://parseapi.back4app.com/';
  Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8");   }

  ngOnInit() {
  }

  resetPass(){
    Parse.User.requestPasswordReset(this.email).then(() => {
      // Password reset request was sent successfully
      if (typeof document !== 'undefined') console.log('Reset password email sent successfully');
      console.log('Reset password email sent successfully');
    }).catch((error) => {
      if (typeof document !== 'undefined') console.log(`Error while creating request to reset user password: ${JSON.stringify(error)}`);
      console.error('Error while creating request to reset user password', error);
    });
  }

}

import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { AlertController } from '@ionic/angular';
import * as Parse from 'parse';
var parse = require('parse');
var AccountPage = /** @class */ (function () {
    function AccountPage(navigate, nativePageTransitions, alertCtrl) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.alertCtrl = alertCtrl;
        parse.serverURL = 'https://parseapi.back4app.com/';
        Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8");
    }
    AccountPage.prototype.ngOnInit = function () {
    };
    AccountPage.prototype.notVerified = function () {
        var options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/verification");
    };
    AccountPage.prototype.goBack = function () {
        var options = {
            direction: 'right',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/get-service");
    };
    AccountPage.prototype.openPage = function () {
        var options = {
            direction: 'right',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/get-service");
    };
    AccountPage = tslib_1.__decorate([
        Component({
            selector: 'app-account',
            templateUrl: './account.page.html',
            styleUrls: ['./account.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, NativePageTransitions, AlertController])
    ], AccountPage);
    return AccountPage;
}());
export { AccountPage };
//# sourceMappingURL=account.page.js.map
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { AlertController } from "@ionic/angular";
import * as Parse from 'parse';
import { GruproviderService } from "../gruprovider.service";
var parse = require('parse');
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navigate, nativePageTransitions, alert, provider) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.alert = alert;
        this.provider = provider;
        parse.serverURL = 'https://parseapi.back4app.com/';
        Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8");
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.openPage = function () {
        var options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/verify-password");
    };
    RegisterPage.prototype.openPage2 = function () {
        var options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/get-service");
    };
    RegisterPage.prototype.changeRegister = function (register) {
        this.register = register;
        console.log("statusChange");
    };
    RegisterPage.prototype.alertLogIn = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Error',
                            message: 'Correo electrónico / Contraseña inválida.',
                            buttons: [{
                                    text: 'OK',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                        //this.popController.dismiss();
                                        //this.nav.navigateRoot("/sidemenu");
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.singIn = function () {
        var _this = this;
        Parse.User.logIn(this.email, this.password).then(function (resp) {
            console.log('Logged in successfully', resp);
            var currentUser = Parse.User.current(); //usuario actual logged
            _this.user = currentUser; //igual a variable global
            Parse.Cloud.run('ifVerified', { userId: Parse.User.current().id }).then(function (response) {
                if (response) {
                    _this.openPage2(); //navegar
                }
                else {
                    _this.notVerified();
                }
            });
        }, function (err) {
            console.log('Error logging in', err);
            _this.alertLogIn();
        });
    };
    RegisterPage.prototype.signUp = function () {
        this.provider.email = this.email;
        this.provider.nombre = this.name;
        this.provider.phoneNumber = this.phoneNumber;
        this.provider.role = this.role;
        this.provider.password = this.password;
        this.provider.username = this.email;
        this.provider.company = this.company;
        console.log(this.name);
        this.openPage();
    };
    RegisterPage.prototype.notVerified = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Error',
                            message: 'Su cuenta no ha sido verificada.',
                            buttons: [{
                                    text: 'OK',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.navigate.navigateForward('/num-verification');
                                        console.log('Confirm Cancel');
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.alertError = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Error',
                            message: 'Correo electrónico / Contraseña inválida.',
                            buttons: [{
                                    text: 'OK',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, NativePageTransitions, AlertController, GruproviderService])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map
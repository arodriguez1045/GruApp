import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { GruproviderService } from "./../gruprovider.service";
import { AlertController } from "@ionic/angular";
import * as Parse from 'parse';
var parse = require('parse');
var VerifyPasswordPage = /** @class */ (function () {
    function VerifyPasswordPage(navigate, nativePageTransitions, provider, alert) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.provider = provider;
        this.alert = alert;
        parse.serverURL = 'https://parseapi.back4app.com/';
        Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8");
    }
    VerifyPasswordPage.prototype.ngOnInit = function () {
    };
    VerifyPasswordPage.prototype.openPage = function () {
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
    VerifyPasswordPage.prototype.goBack = function () {
        var options = {
            direction: 'right',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/register");
    };
    VerifyPasswordPage.prototype.confirmPass = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.provider.password = this.password;
                        if (!(this.password == this.verifiedPassword && this.provider.signUp() == true)) return [3 /*break*/, 1];
                        this.provider.signUp();
                        this.openPage();
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(this.password != this.verifiedPassword)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.alert.create({
                                header: 'Error',
                                message: 'Las contraseñas no son iguales',
                                buttons: [{
                                        text: 'OK',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }]
                            })];
                    case 2:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        if (this.password == this.verifiedPassword && this.provider.signUp() == false) {
                            this.presentAlert();
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    VerifyPasswordPage.prototype.presentAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Error',
                            message: 'Ya existe un usario con ese correo electronico',
                            buttons: [{
                                    text: 'OK',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                        _this.navigate.navigateRoot('/registro');
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
    VerifyPasswordPage = tslib_1.__decorate([
        Component({
            selector: 'app-verify-password',
            templateUrl: './verify-password.page.html',
            styleUrls: ['./verify-password.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, NativePageTransitions,
            GruproviderService, AlertController])
    ], VerifyPasswordPage);
    return VerifyPasswordPage;
}());
export { VerifyPasswordPage };
//# sourceMappingURL=verify-password.page.js.map
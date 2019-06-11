import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as Parse from 'parse';
var parse = require('parse');
var GruproviderService = /** @class */ (function () {
    function GruproviderService() {
        parse.serverURL = 'https://parseapi.back4app.com/';
        Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8");
    }
    GruproviderService.prototype.sendCode = function (code) {
        Parse.Cloud.run('sendVerificationCode', {
            verificationCode: code,
            userId: Parse.User.current().id,
            phoneNumber: Parse.User.current().get('phoneNumber')
        }).then(function (result) {
            console.log(result);
            return true;
        }, function (error) {
            console.log(error);
            return false;
        });
    };
    GruproviderService.prototype.signUp = function () {
        var _this = this;
        this.verificationCode = (Math.floor(Math.random() * 9999)).toString(10);
        if (this.verificationCode.length != 4) {
            this.verificationCode = this.verificationCode + "1";
        }
        //Used to catch the error thrown by the signUp() function
        var no = false;
        var user = new Parse.User();
        user.set('email', this.email);
        user.set('phoneNumber', '+1' + this.phoneNumber);
        user.set('role', this.role);
        user.set('name', this.nombre);
        user.set('username', this.username);
        user.set('password', this.password);
        user.set('verificationCode', this.verificationCode);
        user.set("role", "E");
        user.set("verified", false);
        user.signUp().then(function (user) {
            console.log("Code signedUp:" + _this.verificationCode);
            _this.currentUser = user;
            _this.sendCode(_this.verificationCode);
        }).catch(function (error) {
            return false;
        });
        return true;
    };
    GruproviderService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], GruproviderService);
    return GruproviderService;
}());
export { GruproviderService };
//# sourceMappingURL=gruprovider.service.js.map
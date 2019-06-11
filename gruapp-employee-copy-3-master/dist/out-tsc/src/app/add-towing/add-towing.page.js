import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { Location } from '@angular/common';
import * as Parse from 'parse';
var parse = require('parse');
var AddTowingPage = /** @class */ (function () {
    function AddTowingPage(navigate, nativePageTransitions, location) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.location = location;
        parse.serverURL = 'https://parseapi.back4app.com/';
        Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8");
    }
    AddTowingPage.prototype.ngOnInit = function () {
    };
    AddTowingPage.prototype.saveTowing = function () {
        var _this = this;
        Parse.Cloud.run('createTowing', { userId: Parse.User.current().id, color: this.color, make: this.marca, year: this.year, model: this.modelo, licensePlateNum: this.tablilla }).then(function (result) {
            _this.location.back();
        });
    };
    AddTowingPage.prototype.openPage = function () {
        var options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/manage-document");
    };
    AddTowingPage.prototype.goBack = function () {
        var options = {
            direction: 'right',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/verification");
    };
    AddTowingPage = tslib_1.__decorate([
        Component({
            selector: 'app-add-towing',
            templateUrl: './add-towing.page.html',
            styleUrls: ['./add-towing.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, NativePageTransitions,
            Location])
    ], AddTowingPage);
    return AddTowingPage;
}());
export { AddTowingPage };
//# sourceMappingURL=add-towing.page.js.map
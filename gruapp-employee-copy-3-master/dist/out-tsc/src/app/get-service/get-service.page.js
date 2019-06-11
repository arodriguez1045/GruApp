import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import * as Parse from 'parse';
import { GruproviderService } from "../gruprovider.service";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
var parse = require('parse');
var GetServicePage = /** @class */ (function () {
    function GetServicePage(geolocation, locationAccuracy, menu, navigate, nativePageTransitions, provider) {
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.menu = menu;
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.provider = provider;
        this.length = 0;
        parse.serverURL = 'https://parseapi.back4app.com/';
        Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8");
    }
    GetServicePage.prototype.ngOnInit = function () {
        console.log(this.provider.nombre);
        this.getCurrentLocation();
        // this.getServices()
    };
    GetServicePage.prototype.openCustom = function () {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    };
    GetServicePage.prototype.getCurrentLocation = function () {
        var _this = this;
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                // the accuracy option will be ignored by iOS
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () { return console.log('Request successful'); }, function (error) { return console.log('Error requesting location permissions', error); });
            }
        });
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.provider.latitud = resp.coords.latitude;
            _this.provider.longitud = resp.coords.longitude;
            console.log(_this.provider.longitud);
            console.log(_this.provider.latitud);
            _this.getServices();
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
        });
    };
    GetServicePage.prototype.openPage = function () {
        var options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/booking");
    };
    GetServicePage.prototype.openPage3 = function () {
        var options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
    };
    GetServicePage.prototype.getServices = function () {
        var _this = this;
        Parse.Cloud.run('getServiceRequestsByDistance', { driverLatitud: this.provider.latitud, driverLongitud: this.provider.longitud }).then(function (response) {
            for (var i = 0; i < response.length; i++) {
                response[i] = response[i].toJSON();
            }
            _this.serviceRequests = response;
            _this.length = _this.serviceRequests.length;
            console.log(_this.serviceRequests);
        }, function (error) {
            console.log(error);
        });
    };
    GetServicePage.prototype.logOut = function () {
        var _this = this;
        Parse.User.logOut().then(function (resp) {
            console.log('Logged out successfully', resp);
            _this.openPage3();
            _this.navigate.navigateRoot('/register');
        }, function (err) {
            //console.log('Error logging out', err);
        });
    };
    GetServicePage = tslib_1.__decorate([
        Component({
            selector: 'app-get-service',
            templateUrl: './get-service.page.html',
            styleUrls: ['./get-service.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Geolocation, LocationAccuracy, MenuController, NavController, NativePageTransitions, GruproviderService])
    ], GetServicePage);
    return GetServicePage;
}());
export { GetServicePage };
//# sourceMappingURL=get-service.page.js.map
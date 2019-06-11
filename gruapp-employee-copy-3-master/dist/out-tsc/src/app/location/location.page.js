import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { NavController } from "@ionic/angular";
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { GruproviderService } from "../gruprovider.service";
var LocationPage = /** @class */ (function () {
    function LocationPage(geolocation, locationAccuracy, navigate, nativePageTransitions, provider) {
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.provider = provider;
    }
    LocationPage.prototype.ngOnInit = function () {
    };
    LocationPage.prototype.acceptLocation = function () {
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
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
        });
        this.navigate.navigateRoot("/register");
        console.log("is working");
    };
    LocationPage.prototype.openPage = function () {
        var options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/register");
    };
    LocationPage = tslib_1.__decorate([
        Component({
            selector: 'app-location',
            templateUrl: './location.page.html',
            styleUrls: ['./location.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Geolocation, LocationAccuracy,
            NavController, NativePageTransitions, GruproviderService])
    ], LocationPage);
    return LocationPage;
}());
export { LocationPage };
//# sourceMappingURL=location.page.js.map
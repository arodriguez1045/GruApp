import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GruproviderService } from "./../gruprovider.service";
import { NavController } from "@ionic/angular";
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
var VerificationPage = /** @class */ (function () {
    function VerificationPage(navigate, nativePageTransitions, provider) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.provider = provider;
    }
    VerificationPage.prototype.ngOnInit = function () {
        console.log(this.provider.email, this.provider.password, this.provider.phoneNumber, this.provider.company);
    };
    VerificationPage.prototype.openPage = function () {
        var options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/add-towing");
    };
    VerificationPage.prototype.goBack = function () {
        var options = {
            direction: 'right',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/verify-password");
    };
    VerificationPage = tslib_1.__decorate([
        Component({
            selector: 'app-verification',
            templateUrl: './verification.page.html',
            styleUrls: ['./verification.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, NativePageTransitions, GruproviderService])
    ], VerificationPage);
    return VerificationPage;
}());
export { VerificationPage };
//# sourceMappingURL=verification.page.js.map
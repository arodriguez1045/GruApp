import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
var ServicesPage = /** @class */ (function () {
    function ServicesPage(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    ServicesPage.prototype.ngOnInit = function () {
    };
    ServicesPage.prototype.goBack = function () {
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
    ServicesPage.prototype.openPage = function () {
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
    ServicesPage = tslib_1.__decorate([
        Component({
            selector: 'app-services',
            templateUrl: './services.page.html',
            styleUrls: ['./services.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, NativePageTransitions])
    ], ServicesPage);
    return ServicesPage;
}());
export { ServicesPage };
//# sourceMappingURL=services.page.js.map
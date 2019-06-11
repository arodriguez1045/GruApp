import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
var BookingPage = /** @class */ (function () {
    function BookingPage(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    BookingPage.prototype.ngOnInit = function () {
    };
    BookingPage.prototype.openPage = function () {
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
    BookingPage.prototype.goBack = function () {
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
    BookingPage = tslib_1.__decorate([
        Component({
            selector: 'app-booking',
            templateUrl: './booking.page.html',
            styleUrls: ['./booking.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, NativePageTransitions])
    ], BookingPage);
    return BookingPage;
}());
export { BookingPage };
//# sourceMappingURL=booking.page.js.map
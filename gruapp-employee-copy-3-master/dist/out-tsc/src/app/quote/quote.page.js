import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
var QuotePage = /** @class */ (function () {
    function QuotePage(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    QuotePage.prototype.ngOnInit = function () {
    };
    QuotePage.prototype.openPage = function () {
        var options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        // this.navigate.navigateRoot("/quote");
    };
    QuotePage.prototype.goBack = function () {
        var options = {
            direction: 'right',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        // this.navigate.navigateRoot("/get-service");
    };
    QuotePage = tslib_1.__decorate([
        Component({
            selector: 'app-quote',
            templateUrl: './quote.page.html',
            styleUrls: ['./quote.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, NativePageTransitions])
    ], QuotePage);
    return QuotePage;
}());
export { QuotePage };
//# sourceMappingURL=quote.page.js.map
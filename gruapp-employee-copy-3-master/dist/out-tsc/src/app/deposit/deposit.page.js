import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
var DepositPage = /** @class */ (function () {
    function DepositPage(menu, navigate, nativePageTransitions) {
        this.menu = menu;
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    DepositPage.prototype.ngOnInit = function () {
    };
    DepositPage.prototype.openCustom = function () {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
        console.log("is working");
    };
    DepositPage.prototype.goBack = function () {
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
    DepositPage = tslib_1.__decorate([
        Component({
            selector: 'app-deposit',
            templateUrl: './deposit.page.html',
            styleUrls: ['./deposit.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [MenuController, NavController, NativePageTransitions])
    ], DepositPage);
    return DepositPage;
}());
export { DepositPage };
//# sourceMappingURL=deposit.page.js.map
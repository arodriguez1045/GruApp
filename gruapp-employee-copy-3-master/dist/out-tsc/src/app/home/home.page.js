import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var HomePage = /** @class */ (function () {
    function HomePage(NavCtrl) {
        this.NavCtrl = NavCtrl;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.goHome(); }, 4200);
        console.log("working");
    };
    HomePage.prototype.goHome = function () {
        this.NavCtrl.navigateRoot("/tutorial");
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map
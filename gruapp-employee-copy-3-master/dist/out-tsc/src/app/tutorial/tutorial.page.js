import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import * as Parse from 'parse';
var parse = require('parse');
var TutorialPage = /** @class */ (function () {
    function TutorialPage(nativePageTransitions, navigate) {
        this.nativePageTransitions = nativePageTransitions;
        this.navigate = navigate;
        parse.serverURL = 'https://parseapi.back4app.com/';
        Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8");
        var install = new Parse.Installation();
    }
    TutorialPage.prototype.ngOnInit = function () {
    };
    TutorialPage.prototype.openPage = function () {
        var options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/location");
    };
    TutorialPage = tslib_1.__decorate([
        Component({
            selector: 'app-tutorial',
            templateUrl: './tutorial.page.html',
            styleUrls: ['./tutorial.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NativePageTransitions, NavController])
    ], TutorialPage);
    return TutorialPage;
}());
export { TutorialPage };
//# sourceMappingURL=tutorial.page.js.map
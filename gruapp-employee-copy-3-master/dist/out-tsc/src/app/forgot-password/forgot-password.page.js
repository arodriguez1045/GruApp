import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as Parse from 'parse';
var parse = require('parse');
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage() {
        parse.serverURL = 'https://parseapi.back4app.com/';
        Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8");
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
    };
    ForgotPasswordPage.prototype.resetPass = function () {
        Parse.User.requestPasswordReset(this.email).then(function () {
            // Password reset request was sent successfully
            if (typeof document !== 'undefined')
                console.log('Reset password email sent successfully');
            console.log('Reset password email sent successfully');
        }).catch(function (error) {
            if (typeof document !== 'undefined')
                console.log("Error while creating request to reset user password: " + JSON.stringify(error));
            console.error('Error while creating request to reset user password', error);
        });
    };
    ForgotPasswordPage = tslib_1.__decorate([
        Component({
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.page.html',
            styleUrls: ['./forgot-password.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());
export { ForgotPasswordPage };
//# sourceMappingURL=forgot-password.page.js.map
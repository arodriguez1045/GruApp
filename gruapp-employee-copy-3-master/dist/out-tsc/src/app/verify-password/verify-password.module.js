import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VerifyPasswordPage } from './verify-password.page';
var routes = [
    {
        path: '',
        component: VerifyPasswordPage
    }
];
var VerifyPasswordPageModule = /** @class */ (function () {
    function VerifyPasswordPageModule() {
    }
    VerifyPasswordPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [VerifyPasswordPage]
        })
    ], VerifyPasswordPageModule);
    return VerifyPasswordPageModule;
}());
export { VerifyPasswordPageModule };
//# sourceMappingURL=verify-password.module.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VerificationPage } from './verification.page';
var routes = [
    {
        path: '',
        component: VerificationPage
    }
];
var VerificationPageModule = /** @class */ (function () {
    function VerificationPageModule() {
    }
    VerificationPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [VerificationPage]
        })
    ], VerificationPageModule);
    return VerificationPageModule;
}());
export { VerificationPageModule };
//# sourceMappingURL=verification.module.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DepositPage } from './deposit.page';
var routes = [
    {
        path: '',
        component: DepositPage
    }
];
var DepositPageModule = /** @class */ (function () {
    function DepositPageModule() {
    }
    DepositPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DepositPage]
        })
    ], DepositPageModule);
    return DepositPageModule;
}());
export { DepositPageModule };
//# sourceMappingURL=deposit.module.js.map
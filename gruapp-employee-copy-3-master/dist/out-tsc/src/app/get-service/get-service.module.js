import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GetServicePage } from './get-service.page';
var routes = [
    {
        path: '',
        component: GetServicePage
    }
];
var GetServicePageModule = /** @class */ (function () {
    function GetServicePageModule() {
    }
    GetServicePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [GetServicePage]
        })
    ], GetServicePageModule);
    return GetServicePageModule;
}());
export { GetServicePageModule };
//# sourceMappingURL=get-service.module.js.map
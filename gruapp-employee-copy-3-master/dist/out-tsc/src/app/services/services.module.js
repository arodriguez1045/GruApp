import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ServicesPage } from './services.page';
var routes = [
    {
        path: '',
        component: ServicesPage
    }
];
var ServicesPageModule = /** @class */ (function () {
    function ServicesPageModule() {
    }
    ServicesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ServicesPage]
        })
    ], ServicesPageModule);
    return ServicesPageModule;
}());
export { ServicesPageModule };
//# sourceMappingURL=services.module.js.map
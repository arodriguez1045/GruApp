import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddTowingPage } from './add-towing.page';
var routes = [
    {
        path: '',
        component: AddTowingPage
    }
];
var AddTowingPageModule = /** @class */ (function () {
    function AddTowingPageModule() {
    }
    AddTowingPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AddTowingPage]
        })
    ], AddTowingPageModule);
    return AddTowingPageModule;
}());
export { AddTowingPageModule };
//# sourceMappingURL=add-towing.module.js.map
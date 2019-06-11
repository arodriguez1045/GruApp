import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfileFormPage } from './profile-form.page';
var routes = [
    {
        path: '',
        component: ProfileFormPage
    }
];
var ProfileFormPageModule = /** @class */ (function () {
    function ProfileFormPageModule() {
    }
    ProfileFormPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProfileFormPage]
        })
    ], ProfileFormPageModule);
    return ProfileFormPageModule;
}());
export { ProfileFormPageModule };
//# sourceMappingURL=profile-form.module.js.map
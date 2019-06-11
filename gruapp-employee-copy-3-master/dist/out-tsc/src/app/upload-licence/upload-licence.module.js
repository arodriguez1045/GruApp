import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UploadLicencePage } from './upload-licence.page';
var routes = [
    {
        path: '',
        component: UploadLicencePage
    }
];
var UploadLicencePageModule = /** @class */ (function () {
    function UploadLicencePageModule() {
    }
    UploadLicencePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UploadLicencePage]
        })
    ], UploadLicencePageModule);
    return UploadLicencePageModule;
}());
export { UploadLicencePageModule };
//# sourceMappingURL=upload-licence.module.js.map
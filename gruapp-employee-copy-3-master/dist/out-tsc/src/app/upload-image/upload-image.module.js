import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UploadImagePage } from './upload-image.page';
var routes = [
    {
        path: '',
        component: UploadImagePage
    }
];
var UploadImagePageModule = /** @class */ (function () {
    function UploadImagePageModule() {
    }
    UploadImagePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UploadImagePage]
        })
    ], UploadImagePageModule);
    return UploadImagePageModule;
}());
export { UploadImagePageModule };
//# sourceMappingURL=upload-image.module.js.map
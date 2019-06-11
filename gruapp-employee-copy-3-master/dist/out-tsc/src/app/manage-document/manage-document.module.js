import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ManageDocumentPage } from './manage-document.page';
var routes = [
    {
        path: '',
        component: ManageDocumentPage
    }
];
var ManageDocumentPageModule = /** @class */ (function () {
    function ManageDocumentPageModule() {
    }
    ManageDocumentPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ManageDocumentPage]
        })
    ], ManageDocumentPageModule);
    return ManageDocumentPageModule;
}());
export { ManageDocumentPageModule };
//# sourceMappingURL=manage-document.module.js.map
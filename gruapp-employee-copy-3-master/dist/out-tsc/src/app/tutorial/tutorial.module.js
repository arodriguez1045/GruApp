import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TutorialPage } from './tutorial.page';
var routes = [
    {
        path: '',
        component: TutorialPage
    }
];
var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
            ],
            declarations: [TutorialPage]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());
export { TutorialPageModule };
//# sourceMappingURL=tutorial.module.js.map
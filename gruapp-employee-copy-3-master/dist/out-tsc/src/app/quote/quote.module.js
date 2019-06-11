import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { QuotePage } from './quote.page';
var routes = [
    {
        path: '',
        component: QuotePage
    }
];
var QuotePageModule = /** @class */ (function () {
    function QuotePageModule() {
    }
    QuotePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [QuotePage]
        })
    ], QuotePageModule);
    return QuotePageModule;
}());
export { QuotePageModule };
//# sourceMappingURL=quote.module.js.map
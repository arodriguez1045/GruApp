import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { QuoteHistoryPage } from './quote-history.page';
var routes = [
    {
        path: '',
        component: QuoteHistoryPage
    }
];
var QuoteHistoryPageModule = /** @class */ (function () {
    function QuoteHistoryPageModule() {
    }
    QuoteHistoryPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [QuoteHistoryPage]
        })
    ], QuoteHistoryPageModule);
    return QuoteHistoryPageModule;
}());
export { QuoteHistoryPageModule };
//# sourceMappingURL=quote-history.module.js.map
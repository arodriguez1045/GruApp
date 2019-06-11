import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BookingPage } from './booking.page';
var routes = [
    {
        path: '',
        component: BookingPage
    }
];
var BookingPageModule = /** @class */ (function () {
    function BookingPageModule() {
    }
    BookingPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [BookingPage]
        })
    ], BookingPageModule);
    return BookingPageModule;
}());
export { BookingPageModule };
//# sourceMappingURL=booking.module.js.map
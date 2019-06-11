import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'verification', loadChildren: './verification/verification.module#VerificationPageModule' },
    { path: 'verification', loadChildren: './verification/verification.module#VerificationPageModule' },
    { path: 'verify-password', loadChildren: './verify-password/verify-password.module#VerifyPasswordPageModule' },
    { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialPageModule' },
    { path: 'add-towing', loadChildren: './add-towing/add-towing.module#AddTowingPageModule' },
    { path: 'manage-document', loadChildren: './manage-document/manage-document.module#ManageDocumentPageModule' },
    { path: 'get-service', loadChildren: './get-service/get-service.module#GetServicePageModule' },
    { path: 'upload-image', loadChildren: './upload-image/upload-image.module#UploadImagePageModule' },
    { path: 'deposit', loadChildren: './deposit/deposit.module#DepositPageModule' },
    { path: 'booking', loadChildren: './booking/booking.module#BookingPageModule' },
    { path: 'services', loadChildren: './services/services.module#ServicesPageModule' },
    { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
    { path: 'upload-licence', loadChildren: './upload-licence/upload-licence.module#UploadLicencePageModule' },
    { path: 'profile-form', loadChildren: './profile-form/profile-form.module#ProfileFormPageModule' },
    { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
    { path: 'test', loadChildren: './test/test.module#TestPageModule' },
    { path: 'quote', loadChildren: './quote/quote.module#QuotePageModule' },
    { path: 'quote-history', loadChildren: './quote-history/quote-history.module#QuoteHistoryPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { NavController } from "@ionic/angular";
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
var ProfileFormPage = /** @class */ (function () {
    function ProfileFormPage(camera, navigate, nativePageTransitions) {
        this.camera = camera;
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    ProfileFormPage.prototype.ngOnInit = function () {
    };
    ProfileFormPage.prototype.openCamera = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    ProfileFormPage.prototype.goBack = function () {
        var options = {
            direction: 'right',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/manage-document");
    };
    ProfileFormPage.prototype.openPage = function () {
        var options = {
            direction: 'right',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/account");
        // this.navigate.navigateRoot("/get-service");
    };
    ProfileFormPage = tslib_1.__decorate([
        Component({
            selector: 'app-profile-form',
            templateUrl: './profile-form.page.html',
            styleUrls: ['./profile-form.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Camera, NavController, NativePageTransitions])
    ], ProfileFormPage);
    return ProfileFormPage;
}());
export { ProfileFormPage };
//# sourceMappingURL=profile-form.page.js.map
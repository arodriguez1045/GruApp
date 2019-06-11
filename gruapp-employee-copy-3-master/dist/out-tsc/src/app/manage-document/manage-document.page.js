import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { NavController } from "@ionic/angular";
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
var ManageDocumentPage = /** @class */ (function () {
    function ManageDocumentPage(camera, navigate, nativePageTransitions) {
        this.camera = camera;
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    ManageDocumentPage.prototype.ngOnInit = function () {
    };
    ManageDocumentPage.prototype.openCamera = function () {
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
    ManageDocumentPage.prototype.openPage = function () {
        var options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/profile-form");
    };
    ManageDocumentPage.prototype.goBack = function () {
        var options = {
            direction: 'right',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/add-towing");
    };
    ManageDocumentPage = tslib_1.__decorate([
        Component({
            selector: 'app-manage-document',
            templateUrl: './manage-document.page.html',
            styleUrls: ['./manage-document.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Camera, NavController, NativePageTransitions])
    ], ManageDocumentPage);
    return ManageDocumentPage;
}());
export { ManageDocumentPage };
//# sourceMappingURL=manage-document.page.js.map
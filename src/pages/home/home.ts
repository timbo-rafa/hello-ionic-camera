import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI, //FILE_URI
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  }

  constructor(public navCtrl: NavController, private camera: Camera) {
  }

  takePicture() {
    this.options.sourceType = this.camera.PictureSourceType.CAMERA
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:

      var image: HTMLImageElement
      image = <HTMLImageElement> document.getElementById("img")
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      image.src = base64Image
     }, (err) => {
      console.log('Error:', err) 
      // Handle error
     });
  }

  loadPicture() {
    this.options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:

      var image: HTMLImageElement
      image = <HTMLImageElement> document.getElementById("img")
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      image.src = base64Image
     }, (err) => {
      console.log('Error:', err) 
      // Handle error
     });
  }

}

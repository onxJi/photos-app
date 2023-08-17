import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IPhotos } from './IPhotos.interface';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  pictures: IPhotos[] = [];
  fechaPhoto: Date;
  async addNewPhotos(){
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    if(photo.webPath) {
      this.fechaPhoto = new Date();
      this.pictures.unshift({uri: photo.webPath, fecha: this.fechaPhoto});
    }
    console.log(this.pictures);
  }
  constructor() {
    
  }
}

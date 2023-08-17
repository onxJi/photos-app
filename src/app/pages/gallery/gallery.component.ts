import { Component} from '@angular/core';
import { IPhotos } from 'src/app/services/IPhotos.interface';
import { PhotoUri } from 'src/app/services/photoUri.service';
import { PhotosService } from 'src/app/services/photos.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {
  pictures: IPhotos[];
  constructor(
    private photoService: PhotosService,
    private photoUri: PhotoUri){
    this.pictures = this.photoService.pictures;
  }
  viewDetails(photoUrl: string, fechaPhoto: Date){
    this.photoUri.viewDetailsPhoto(photoUrl,fechaPhoto);

  }
  async takePhotos(){
    await this.photoService.addNewPhotos();
    
  }
}

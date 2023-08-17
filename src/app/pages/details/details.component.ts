import { Component } from '@angular/core';
import { PhotoUri } from 'src/app/services/photoUri.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent {
  fecha: Date;
  photoUri: string;
  constructor(private photoDetail: PhotoUri){
    this.photoUri = this.photoDetail.photoRute;
    this.fecha = this.photoDetail.fecha;
  }
}

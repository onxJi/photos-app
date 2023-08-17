import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PhotoUri{
    photoRute: string;
    fecha: Date;
    viewDetailsPhoto(photo: string,fecha:Date):void{
        this.photoRute = photo;
        this.fecha = fecha;
    }
}
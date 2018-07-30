import { Injectable } from '@angular/core';
import {ImageConverter} from '../image-converter/image-converter';
import {myaImage} from '../image-maps/mya-image';
import {brianImage} from '../image-maps/brian-image';
import {fishImage} from '../image-maps/fish-image';

@Injectable()
export class ImageService {

  constructor() { }

  getImages(): number[] {
    return [
      1,
      2,
      3
    ];
  }

  getImage(imageId: number): ImageConverter {
    if (imageId === 1) {
      return myaImage;
    } else if (imageId === 2) {
      return brianImage;
    } else {
      return fishImage;
    }
  }
}

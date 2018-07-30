import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image-service/image.service';

@Component({
  selector: 'app-image-navigation',
  templateUrl: './image-navigation.component.html',
  styleUrls: ['./image-navigation.component.css']
})
export class ImageNavigationComponent implements OnInit {
  images: number[];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

}

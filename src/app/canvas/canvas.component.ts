import {Component, Input, OnInit} from '@angular/core';
import {SquareData} from '../interfaces/square-data';
import {myaImage } from '../image-maps/mya-image';
import {brianImage} from '../image-maps/brian-image';
import {fishImage} from '../image-maps/fish-image';
import {ImageService} from '../image-service/image.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  @Input() image: number;
  paintSquares: SquareData[][];

  constructor(private imageService: ImageService ) { }

  ngOnInit() {
    this.paintSquares = this.imageService.getImage(this.image).getImageData();
  }
}

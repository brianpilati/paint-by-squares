import { Component, OnInit } from '@angular/core';
import {SquareData} from '../interfaces/square-data';
import {myaImage } from '../image-maps/mya-image';
import {brianImage} from '../image-maps/brian-image';
import {fishImage} from '../image-maps/fish-image';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  paintSquares: SquareData[][];

  constructor() { }

  ngOnInit() {
    // this.paintSquares = myaImage.getImageData();
    // this.paintSquares = brianImage.getImageData();
    this.paintSquares = fishImage.getImageData();
  }
}

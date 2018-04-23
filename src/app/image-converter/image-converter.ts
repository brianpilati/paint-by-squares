import {SquareData} from '../interfaces/square-data';

export class ImageConverter {
  private imageMap: number[][];
  private key: Array<SquareData>;
  private imageData: SquareData[][];

  constructor(
    _key_: Array<SquareData>,
    _imageMap_: number[][]
  ) {
    this.imageMap = _imageMap_;
    this.key = _key_;
    this.imageData = [new Array<SquareData>()];
    this.convertImage();
  }

  getImageData(): SquareData[][] {
    return this.imageData;
  }

  private buildKey(): { key: string; } {
    const localMap: any = Object();

    this.key.forEach((squareData: SquareData) => {
      localMap[squareData.squareNumber] = squareData.class;
    });

    return localMap;
  }

  private convertImage(): void {
    const localMap = this.buildKey();
    this.imageMap.forEach( row => {
      const rowMap: Array<SquareData>  = new Array<SquareData>();
      row.forEach( input => {
        rowMap.push({
          squareNumber: input,
          class: localMap[input]
        });
      });
      console.log(this.imageData);
      this.imageData.push(rowMap);
    });

    console.log(this.imageData);
  }
}


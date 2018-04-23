import {ImageConverter} from '../image-converter/image-converter';

export const brianImage = new ImageConverter(
  [{
    squareNumber: 1,
    class: 'red'
  }, {
    squareNumber: 2,
    class: 'green'
  }, {
    squareNumber: 3,
    class: 'purple'
  }, {
    squareNumber: 4,
    class: 'black'
  }],
  [
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 4 , 4 , 4 , 0 , 0 , 0 ],
    [ 0 , 3 , 0 , 0 , 3 , 0 , 0 ],
    [ 0 , 2 , 0 , 0 , 2 , 0 , 0 ],
    [ 0 , 1 , 1 , 1 , 0 , 0 , 0 ],
    [ 0 , 4 , 4 , 4 , 0 , 0 , 0 ],
    [ 0 , 3 , 0 , 0 , 3 , 0 , 0 ],
    [ 0 , 2 , 0 , 0 , 2 , 0 , 0 ],
    [ 0 , 1 , 1 , 1 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
  ]
);

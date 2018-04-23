import {ImageConverter} from '../image-converter/image-converter';

export const myaImage = new ImageConverter(
[{
  squareNumber: 1,
  class: 'red'
}, {
  squareNumber: 2,
  class: 'green'
}],
  [
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
    [ 0 , 1 , 0 , 0 , 0 , 1 , 0 ],
    [ 0 , 1 , 2 , 0 , 2 , 2 , 0 ],
    [ 0 , 1 , 1 , 0 , 1 , 1 , 0 ],
    [ 0 , 2 , 0 , 1 , 0 , 1 , 0 ],
    [ 0 , 1 , 0 , 0 , 0 , 1 , 0 ],
    [ 0 , 1 , 0 , 0 , 0 , 1 , 0 ],
    [ 0 , 2 , 0 , 0 , 0 , 2 , 0 ],
    [ 0 , 1 , 0 , 0 , 0 , 1 , 0 ],
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
  ]
);

/* eslint-disable spaced-comment */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import p5 from 'p5';

export enum TILE_STATUS{
  perfect,
  damaged,
  destroyed,
}

export enum TILE_TYPE{
  ground,
  brick,
  grass,
  iron,
}

export class Tile {
  private x:number = 0;
  private y:number = 0;
  private col:number = 0;
  private row:number = 0;
  //private status:TILE_STATUS = TILE_STATUS.perfect;
  private type:TILE_TYPE = TILE_TYPE.ground;

  constructor(x:number, y:number, col:number, row:number, type?:TILE_TYPE) {
    this.x = x;
    this.y = y;
    this.col = col;
    this.row = row;
    this.type = type ?? TILE_TYPE.ground;
  }

  show(p:p5) {
    p.stroke(255);
    p.strokeWeight(2);

    switch (this.type) {
      case TILE_TYPE.ground:
        p.fill(245, 182, 115);
        break;
      case TILE_TYPE.brick:
        p.fill(184, 83, 83);
        break;
      case TILE_TYPE.grass:
        p.fill(85, 173, 88);
        break;
      case TILE_TYPE.iron:
        p.fill(133, 132, 145);
        break;
      default:
        break;
    }

    p.rect(this.x, this.y, 50, 50);
    p.stroke(0);
    p.strokeWeight(1);
  }
}

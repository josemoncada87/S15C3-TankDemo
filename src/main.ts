/* eslint-disable no-param-reassign */
import './style.css';
import p5 from 'p5';
import { Tile, TILE_TYPE } from './tile';

const baseGrid:number[][] = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 3, 0, 0, 0, 0, 0, 0, 3, 1],
  [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
  [1, 3, 0, 0, 0, 0, 0, 0, 3, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

const grid:Tile[][] = [];

const sketch = (p:p5) => {
  p.setup = () => {
    p.createCanvas(500, 500);
    for (let row = 0; row < 10; row += 1) {
      const tileRow:Tile[] = [];
      for (let col = 0; col < 10; col += 1) {
        let tileType = TILE_TYPE.ground;
        switch (baseGrid[row][col]) {
          case 0:
            tileType = TILE_TYPE.ground;
            break;
          case 1:
            tileType = TILE_TYPE.brick;
            break;
          case 2:
            tileType = TILE_TYPE.grass;
            break;
          case 3:
            tileType = TILE_TYPE.iron;
            break;
          default:
            tileType = TILE_TYPE.ground;
            break;
        }
        tileRow.push(new Tile(col * 50, row * 50, col, row, tileType));
      }
      grid.push(tileRow);
    }
  };

  p.draw = () => {
    p.background(80);
    for (let row = 0; row < 10; row += 1) {
      for (let col = 0; col < 10; col += 1) {
        grid[row][col].show(p);
      }
    }
  };

  p.keyPressed = () => {};
};
// eslint-disable-next-line new-cap
export default new p5(sketch);

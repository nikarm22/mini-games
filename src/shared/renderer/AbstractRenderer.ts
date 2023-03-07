// Types
import IObservable from '../../utils/Observable/index';

export enum Shape {
  POLYGON,
  RECTANGLE,
  CIRCLE,
  IMAGE,
  TEXT,
}

export interface Point {
  x: number,
  y: number,
}

export interface Size {
  width: number,
  height: number,
}


// TODO ::: Separate options for each shape
export interface Options {
  color?: string,
  x?: number,
  y?: number,
  width?: number,
  height?: number,
  radius?: number,
  verticles?: Point[],
  image?: ImageBitmap,
}

export abstract class AbstractRenderer {

  public abstract clear(options: Options): void;
  public abstract draw(shape: Shape, options: Options): void;
  public abstract stroke(shape: Shape, options: Options): void;
  public abstract getSize(): Size;
  public abstract resize(): void;

  public uiEvent: IObservable<any>;
}

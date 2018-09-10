// Types
import IObservable from '../../utils/Observable/index.d';

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

export default interface AbstractRenderer {
  clear: (options: Options) => void,
  draw: (shape: Shape, options: Options) => void,
  stroke: (shape: Shape, options: Options) => void,
  uiEvent: IObservable<any>,
}

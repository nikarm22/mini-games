// Types
import IObservable from '../../utils/Observable/index.d';

export interface Point {
  x: number,
  y: number,
}

export default interface AbstractRenderer {
  clear: (color?: string) => void,
  drawPolygon: (color: string, verticles: Point[]) => void,
  drawRectangle: (color: string, x: number, y: number, width: number, height: number) => void,
  drawCircle: (color: string, x: number, y: number, radius: number) => void,
  drawImage: (image: ImageBitmap | HTMLImageElement, x: number, y: number, width: number, height: number) => void,
  uiEvent: IObservable<any>,
}

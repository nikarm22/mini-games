// Types
import AbstractRednerer, { Point } from '../AbstractRenderer';
import IObservable from '../../../utils/Observable/index.d';

// Classes
import Observable from '../../../utils/Observable/index';

export type IEventConfig = {
  name: string,
  target: boolean | any,
};

export default class CanvasRenderer implements AbstractRednerer {

  private width: number;
  private height: number;

  private parentNode: HTMLElement;
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  public uiEvent: IObservable<any>;

  constructor(
    parentDomNode: HTMLElement,
    uiEventsConfig: IEventConfig[] = [],
  ) {
    this.parentNode = parentDomNode;
    this.width = parentDomNode.clientWidth;
    this.height = parentDomNode.clientHeight;
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.parentNode.appendChild(this.canvas);
    this.context = this.canvas.getContext('2d');
    this.uiEvent = new Observable();

    this.attachEvents(uiEventsConfig);
  }

  private attachEvents(uiEventsConfig: IEventConfig[]): void {
    uiEventsConfig.forEach(({ name, target }) => {
      target
        ? target.addEventListener(name, this.handleNativeEvents)
        : this.canvas.addEventListener(name, this.handleNativeEvents);
    });
  }

  private handleNativeEvents: (e: Event) => void = e => {
    this.uiEvent.emit(e);
  };

  public clear(color = '#ffffff') {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.width, this.height);
  }

  public drawPolygon(color: string, verticles: Point[]) {
    const { context: { moveTo, lineTo }, context } = this;

    context.fillStyle = color;
    context.beginPath();
    verticles.forEach(({ x, y }, index) => {
      !index
        ? moveTo(x, y)
        : lineTo(x, y);
    });
    context.closePath();
    context.fill();
  }

  public drawRectangle(color: string, x: number, y: number, width: number, height: number) {
    const { context } = this;

    context.fillStyle = color;
    context.fillRect(x, y, width, height);
  }

  public drawCircle(color: string, x: number, y: number, radius: number) {
    const { context } = this;

    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.closePath();
    context.fill();

  }

  public drawImage(image: ImageBitmap | HTMLImageElement, x: number, y: number, width: number, height: number) {
    const { context } = this;

    context.drawImage(image, x, y, width, height)
  }
}